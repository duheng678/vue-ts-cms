<template>
  <div class="role">
    <page-search
      :searchConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="role"
      @newDialogClick="handleNewDialog"
      @editDialogClick="handleEditDialog"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      ref="PageModalRef"
      pageName="role"
      :defaultInfo="modalInfo"
      :roleTreeInfo="roleTree"
    >
      <el-tree
        ref="elTreeRef"
        :data="roleMenus"
        :check-strictly="false"
        show-checkbox
        node-key="id"
        :props="{ label: 'name', children: 'children' }"
        @check="handleMenuCheckChange"
      >
      </el-tree>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from 'vue'
import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageContent } from '@/hooks/usePageContent'
import { modalConfig } from './config/modal.config'
import { getMenuChecks } from '@/utils/map-info'

import { useStore } from '@/store'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  setup() {
    //查询、重置功能
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    //新建、编辑的dialog页面中的角色树
    const store = useStore()

    //将创建的角色信息，传给roleTree组件并设置

    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editDialogCallback = (item: any) => {
      nextTick(() => {
        const checks = getMenuChecks(item.menuList)
        elTreeRef.value?.setCheckedKeys(checks, true)
      })
    }
    //将选定的角色菜单列表赋值给roleTree

    const roleTree = ref({})
    const handleMenuCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      roleTree.value = { menuList }
    }

    const [modalInfo, PageModalRef, handleNewDialog, handleEditDialog] = usePageContent(
      undefined,
      editDialogCallback
    )
    const roleMenus = computed(() => store.state.entireMenus)
    return {
      searchConfig,
      contentConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      modalConfig,
      modalInfo,
      PageModalRef,
      handleNewDialog,
      handleEditDialog,
      roleMenus,
      handleMenuCheckChange,
      elTreeRef,
      roleTree
    }
  }
})
</script>

<style scoped></style>
