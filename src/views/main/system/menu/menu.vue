<template>
  <div class="menu">
    <page-content
      ref="pageContentRef"
      pageName="menu"
      :contentConfig="contentConfig"
      @newDialogClick="handleNewDialog"
      @editDialogClick="handleEditDialog"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentConfig } from './config/content.config'
import { usePageContent } from '@/hooks/usePageContent'

export default defineComponent({
  name: 'menus',
  setup() {
    const [modalInfo, PageModalRef, handleNewDialog, handleEditDialog] = usePageContent()
    return { contentConfig, modalInfo, PageModalRef, handleNewDialog, handleEditDialog }
  }
})
</script>

<style scoped></style>
