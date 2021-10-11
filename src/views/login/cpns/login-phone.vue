<template>
  <div class="login-phone">
    <el-form :model="phone" :rules="phoneRules">
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="phone.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="verify-code">
          <el-input v-model="phone.code"></el-input>
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { phoneRules } from '../config'

export default defineComponent({
  setup() {
    const phone = ref({
      phoneNumber: '',
      code: ''
    })

    return {
      phone,
      phoneRules
    }
  }
})
</script>

<style scoped lang="less">
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
