export const contentConfig = {
  title: '故事列表',
  isAddItem: true,
  // showSelectColumn:
  tableItems: [
    { prop: 'title', label: '故事标题', minWidth: '120' },
    { prop: 'content', label: '我的故事', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '210', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '210', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
