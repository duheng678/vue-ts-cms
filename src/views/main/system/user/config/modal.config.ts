import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeHolder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeHolder: '请输入真实姓名',
      rules: [{ required: true }]
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeHolder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号码',
      placeHolder: '请输入手机号码'
    },
    { field: 'roleId', type: 'select', label: '选择角色', placeHolder: '请选择角色', options: [] },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeHolder: '请选择部门',
      options: []
    }
  ],
  formLayout: {
    span: 24
  },
  itemStyle: { padding: 0 },
  title: '用户数据'
}
