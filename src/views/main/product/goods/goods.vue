<template>
  <div class="goods">
    <page-search
      :searchConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content ref="pageContentRef" :contentConfig="contentConfig" pageName="goods">
      <template #imageSlot="scope">
        <el-image
          style="width: 50px; height: 50px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'goods',
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return { searchConfig, contentConfig, pageContentRef, handleResetClick, handleQueryClick }
  }
})
</script>

<style scoped></style>
