<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { IBreadcrumbs } from '../types'

export default defineComponent({
  props: { breadcrumbs: { type: Array as PropType<IBreadcrumbs[]>, default: () => [] } },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
