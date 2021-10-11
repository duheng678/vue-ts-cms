<template>
  <h2 class="not-found">页面加载错误, 请联系管理员~</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
.not-found {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}
</style>
