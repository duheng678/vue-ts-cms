type IFormType = 'input' | 'password' | 'select' | 'datepicker'

interface ISelectOption {
  label: string
  value: any
}
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  placeHolder?: string
  rules?: any[]
  options?: ISelectOption[]
  otherOption?: any
  isHidden?: boolean
}

export interface IForm {
  formItems?: IFormItem[]
  formLayout?: any
  labelWidth?: string
  itemStyle?: any
  title?: string
}
