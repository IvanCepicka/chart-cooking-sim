<script setup lang="ts">
import { computed } from 'vue'
import { useGlobal } from '../store'
import { offers } from '../offers'
import type { Offer } from '../types'
import { ingredients, spices } from '../data'

const global = useGlobal()

const unlockedOffers = computed(
  () =>
    offers
      .map((l, i) => {
        if (global.offerTiers[i] >= l.length) return { exists: false }
        const offer = l[global.offerTiers[i]]
        let data
        if (offer.spice) {
          data = spices.find((s) => s.id === offer.ingredient)
        } else {
          data = ingredients.find((i) => i.id === offer.ingredient)
        }
        return {
          ...offer,
          unlocked: global.level >= offer.unlocks,
          exists: true,
          img: data?.icon,
          name: data!.name,
          i,
        }
      })
      .filter((o) => o.exists) as (Offer & {
      unlocked: boolean
      img?: string
      name: string
      i: number
    })[],
)
</script>

<template>
  <div class="section">
    <div class="stats">
      <p>Balance {{ global.money }}c</p>
    </div>
    <div class="offers">
      <div v-for="(offer, i) in unlockedOffers" class="offer">
        <p class="b">Offer {{ i + 1 }}</p>
        <div class="h">
          <p>Unlocks {{ offer.name }}</p>
          <img
            v-if="offer.img"
            :src="offer.img"
            class="icon"
            :alt="offer.name"
          />
        </div>
        <button
          v-if="offer.unlocked"
          @click="global.purchaseStoreIngredient(offer.i)"
        >
          Unlock for {{ offer.cost }}c
        </button>
        <p v-else>Requires level {{ offer.unlocks }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
}
.stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  align-items: center;
  padding: 20px;
}
.offers {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  align-items: center;
  flex-grow: 1;
}
.offer {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  min-width: 200px;
}
.b {
  font-weight: 600;
}
.h {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}
.icon {
  height: 30px;
}
</style>
