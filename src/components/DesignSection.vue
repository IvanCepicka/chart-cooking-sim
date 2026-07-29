<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { Recipe } from '../types.ts'
import ChartArea from './ChartArea.vue'
import { ingredients } from '../data.ts'
import knifeIcon from '../assets/icons/knife.svg'
import blendIcon from '../assets/icons/mixer.svg'
import trashIcon from '../assets/icons/trash.svg'
import potIcon from '../assets/icons/pot.svg'
import colanderIcon from '../assets/icons/colander.svg'
import { db } from '../db.ts'
import { calculateRecipe } from '../recipecalc.ts'
import { exampleRecipes } from '../examples.ts'

import panIcon from '../assets/icons/pan.svg'
import grillIcon from '../assets/icons/grill.svg'
import deepfrierIcon from '../assets/icons/deepfrier.svg'
import ovenIcon from '../assets/icons/oven.svg'
import { useGlobal } from '../store.ts'

const LAST_RECIPE_KEY = 'lastRecipeId'

const exampleId = ref<string | null>(null)

onMounted(async () => {
  await refreshRecipes()

  function log(e: KeyboardEvent) {
    if (import.meta.env.DEV && e.key === 'e' && !e.repeat) {
      console.log(JSON.stringify(serializeRecipe(recipe.value)))
    }
  }

  window.addEventListener('keydown', log)

  const lastId = localStorage.getItem(LAST_RECIPE_KEY)

  if (!lastId) return

  loadRecipe(lastId)

  return () => {
    window.removeEventListener('keydown', log)
  }
})

const recipe = ref<Recipe>({
  id: crypto.randomUUID(),
  name: 'New recipe',
  nodes: [
    {
      id: crypto.randomUUID(),
      type: 'serve',
      position: { x: 0, y: 0 },
    },
  ],
  edges: [],
})

const calculated = computed(() => calculateRecipe(recipe.value as Recipe))

function newId() {
  return crypto.randomUUID()
}

function newPosition() {
  const x = Math.random() * 500
  const y = Math.random() * 500
  return { x, y }
}

function getExampleId() {
  return 'unlocks' in recipe.value
    ? 'example:' + exampleId.value
    : 'saved:' + recipe.value.id
}

function addRaw(id: string) {
  const data = ingredients.find((i) => i.id === id)

  recipe.value.nodes.push({
    id: newId(),
    type: 'raw',
    position: newPosition(),
    data: {
      id,
      count: data?.type === 'solid' ? 1 : 25,
    },
  })
}

function addSpice(id: string) {
  recipe.value.nodes.push({
    id: newId(),
    type: 'spice',
    position: newPosition(),
    data: {
      id,
      amount: 1,
    },
  })
}

function addCut() {
  recipe.value.nodes.push({
    id: newId(),
    type: 'cut',
    position: newPosition(),
    data: {
      pieces: 2,
    },
  })
}

function addBlend() {
  recipe.value.nodes.push({
    id: newId(),
    type: 'blend',
    position: newPosition(),
  })
}

function addTrash() {
  recipe.value.nodes.push({
    id: newId(),
    type: 'trash',
    position: newPosition(),
    data: {
      amount: 50,
    },
  })
}

function addBasicProcess(name: string) {
  recipe.value.nodes.push({
    id: newId(),
    type: name,
    position: newPosition(),
    data: {
      duration: 30,
    },
  })
}

function addBake() {
  recipe.value.nodes.push({
    id: newId(),
    type: 'bake',
    position: newPosition(),
    data: {
      duration: 30,
      temperature: 80,
    },
  })
}

function addStrain() {
  recipe.value.nodes.push({
    id: newId(),
    type: 'strain',
    position: newPosition(),
  })
}

const global = useGlobal()

function addToMenu() {
  global.menu.push(getExampleId())
}
function removeFromMenu() {
  global.menu = global.menu.filter((a) => a !== getExampleId())
  if (global.menu.length <= 0) {
    global.menu.push('example:0360961a-8a33-4a23-a7e9-f755e8a8f67f')
  }
}

