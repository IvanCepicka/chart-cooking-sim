<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGlobal } from '../store'
import { db } from '../db'
import type { Recipe } from '../types'
import { exampleRecipes } from '../examples'

const global = useGlobal()
const recipes = ref<Recipe[]>([])

refreshRecipes()

function getName(id: string) {
  return (recipes.value as Recipe[]).find((r) => r.id === id.split(':')[1])
    ?.name
}

async function refreshRecipes() {
  recipes.value = [...exampleRecipes, ...(await db.recipes.toArray())].sort(
    (a, b) => a.name.localeCompare(b.name),
  )
}

const menuRecipes = computed(() =>
  (recipes.value as Recipe[]).filter((r) => {
    if ('unlocks' in r) {
      return global.menu.includes('example:' + r.id)
    } else {
      return global.menu.includes('saved:' + r.id)
    }
  }),
)
</script>

<template>
  <div class="section">
    <div class="main">
      <div class="thing2">
        <p>balance {{ global.money.toFixed(2) }}c</p>
        <p>level {{ global.level }}</p>
        <p v-if="isFinite(global.xpRemaining)">
          {{ global.xpRemaining }} xp to next level
        </p>
        <button v-if="global.autoAccept" @click="global.autoAccept = false">
          Manual accept
        </button>
        <button v-else @click="global.autoAccept = true">Auto accept</button>
      </div>
      <div class="thing">
        <div class="order" v-for="(o, i) in global.orders">
          <p class="b">Order {{ i + 1 }}</p>
          <p>{{ getName(o.request) }}</p>

          <template v-if="o.remaining === -1">
            <button @click="global.acceptOrder(i)">Accept</button>
            <button @click="global.cancelOrder(i)">Cancel</button>
          </template>

          <template v-else>
            <p>Time remaining: {{ o.remaining }}s</p>
          </template>
        </div>
      </div>
    </div>

    <div class="menu">
      <p v-for="r in menuRecipes">{{ r.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: row;
}
.menu {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10px;
  min-width: 250px;
  align-items: center;
  gap: 20px;
  border-left: solid 1px #ccc;
}
.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.order {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  min-width: 200px;
}
.b {
  font-weight: 600;
}
.thing,
.thing2 {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.thing2 {
  padding: 20px;
  flex-grow: unset;
}
</style>
