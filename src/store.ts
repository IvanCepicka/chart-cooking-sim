import { acceptHMRUpdate, defineStore } from 'pinia'
import { db } from './db'
import { calculateRecipe } from './recipecalc'
import { exampleRecipes } from './examples'
import { offers } from './offers'
import { ingredients, spices } from './data'

interface Order {
  request: string
  remaining: number
  sell: number
  cost: number
  duration: number
}

export interface GlobalState {
  money: number
  level: number
  xpRemaining: number
  menu: string[]
  orders: Order[]
  autoAccept: boolean
  lastTick: number
  offerTiers: number[]
}

const defaultState: GlobalState = {
  money: 100,
  level: 1,
  xpRemaining: xpToNextLevel(1),
  menu: ['example:0360961a-8a33-4a23-a7e9-f755e8a8f67f'],
  orders: [],
  autoAccept: false,
  lastTick: performance.now(),
  offerTiers: [],
}

export const maxLevel = 6

function xpToNextLevel(lvl: number) {
  switch (lvl) {
    case 1:
      return 200
    case 2:
      return 800
    case 3:
      return 1700
    case 4:
      return 2000
    case 5:
      return 2000
    default:
      return Infinity
  }
}

if (import.meta.env.DEV) {
  defaultState.money = 999999999
  defaultState.level = maxLevel
  defaultState.xpRemaining = xpToNextLevel(maxLevel)
}

const STATS_KEY = 'stats'
const MENU_KEY = 'menu'

export const useGlobal = defineStore('global', {
  state: () => structuredClone(defaultState),

  actions: {
    async init() {
      this.lastTick = performance.now()
      for (let i = 0; i < offers.length; i++) {
        this.offerTiers.push(0)
      }
      this.orders = [
        await this.generateRecipe(),
        await this.generateRecipe(),
        await this.generateRecipe(),
      ]
    },

    load() {
      const levelMixed = localStorage.getItem(STATS_KEY)
      if (levelMixed) {
        const spl = levelMixed.split(';')
        this.money = parseInt(spl[0])
        this.level = parseInt(spl[1])
        this.xpRemaining = parseInt(spl[2])
      }

      const l = localStorage.getItem(MENU_KEY)
      if (l) {
        this.menu = l.split(';')
      }
      const ll = localStorage.getItem('orders')
      if (ll) {
        this.orders = JSON.parse(ll)
      }

      const aa = localStorage.getItem('autoaccept')
      if (aa) this.autoAccept = aa === 'a'

      const offerTiers = localStorage.getItem('offerTiers')
      if (offerTiers) {
        const spl = offerTiers.split(';')
        for (let i = 0; i < spl.length; i++) {
          this.offerTiers[i] = parseInt(spl[i])
        }
      }
    },

    save() {
      localStorage.setItem(
        STATS_KEY,
        `${this.money};${this.level};${this.xpRemaining}`,
      )
      localStorage.setItem(MENU_KEY, this.menu.join(';'))
      localStorage.setItem('orders', JSON.stringify(this.orders))
      localStorage.setItem('autoaccept', this.autoAccept ? 'a' : 'm')
      localStorage.setItem('offerTiers', this.offerTiers.join(';'))
    },

    async tick() {
      // preserve xp when paused by browser
      const now = performance.now()
      if (now - this.lastTick >= 2000 && this.autoAccept) {
        const xpToAdd = Math.floor((now - this.lastTick) / 1000) * 3
        for (let i = 0; i < xpToAdd; i++) {
          this.xpRemaining--
          this.checkXp()
        }
      }
      this.lastTick = now

      this.updateNextLevel()
      for (let i = 0; i < 3; i++) {
        const order = this.orders[i]
        if (order.remaining < 0) continue
        if (order.remaining === 1) {
          this.money += order.sell

          for (let i = 0; i < order.duration; i++) {
            this.xpRemaining--
            this.checkXp()
          }

          this.orders[i] = await this.generateRecipe()
        } else {
          order.remaining--
        }
      }

      if (this.autoAccept) {
        for (let i = 0; i < this.orders.length; i++) {
          await this.acceptOrder(i)
        }
      }
    },

    updateNextLevel() {
      if (!isFinite(this.xpRemaining) && this.level < maxLevel) {
        this.xpRemaining = xpToNextLevel(this.level)
      }
    },

    checkXp() {
      if (this.xpRemaining <= 0) {
        this.level++
        this.xpRemaining = xpToNextLevel(this.level)
        return true
      }
      return false
    },

    async acceptOrder(i: number) {
      if (this.orders[i].remaining >= 0) return
      if (this.money < this.orders[i].cost) return
      this.money -= this.orders[i].cost
      this.orders[i].remaining = this.orders[i].duration
    },

    async cancelOrder(i: number) {
      this.orders[i] = await this.generateRecipe()
    },

    async generateRecipe(): Promise<Order> {
      const id = this.menu[Math.floor(Math.random() * this.menu.length)]
      const data = (await this.getRecipe(id))!
      const c = calculateRecipe(data)
      return {
        request: id,
        sell: c.sell,
        cost: c.cost,
        duration: c.time,
        remaining: -1,
      }
    },

    async getRecipe(id: string) {
      if (id.startsWith('example:')) {
        return exampleRecipes.find((r) => r.id === id.slice(8))
      }
      return await db.recipes.get(id.slice(6))
    },

    purchaseStoreIngredient(i: number) {
      const offer = offers[i]?.[this.offerTiers[i]]
      if (!offer || this.money < offer.cost) return
      this.offerTiers[i]++
      this.money -= offer.cost
    },

    getUnlockedIngredients() {
      return ingredients.filter((i) => {
        if (i.unlocks === 'store') {
          const offersIdx = offers.findIndex(
            (o) => o.findIndex((v) => v.ingredient === i.id && !v.spice) >= 0,
          )
          const offerIdx = offers[offersIdx].findIndex(
            (o) => o.ingredient === i.id && !o.spice,
          )
          return this.offerTiers[offersIdx] > offerIdx
        }
        return this.level >= i.unlocks
      })
    },

    getUnlockedSpices() {
      return spices.filter((r) => {
        if (r.unlocks === 'store') {
          const offersIdx = offers.findIndex(
            (o) => o.findIndex((v) => v.ingredient === r.id && v.spice) >= 0,
          )
          const offerIdx = offers[offersIdx].findIndex(
            (o) => o.ingredient === r.id && o.spice,
          )
          return this.offerTiers[offersIdx] > offerIdx
        }
        return this.level >= r.unlocks
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobal, import.meta.hot))
}