function serializeRecipe(recipe: Recipe): Recipe {
  return {
    id: recipe.id,
    name: recipe.name,
    nodes: recipe.nodes.map((n) => ({
      id: n.id,
      type: n.type,
      position: {
        x: n.position.x,
        y: n.position.y,
      },
      data: n.data ? JSON.parse(JSON.stringify(n.data)) : undefined,
    })),
    edges: recipe.edges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle,
    })),
  }
}

const savedRecipes = ref<Recipe[]>([])
const selectedRecipe = ref('')

async function refreshRecipes() {
  savedRecipes.value = (await db.recipes.toArray()).sort((a, b) =>
    a.name.localeCompare(b.name),
  )
}

async function save() {
  if ('unlocks' in recipe.value) return
  const copy = serializeRecipe(recipe.value as Recipe)

  await db.recipes.put(copy)
  localStorage.setItem(LAST_RECIPE_KEY, 'saved:' + copy.id)
  selectedRecipe.value = 'saved:' + copy.id

  await refreshRecipes()
}

function loadRecipe(value: string) {
  const [kind, id] = value.split(':')

  if (kind === 'saved') {
    loadSavedRecipe(id)
  } else if (kind === 'example') {
    loadExampleRecipe(id)
  }

  selectedRecipe.value = value
}

async function loadSavedRecipe(id: string) {
  const loaded = await db.recipes.get(id)
  if (!loaded) return

  recipe.value = loaded
  localStorage.setItem(LAST_RECIPE_KEY, 'saved:' + id)
  exampleId.value = null
}

function loadExampleRecipe(id: string) {
  const example = exampleRecipes.find((r) => r.id === id)
  if (!example) return

  exampleId.value = example.id
  recipe.value = {
    ...structuredClone(example),
    id: crypto.randomUUID(),
  }

  localStorage.setItem(LAST_RECIPE_KEY, 'example:' + id)
}

async function saveAs() {
  const copy = serializeRecipe(recipe.value as Recipe)

  copy.id = crypto.randomUUID()

  await db.recipes.add(copy)

  recipe.value = copy
  localStorage.setItem(LAST_RECIPE_KEY, 'saved:' + copy.id)
  selectedRecipe.value = 'saved:' + copy.id
  exampleId.value = null
  await refreshRecipes()
}

async function deleteRecipe() {
  if ('unlocks' in recipe.value) return
  if (!confirm(`Delete "${recipe.value.name}"?`)) return

  global.menu = global.menu.filter((a) => a !== 'saved:' + recipe.value.id)
  if (global.menu.length <= 0) {
    global.menu.push('example:0360961a-8a33-4a23-a7e9-f755e8a8f67f')
  }

  await db.recipes.delete(recipe.value.id)

  await refreshRecipes()

  localStorage.removeItem(LAST_RECIPE_KEY)

  if (savedRecipes.value.length > 0) {
    loadRecipe('saved:' + savedRecipes.value[0].id)
  } else {
    newRecipe()
  }
}

function newRecipe() {
  recipe.value = {
    id: crypto.randomUUID(),
    name: 'New recipe',
    nodes: [
      {
        id: crypto.randomUUID(),
        type: 'serve',
        position: { x: 0, y: 0 },
      },
    ],
    edges: [],
  }

  selectedRecipe.value = ''
  localStorage.removeItem(LAST_RECIPE_KEY)
}

const unlockedExamples = computed(() =>
  exampleRecipes.filter((r) => global.level >= r.unlocks),
)
const unlockedIngredients = computed(() => global.getUnlockedIngredients())
const unlockedSpices = computed(() => global.getUnlockedSpices())
</script>

