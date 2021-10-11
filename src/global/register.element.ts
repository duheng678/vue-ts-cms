import { App } from 'vue'
import {
  ElAside,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElRow,
  ElSubmenu,
  ElTabPane,
  ElTabs,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElConfigProvider,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElTooltip,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
} from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

const components = [
  PageSearch,
  PageContent,
  PageModal,
  ElButton,
  ElForm,
  ElTabs,
  ElTabPane,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElInput,
  ElRow,
  ElCol,
  ElOption,
  ElSelect,
  ElDatePicker,
  ElConfigProvider,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElTooltip,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
]

function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}

export default registerElement
