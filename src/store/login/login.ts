import { Module } from 'vuex'
import type { IRootState } from '../types'
import type { ILoginState } from './types'
import router from '@/router'
import { accountLoginRequest, getUserById, getUserMenus } from '@/service/login/login'
import { menuMapToRoutes } from '@/utils/map-info'

import localCache from '@/utils/cache'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {}
    }
  },
  mutations: {
    saveToken(state, token) {
      state.token = token
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    saveUserMenus(state, userMenus) {
      state.userMenus = userMenus
      //根据路由映射
      const routes = menuMapToRoutes(userMenus)
      routes.forEach((route) => router.addRoute('main', route))
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, account: { name: string; password: string }) {
      //1.用户登录
      const loginResult = await accountLoginRequest(account)
      //获取用户名对应的id和token
      const { id, token } = loginResult
      // 将token保存在vuex中
      commit('saveToken', token)
      //将token保存在本地中
      localCache.setCache('token', token)
      //后续会在网络请求request拦截器上加入token信息，以便和服务器验证，没有token无法请求数据，服务端会在全局设置token

      // 2.获取用户信息
      const userInfo = await getUserById(id)
      console.log(userInfo)
      commit('saveUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      //3.用户菜单树
      const userMenus = await getUserMenus(userInfo.role.id)
      console.log(userMenus)
      commit('saveUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      //4.请求完全的角色和部门
      dispatch('getInitalDataAction', null, { root: true })
      //5.跳转首页

      router.push('/main')
    },
    //刷新页面后将localStorage中存储的数据传给store
    loadLocalCache({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('saveToken', token)
        dispatch('getInitalDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('saveUserMenus', userMenus)
      }
    }
  }
}

export default login
