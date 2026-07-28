<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import NodeWrapper from './NodeWrapper.vue'
import knifeIcon from '../assets/icons/knife.svg'

const emit = defineEmits(['remove'])

const props = defineProps<{
  id: string
  data: {
    pieces: number
  }
}>()

function remove() {
  emit('remove', props.id)
}
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <NodeWrapper title="Cut" @remove="remove" :title-image="knifeIcon">
      <label>Pieces</label>
      <input type="number" step="1" min="2" v-model="props.data.pieces" />
    </NodeWrapper>

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
