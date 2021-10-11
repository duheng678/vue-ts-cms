import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeHolder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeHolder: '请选择上级部门',
      options: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeHolder: '请输入部门领导'
    }
  ],
  formLayout: {
    span: 24
  },
  itemStyle: { padding: 0 },
  title: '部门数据'
}
