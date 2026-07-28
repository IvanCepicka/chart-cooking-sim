<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import serveIcon from '../assets/icons/serve.svg'
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <div class="g_node-content">
      <p class="g_node-title">
        Serve
        <img alt="Serve" :src="serveIcon" />
      </p>
      <div class="g_node-grid" title="Add a new ingredint"></div>
    </div>

    <Handle type="target" :position="Position.Top" />
  </div>
</template>
