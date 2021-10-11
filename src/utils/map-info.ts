import { Router, RouteRecordRaw } from 'vue-router'
import type { IBreadcrumbs } from '@/base-ui/breadcrumb/types'
export function menuMapToRoutes(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //从路由文件获取所有的路由
  const localRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((item) => {
    const route = require('../router/main' + item.split('.')[1])
    localRoutes.push(route.default)
  })
  //根据菜单筛选路由
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1) {
        _recurseGetRoute(menu.children ?? [])
      } else {
        const route = localRoutes.find((item) => item.path === menu.url)
        if (route) routes.push(route)
      }
    }
  }
  _recurseGetRoute(menus)
  return routes
}

export function pathMapBreadcrumbs(menus: any[], route: string) {
  const breadcrumbs: IBreadcrumbs[] = []
  pathMapToMenu(menus, route, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(menus: any[], route: string, breadcrumbs?: IBreadcrumbs[]): any {
  for (const menu of menus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], route, breadcrumbs)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === route) {
      return menu
    }
  }
}

//获取角色对应的菜单选项
export function getMenuChecks(menuList: any[]) {
  const checks: any[] = []

  const _recurseGetChecks = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetChecks(menu.children)
      } else {
        checks.push(menu.id)
      }
    }
  }
  _recurseGetChecks(menuList)
  return checks
}
