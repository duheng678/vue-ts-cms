<template>
  <div class="department">
    <page-search
      :searchConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="department"
      @newDialogClick="handleNewDialog"
      @editDialogClick="handleEditDialog"
    ></page-content>
    <page-modal
      :modalConfig="modalConfigInfo"
      ref="PageModalRef"
      pageName="department"
      :defaultInfo="modalInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageContent } from '@/hooks/usePageContent'

import { useStore } from '@/store'
import { IFormItem } from '@/base-ui/form/types'
export default defineComponent({
  name: 'department',
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const store = useStore()
    const modalConfigInfo = computed(() => {
      const departmentOptions: IFormItem | undefined = modalConfig.formItems?.find(
        (item) => item.field === 'parentId'
      )
      departmentOptions!.options = store.state.entireDepartments.map((item: any) => {
        return { label: item.name, value: item.parentId }
      })

      return modalConfig
    })

    const [modalInfo, PageModalRef, handleNewDialog, handleEditDialog] = usePageContent()
    return {
      searchConfig,
      contentConfig,
      modalConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalInfo,
      PageModalRef,
      handleNewDialog,
      handleEditDialog,
      modalConfigInfo
    }
  }
})
</script>

<style scoped></style>
