<template>
  <div class="list">
    <page-content :contentConfig="contentConfig"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentConfig } from './config/content.config'

export default defineComponent({
  name: 'list',
  setup() {
    return { contentConfig }
  }
})
</script>

<style scoped></style>
