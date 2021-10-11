<template>
  <div class="user">
    <page-search
      :searchConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="users"
      @newDialogClick="handleNewDialog"
      @editDialogClick="handleEditDialog"
    ></page-content>
    <page-modal
      ref="PageModalRef"
      pageName="users"
      :defaultInfo="modalInfo"
      :modalConfig="modalConfigInfo"
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
  name: 'user',
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    //将角色和部门信息加入modalconfig中
    const store = useStore()
    const modalConfigInfo = computed(() => {
      const roleOptions: IFormItem | undefined = modalConfig.formItems?.find(
        (item) => item.field === 'roleId'
      )
      roleOptions!.options = store.state.entireRoles.map((item: any) => {
        return { label: item.name, value: item.id }
      })
      const departmentOptions: IFormItem | undefined = modalConfig.formItems?.find(
        (item) => item.field === 'departmentId'
      )
      departmentOptions!.options = store.state.entireDepartments.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })

    //配制dialog ->新建、编辑、删除等-------------------------------
    const newDialogCallback = () => {
      const passwordItem = modalConfig.formItems?.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editDialogCallback = () => {
      const passwordItem = modalConfig.formItems?.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }
    const [modalInfo, PageModalRef, handleNewDialog, handleEditDialog] = usePageContent(
      newDialogCallback,
      editDialogCallback
    )

    return {
      searchConfig,
      contentConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      handleNewDialog,
      PageModalRef,
      handleEditDialog,
      modalInfo,
      modalConfigInfo
    }
  }
})
</script>

<style scoped></style>
