<template>
  <div class="sky-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="formLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :type="item.type"
                  :placeholder="item.placeHolder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[`${item.field}`]"
                  :type="item.type"
                  :placeholder="item.placeHolder"
                  style="width: 100%"
                >
                  <template v-for="(option, index) in item.options" :key="index">
                    <el-option :value="option.value">
                      {{ option.label }}
                    </el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOption"
                  v-model="formData[`${item.field}`]"
                  style="width: 100%"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import type { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: { type: Object, required: true },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      required: true
    },
    formLayout: {
      type: Object,
      default: () => ({
        xl: 6, // ≥1920px
        lg: 8, // ≥1200px
        md: 12, // ≥992px
        sm: 24, // ≥768px
        xs: 24 // <768px
      })
    },
    labelWidth: { type: String, default: '80px' },
    itemStyle: { type: Object, default: () => ({ padding: '10px 40px' }) }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    return { formData }
  }
})
</script>

<style scoped>
.sky-form {
  padding: 20px 20px 0;
}
</style>
