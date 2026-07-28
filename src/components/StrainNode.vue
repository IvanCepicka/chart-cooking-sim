<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import NodeWrapper from './NodeWrapper.vue'
import colanderIcon from '../assets/icons/colander.svg'

const emit = defineEmits(['remove'])

const props = defineProps<{
  id: string
}>()

function remove() {
  emit('remove', props.id)
}
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <NodeWrapper title="Strain" @remove="remove" :title-image="colanderIcon" />

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
