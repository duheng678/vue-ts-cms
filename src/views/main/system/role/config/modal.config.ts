import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeHolder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色权限',
      placeHolder: '请输入角色权限'
    }
  ],
  formLayout: {
    span: 24
  },
  itemStyle: { padding: 0 },
  title: '角色数据'
}
