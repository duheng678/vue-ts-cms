import { createStore, useStore as useVuexStore, Store } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import analysis from './main/analysis/analysis'

import { IRootState, IStore } from './types'
import { getPageList } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'sky',
      entireRoles: [],
      entireDepartments: [],
      entireMenus: []
    }
  },
  mutations: {
    saveEntireRoles(state, data) {
      state.entireRoles = data
    },
    saveEntireDepartments(state, data) {
      state.entireDepartments = data
    },
    saveEntireMenus(state, data) {
      state.entireMenus = data
    }
  },
  actions: {
    async getInitalDataAction({ commit }) {
      //请求角色信息
      const { list: entireRoles } = await getPageList('/role/list', {})
      commit('saveEntireRoles', entireRoles)

      //请求部门信息
      const { list: entireDepartments } = await getPageList('/department/list', {})
      commit('saveEntireDepartments', entireDepartments)

      //请求菜单信息
      const { list: entireMenus } = await getPageList('/menu/list', {})
      commit('saveEntireMenus', entireMenus)
    }
  },
  modules: {
    login,
    system,
    analysis
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalCache')
}

export function useStore(): Store<IStore> {
  return useVuexStore()
}

export default store
