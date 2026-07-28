<script setup lang="ts">
import { computed } from 'vue'
import { ingredients } from '../data'
import { Handle, Position } from '@vue-flow/core'
import NodeWrapper from './NodeWrapper.vue'

const emit = defineEmits(['remove'])

const props = defineProps<{
  id: string
  data: {
    id: string
    count: number
  }
}>()

const data = computed(() => ingredients.find((i) => i.id === props.data.id))

function remove() {
  emit('remove', props.id)
}
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <NodeWrapper title="Add raw" @remove="remove">
      <label>Ingredient</label>
      <div class="g_name-icon">
        <p>{{ data?.name }}</p>
        <img v-if="data?.icon" :src="data?.icon" :alt="data?.name" />
      </div>

      <template v-if="data?.type === 'solid'">
        <label>Count</label>
        <input type="number" step="1" min="1" v-model="props.data.count" />
      </template>
      <template v-if="data?.type === 'liquid'">
        <label>Milliliters</label>
        <input type="number" step="25" min="25" v-model="props.data.count" />
      </template>
    </NodeWrapper>

    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
