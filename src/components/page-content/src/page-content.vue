<template>
  <div class="page-content">
    <sky-table
      :listData="pageListData"
      :totalCount="totalCount"
      v-bind="contentConfig"
      v-model:pagination="pageInfo"
    >
      <template #newPage v-if="!contentConfig.isAddItem">
        <el-button type="primary" size="medium" @click="handleNewDialogClick"> 新建</el-button>
      </template>
      <template #enable="scope">
        <el-button :type="scope.row.enable ? 'success' : 'danger'" size="mini" plain>
          {{ $filters.showStatus(scope.row.enable) }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handler">
          <el-button
            type="text"
            icon="el-icon-edit"
            size="small"
            @click="handleEditDialogClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            icon="el-icon-delete"
            size="small"
            class="delete-btn"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <template v-for="(item, index) in otherPropSlots" :key="index" #[item.slotName]="scope">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
      <!-- <template #imageSlot="scope">
        <slot name="imageSlot" :row="scope.row"></slot>
      </template> -->
    </sky-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import SkyTable from '@/base-ui/table'
import { useStore } from '@/store'

export default defineComponent({
  name: 'PageContent',
  components: { SkyTable },
  props: {
    pageName: { type: String, required: true },
    contentConfig: { type: Object, required: true }
  },
  emits: ['newDialogClick', 'editDialogClick'],
  setup(props, { emit }) {
    // 配制分页pagination
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())
    //请求数据并保存在vuex->system
    const store = useStore()
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListDataAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()
    //从vuex中请求数据
    //商品或用户信息
    const pageListData = computed(() => store.getters['system/pageListData'](props.pageName))
    //商品或用户数量
    const totalCount = computed(() => store.getters['system/pageListCount'](props.pageName))
    //私有插槽
    const otherPropSlots = props.contentConfig.tableItems.filter((item: any) => {
      if (item.slotName === 'createAt') return false
      else if (item.slotName === 'updateAt') return false
      else if (item.slotName === 'handler') return false
      else if (item.slotName === 'enable') return false
      return true
    })

    //新建dialog对话框
    const handleNewDialogClick = () => {
      emit('newDialogClick')
    }
    //编辑新建内容
    const handleEditDialogClick = (item: any) => {
      emit('editDialogClick', item)
    }
    //删除
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', { pageName: props.pageName, id: item.id })
    }

    return {
      getPageData,
      pageListData,
      totalCount,
      otherPropSlots,
      pageInfo,
      handleNewDialogClick,
      handleEditDialogClick,
      handleDeleteClick
    }
  }
})
</script>

<style scoped>
.page-content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
.delete-btn {
  color: #f56c6c;
}
</style>
