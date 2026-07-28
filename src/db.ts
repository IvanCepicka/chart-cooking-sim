import { Dexie, liveQuery, type EntityTable } from 'dexie'
import { onUnmounted, ref } from 'vue'
import type { Recipe } from './types'

export const db = new Dexie('ChartCookingSave') as Dexie & {
  recipes: EntityTable<Recipe, 'id'>
}

db.version(1).stores({
  recipes: 'id,name,nodes,edges',
})

export function useDB() {
  const recipes = ref<Recipe[]>([])

  const subscription = liveQuery(() => db.recipes.toArray()).subscribe(
    (value) => {
      recipes.value = value
    },
  )

  onUnmounted(() => subscription.unsubscribe())

  return { recipes }
}
