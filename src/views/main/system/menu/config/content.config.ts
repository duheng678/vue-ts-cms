export const contentConfig = {
  title: '菜单总览',
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: false,
  tableItems: [
    { prop: 'name', label: '菜单名称', minWidth: '150' },
    { prop: 'type', label: '级别', minWidth: '80' },
    { prop: 'icon', label: '菜单url', minWidth: '150' },
    { prop: 'url', label: '菜单icon', minWidth: '150' },
    { prop: 'sort', label: '排序', minWidth: '80' },
    { prop: 'permission', label: '权限', minWidth: '90' },
    { prop: 'createAt', label: '创建时间', minWidth: '210', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '210', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: ' children'
    }
  }
}
