<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user"></i> 账号登录</span>
        </template>
        <login-account ref="loginAccountRef" v-model="account"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="loginPhoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox label="记住密码" v-model="isRemember"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="loginAction">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import localCache from '@/utils/cache'

export default defineComponent({
  components: { LoginAccount, LoginPhone },

  setup() {
    //
    const currentTab = ref('account')
    //将本地储存的登录信息传给account
    const cacheName = localCache.getCache('name') ?? 'coderwhy'
    const cachePassword = localCache.getCache('password') ?? '123456'
    const account = reactive({ name: cacheName, password: cachePassword })

    const isRemember = ref(true)
    //判断分页
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginAction = () => {
      if (currentTab.value === 'account') {
        loginAccountRef.value?.accountLoginAction(isRemember.value)
      }
      // else (currentTab.value === 'pho ne'){}
    }
    return { currentTab, loginAction, account, loginAccountRef, isRemember }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .control-account {
    display: flex;
    margin-top: 12px;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
