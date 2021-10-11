<template>
  <div class="chat">
    <sky-editor></sky-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkyEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: { SkyEditor },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.chat {
  margin-top: 20px;
}
</style>
