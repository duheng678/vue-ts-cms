<template>
  <div class="page-search">
    <sky-form v-bind="searchConfig" v-model="formData">
      <template #footer>
        <div class="btns">
          <el-button icon="el-icon-refresh" size="medium" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="el-icon-search" size="medium" @click="handleQueryClick">
            查询
          </el-button>
        </div>
      </template>
    </sky-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import SkyForm from '@/base-ui/form'
import { IForm } from '@/base-ui/form/types'

interface IFormData {
  [key: string]: any
}
export default defineComponent({
  name: 'PageSearch',
  components: { SkyForm },
  props: { searchConfig: { type: Object as PropType<IForm>, required: true } },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const originFormData: IFormData = {}
    const formItems = props.searchConfig.formItems ?? []
    for (const formItem of formItems) {
      originFormData[`${formItem.field}`] = ''
    }
    const formData = ref({ ...originFormData })
    const handleResetClick = () => {
      for (const key in originFormData) {
        formData.value[`${key}`] = originFormData[key]
        emit('resetBtnClick')
      }
    }
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