<template>
  <div class="section">
    <div class="main">
      <ChartArea v-model="recipe" class="area" />

      <div class="bottom-bar">
        <div class="bottom-bar-thing">
          <label>Ingredients Cost</label>
          <p>{{ calculated.cost.toFixed(2) }}c</p>

          <label>Sell Cost</label>
          <p>{{ calculated.sell.toFixed(2) }}c</p>

          <label>Preparation Time</label>
          <p>{{ calculated.time }}s</p>
        </div>

        <div class="bottom-bar-thing">
          <input
            class="recipe-name"
            v-model="recipe.name"
            placeholder="Recipe name"
          />

          <button @click="save">Save</button>

          <button @click="saveAs">Save as</button>

          <select v-model="selectedRecipe" @change="loadRecipe(selectedRecipe)">
            <option value="" disabled>Unsaved recipe</option>

            <optgroup label="My recipes">
              <option
                v-for="r in savedRecipes"
                :key="r.id"
                :value="'saved:' + r.id"
              >
                {{ r.name }}
              </option>
            </optgroup>

            <optgroup label="Examples">
              <option
                v-for="r in unlockedExamples"
                :key="r.id"
                :value="'example:' + r.id"
              >
                {{ r.name }}
              </option>
            </optgroup>
          </select>

          <button @click="newRecipe">New</button>
          <button
            @click="removeFromMenu"
            v-if="global.menu.includes(getExampleId())"
          >
            Remove from menu
          </button>
          <button @click="addToMenu" v-else>Add to menu</button>
          <button @click="deleteRecipe">Delete</button>
        </div>
      </div>
    </div>

    <div class="toolbar">
      <div class="add-raw" @click="addTrash">
        <p>Trash</p>
        <img :src="trashIcon" alt="Trash" />
      </div>
      <div class="add-raw" @click="addStrain">
        <p>Strain</p>
        <img :src="colanderIcon" alt="Strain" />
      </div>
      <div class="add-raw" @click="addCut">
        <p>Cut</p>
        <img :src="knifeIcon" alt="Cut" />
      </div>
      <div class="add-raw" @click="addBlend">
        <p>Blend</p>
        <img :src="blendIcon" alt="Blend" />
      </div>
      <div class="add-raw" @click="addBasicProcess('boil')">
        <p>Boil</p>
        <img :src="potIcon" alt="Boil" />
      </div>
      <div class="add-raw" @click="addBasicProcess('fry')">
        <p>Fry</p>
        <img :src="panIcon" alt="Fry" />
      </div>
      <div class="add-raw" @click="addBasicProcess('deepfry')">
        <p>Deep Fry</p>
        <img :src="deepfrierIcon" alt="Deep Fry" />
      </div>
      <div class="add-raw" @click="addBake">
        <p>Bake</p>
        <img :src="ovenIcon" alt="Bake" />
      </div>
      <div class="add-raw" @click="addBasicProcess('grill')">
        <p>Grill</p>
        <img :src="grillIcon" alt="Grill" />
      </div>

      <div
        class="add-raw"
        v-for="i in unlockedIngredients"
        :key="i.id"
        @click="addRaw(i.id)"
      >
        <p>{{ i.name }}</p>
        <img v-if="i.icon" :src="i.icon" :alt="i.name" />
      </div>

      <div
        class="add-raw"
        v-for="s in unlockedSpices"
        :key="s.id"
        @click="addSpice(s.id)"
      >
        <p>{{ s.name }}</p>
        <img v-if="s.icon" :src="s.icon" :alt="s.name" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.area {
  border-bottom: solid 1px #ccc;
  flex-grow: 1;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.toolbar {
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

.add-raw {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.add-raw p {
  font-weight: 600;
}

.add-raw img {
  height: 40px;
}

.bottom-bar {
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  gap: 10px;
  min-height: 100px;
  justify-content: center;
}

.bottom-bar-thing {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.bottom-bar button,
.bottom-bar select {
  font-family: 'Roboto';
  font-size: 18px;
}
</style>
