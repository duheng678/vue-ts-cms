export const contentConfig = {
  title: '用户列表',
  showSelectColumn: true,
  tableItems: [
    { prop: 'name', label: '用户名', minWidth: '80' },
    { prop: 'realname', label: '真实姓名', minWidth: '90' },
    { prop: 'cellphone', label: '手机号', minWidth: '150' },
    { prop: 'enable', label: '状态', minWidth: '80', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', minWidth: '210', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '210', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
