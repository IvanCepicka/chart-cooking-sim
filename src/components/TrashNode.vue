<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import NodeWrapper from './NodeWrapper.vue'
import trashIcon from '../assets/icons/trash.svg'

const emit = defineEmits(['remove'])

const props = defineProps<{
  id: string
  data: {
    amount: number
  }
}>()

function remove() {
  emit('remove', props.id)
}
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <NodeWrapper title="Trash" @remove="remove" :title-image="trashIcon">
      <label>Percentage</label>
      <input type="number" step="1" min="1" v-model="props.data.amount" />
    </NodeWrapper>

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
