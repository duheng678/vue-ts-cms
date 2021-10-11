import type { IForm } from '@/base-ui/form/types'
export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别列表',
      placeHolder: '请输入商品类别'
    },

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
