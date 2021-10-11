<template>
  <div class="login-account">
    <el-form :model="account" :rules="accountRules" label-width="60px" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"> </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, ref, computed, PropType } from 'vue'
import { accountRules } from '../config'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
import type { IAccount } from '../types'
import { ElMessage } from 'element-plus'

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<IAccount>,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const store = useStore()

    const account = computed({
      get: () => props.modelValue,
      set: (newValue) => emit('update:modelValue', newValue)
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const accountLoginAction = (isRemember: boolean) => {
      formRef.value?.validate((valid) => {
        //1 判断是否符合规则
        if (valid) {
          const name = account.value.name
          const password = account.value.password
          //将用户名和密码保存在本地
          if (isRemember) {
            localCache.setCache('name', name)
            localCache.setCache('password', password)
          }

          // 登录
          store.dispatch('login/accountLoginAction', { name, password })
        } else {
          ElMessage.error('账号或密码错误')
        }
      })
    }
    return {
      account,
      accountRules,
      formRef,
      accountLoginAction
    }
  }
})
</script>

<style scoped></style>
