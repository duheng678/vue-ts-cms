<template>
  <div class="page-modal">
    <el-dialog
      :title="modalConfig.title"
      v-model="dialogVisible"
      width="30%"
      destroy-on-close
      center
    >
      <sky-form v-bind="modalConfig" v-model="formData"></sky-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button @click="handleConfirmClick" type="primary">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, reactive } from 'vue'
import SkyForm from '@/base-ui/form'
import { useStore } from '@/store'
export default defineComponent({
  name: 'PageModal',
  components: { SkyForm },

  props: {
    pageName: { type: String, required: true },
    modalConfig: { type: Object, required: true },
    defaultInfo: { type: Object, default: () => ({}) },
    roleTreeInfo: { type: Object, default: () => ({}) }
  },
  setup(props) {
    const store = useStore()
    const originFormData: any = {}
    const formData = ref({ ...originFormData })
    const reac = reactive({ name: 'sky' })
    console.log(reac)

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    //dialog的显示与关闭
    const dialogVisible = ref(false)
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.roleTreeInfo },
          id: props.defaultInfo.id
        })
      } else {
        store.dispatch('system/newPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.roleTreeInfo }
        })
      }
    }

    return { dialogVisible, handleConfirmClick, formData }
  }
})
</script>

<style scoped></style>
