<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import NodeWrapper from './NodeWrapper.vue'

const emit = defineEmits(['remove'])

const props = defineProps<{
  title: string
  icon: string
  id: string
  data: {
    duration: number
  }
}>()

function remove() {
  emit('remove', props.id)
}
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <NodeWrapper
      :title="props.title"
      :title-image="props.icon"
      @remove="remove"
    >
      <label>Seconds</label>
      <input type="number" min="5" step="5" v-model="props.data.duration" />
    </NodeWrapper>

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
