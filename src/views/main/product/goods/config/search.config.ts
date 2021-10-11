import type { IForm } from '@/base-ui/form/types'
export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeHolder: '请输入商品关键词'
    },
    {
      field: 'address',
      type: 'input',
      label: '商品地址',
      placeHolder: '请输入商品地址'
    },
    // {
    //   field: 'enable',
    //   type: 'select',
    //   label: '状态',
    //   placeHolder: '请选择商品状态',
    //   options: [
    //     { label: '启用', value: 1 },
    //     { label: '禁用', value: 0 }
    //   ]
    // },

    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOption: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' }
}
