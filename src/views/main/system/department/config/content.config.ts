export const contentConfig = {
  title: '部门列表',
  showSelectColumn: true,
  tableItems: [
    { prop: 'name', label: '部门名称', minWidth: '90' },
    { prop: 'leader', label: '部门领导', minWidth: '90' },
    { prop: 'parentId', label: '上级部门', minWidth: '90' },
    { prop: 'createAt', label: '创建时间', minWidth: '210', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '210', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
