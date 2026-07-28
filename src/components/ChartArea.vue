<script setup lang="ts">
import {
  ConnectionLineType,
  useVueFlow,
  VueFlow,
  type NodeChange,
} from '@vue-flow/core'
import type { Recipe } from '../types'
import RawNode from './RawNode.vue'
import { Background } from '@vue-flow/background'
import SpiceNode from './SpiceNode.vue'
import { type Connection } from '@vue-flow/core'
import CutNode from './CutNode.vue'
import BlendNode from './BlendNode.vue'
import ServeNode from './ServeNode.vue'
import TrashNode from './TrashNode.vue'
import BoilNode from './BasicProcessNode.vue'
import { calculateRecipe } from '../recipecalc.ts'
import StrainNode from './StrainNode.vue'

import potIcon from '../assets/icons/pot.svg'
import panIcon from '../assets/icons/pan.svg'
import grillIcon from '../assets/icons/grill.svg'
import deepfrierIcon from '../assets/icons/deepfrier.svg'
import BakeNode from './BakeNode.vue'

const recipe = defineModel<Recipe>()

function remove(id: string) {
  recipe.value?.nodes.splice(
    recipe.value.nodes.findIndex((n) => n.id === id),
    1,
  )
}

function connect(connection: Connection) {
  if (!recipe.value) return
  console.log(calculateRecipe(recipe.value))

  const same = recipe.value.edges.some(
    (edge) =>
      edge.source === connection.source && edge.target === connection.target,
  )

  recipe.value.edges = recipe.value.edges.filter(
    (edge) => edge.source !== connection.source,
  )

  if (!same) {
    recipe.value.edges.push({
      id: crypto.randomUUID(),
      source: connection.source,
      target: connection.target,
    })
  }
}

const { applyNodeChanges } = useVueFlow()

function nodesChange(changes: NodeChange[]) {
  if (!recipe.value) return

  recipe.value.nodes = applyNodeChanges(changes)
}
</script>

<template>
  <VueFlow
    :nodes="recipe?.nodes"
    :edges="recipe?.edges"
    :default-edge-options="{ type: 'step' }"
    :connection-line-type="ConnectionLineType.Step"
    @nodes-change="nodesChange"
    @connect="connect"
  >
    <template #node-raw="nodeProps">
      <RawNode v-bind="nodeProps" @remove="remove" />
    </template>

    <template #node-spice="nodeProps">
      <SpiceNode v-bind="nodeProps" @remove="remove" />
    </template>

    <template #node-cut="nodeProps">
      <CutNode v-bind="nodeProps" @remove="remove" />
    </template>

    <template #node-blend="nodeProps">
      <BlendNode v-bind="nodeProps" @remove="remove" />
    </template>

    <template #node-serve="nodeProps">
      <ServeNode v-bind="nodeProps" />
    </template>

    <template #node-boil="nodeProps">
      <BoilNode
        v-bind="nodeProps"
        @remove="remove"
        title="Boil"
        :icon="potIcon"
      />
    </template>

    <template #node-trash="nodeProps">
      <TrashNode v-bind="nodeProps" @remove="remove" />
    </template>

    <template #node-strain="nodeProps">
      <StrainNode v-bind="nodeProps" @remove="remove" />
    </template>

    <template #node-grill="nodeProps">
      <BoilNode
        v-bind="nodeProps"
        @remove="remove"
        title="Grill"
        :icon="grillIcon"
      />
    </template>

    <template #node-fry="nodeProps">
      <BoilNode
        v-bind="nodeProps"
        @remove="remove"
        title="Boil"
        :icon="panIcon"
      />
    </template>

    <template #node-deepfry="nodeProps">
      <BoilNode
        v-bind="nodeProps"
        @remove="remove"
        title="Deep Fry"
        :icon="deepfrierIcon"
      />
    </template>

    <template #node-bake="nodeProps">
      <BakeNode v-bind="nodeProps" @remove="remove" />
    </template>

    <Background pattern-color="#ccc" :gap="20" :size="2" />
  </VueFlow>
</template>
