<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import NodeWrapper from './NodeWrapper.vue'
import ovenicon from '../assets/icons/oven.svg'

const emit = defineEmits(['remove'])

const props = defineProps<{
  id: string
  data: {
    duration: number
    temperature: number
  }
}>()

function remove() {
  emit('remove', props.id)
}
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <NodeWrapper title="Bake" :title-image="ovenicon" @remove="remove">
      <label>Seconds</label>
      <input type="number" min="5" step="5" v-model="props.data.duration" />

      <label>Temperature</label>
      <input
        type="number"
        min="10"
        step="10"
        v-model="props.data.temperature"
      />
    </NodeWrapper>

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
