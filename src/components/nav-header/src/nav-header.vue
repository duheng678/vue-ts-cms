<template>
  <div class="nav-header">
    <i
      class="menu-icon"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <sky-breadcrumb :breadcrumbs="breadcrumbs"></sky-breadcrumb>
      <nav-info></nav-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import SkyBreadcrumb from '@/base-ui/breadcrumb'
import NavInfo from './nav-info.vue'
import { pathMapBreadcrumbs } from '@/utils/map-info'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

export default defineComponent({
  components: { SkyBreadcrumb, NavInfo },
  emits: ['foldChange'],
  setup(props, { emit }) {
    //监控菜单是否折叠
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    //获取每个路由对应的面包屑数据
    const breadcrumbs = computed(() => {
      const route = useRoute().path
      const menus = useStore().state.login.userMenus
      return pathMapBreadcrumbs(menus, route)
    })

    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;

  .menu-icon {
    font-size: 28px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
  }
}
</style>
