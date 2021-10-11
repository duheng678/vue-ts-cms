<template>
  <div class="category">
    <page-search
      :searchConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content ref="pageContentRef" :contentConfig="contentConfig" pageName="category">
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'category',
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return { searchConfig, contentConfig, pageContentRef, handleResetClick, handleQueryClick }
  }
})
</script>

<style scoped></style>
