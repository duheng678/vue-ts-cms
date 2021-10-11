<template>
  <div class="sky-table">
    <header>
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="newPage"></slot>
        </div>
      </slot>
    </header>
    <el-table :data="listData" border style="width: 100%" v-bind="childrenProps">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>

      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>

      <template v-for="(item, index) in tableItems" :key="index">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <footer v-if="showFooter">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      >
      </el-pagination>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    totalCount: { type: Number, default: 0 },
    tableItems: { type: Array, default: () => [] },
    title: {
      type: String,
      default: '表格数据'
    },
    pagination: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    childrenProps: { type: Object, default: () => ({}) },
    showSelectColumn: { type: Boolean, default: false },
    showIndexColumn: { type: Boolean, default: true },
    showFooter: { type: Boolean, default: true }
  },
  emits: ['update:pagination'],
  setup(props, { emit }) {
    const handleSizeChange = (pageSize: number) => {
      emit('update:pagination', { ...props.pagination, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:pagination', { ...props.pagination, currentPage })
    }
    return { handleSizeChange, handleCurrentChange }
  }
})
</script>

<style scoped lang="less">
header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}
footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
