export const contentConfig = {
  title: '用户列表',
  showSelectColumn: true,
  tableItems: [
    { prop: 'name', label: '角色名称', minWidth: '120' },
    { prop: 'intro', label: '角色权限', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '210', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '210', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
