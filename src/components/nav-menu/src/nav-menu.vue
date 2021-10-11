<template>
  <div class="nav-menu">
    <div class="menu-logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-show="!isCollapse" class="title">CMS</span>
    </div>
    <el-menu
      :default-active="currentItemId"
      class="el-menu-vertical"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      background-color="#0c2135"
      :collapse="isCollapse"
    >
      <template v-for="menu in menus" :key="menu.id">
        <template v-if="menu.type === 1">
          <template v-if="menu.children && menu.children.length">
            <el-submenu :index="menu.id + ''">
              <template #title>
                <i :class="menu.icon"></i>
                <span class="text-content">{{ menu.name }}</span>
              </template>
              <template v-for="item in menu.children" :key="item.id">
                <el-menu-item :index="item.id + ''" @click="handleItemClick(item)">
                  <i v-if="item.icon" :class="item.icon"></i>
                  <span class="text-content">{{ item.name }}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </template>
        <template v-else-if="menu.type === 2">
          <el-menu-item :index="menu.id + ''">
            <i v-if="menu.icon" :class="menu.icon"></i>
            <span class="text-content">{{ menu.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-info'

export default defineComponent({
  props: { isCollapse: { type: Boolean, defalut: false } },
  setup() {
    const store = useStore()
    const menus = store.state.login.userMenus
    const route = useRoute()
    const router = useRouter()
    const menu = pathMapToMenu(menus, route.path)

    const currentItemId = ref<string>(menu.id + '')
    const handleItemClick = (item: any) => {
      currentItemId.value = item.id + ''
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      menus,
      handleItemClick,
      currentItemId
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .menu-logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .img {
    height: 100%;
    margin: 0 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
  .el-menu {
    border-right: none;
  }
  .el-submenu {
    background-color: #001529 !important;

    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-menu-item:hover {
    color: #fff !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
