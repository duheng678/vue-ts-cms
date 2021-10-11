import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import type { ISystemState, IPagePayload } from './types'

import {
  getPageList,
  newPageData,
  editPageData,
  deletePageData
} from '@/service/main/system/system'

const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersTotalCount: 0,
      usersList: [],
      departmentTotalCount: 0,
      departmentList: [],
      roleTotalCount: 0,
      roleList: [],
      categoryTotalCount: 0,
      categoryList: [],
      goodsTotalCount: 0,
      goodsList: [],
      storyTotalCount: 0,
      storyList: [],
      menuList: []
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        const listData = (state as any)[`${pageName}List`]
        return listData
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        const listCount = (state as any)[`${pageName}TotalCount`]
        return listCount
      }
    }
  },
  mutations: {
    changeUsersTotalCount(state, count) {
      state.usersTotalCount = count
    },
    changeUsersList(state, list) {
      state.usersList = list
    },
    changeRoleTotalCount(state, count) {
      state.roleTotalCount = count
    },
    changeRoleList(state, list) {
      state.roleList = list
    },
    changeMenuList(state, list) {
      state.menuList = list
    },
    changeDepartmentTotalCount(state, count) {
      state.departmentTotalCount = count
    },
    changeDepartmentList(state, list) {
      state.departmentList = list
    },
    changeCategoryTotalCount(state, count) {
      state.categoryTotalCount = count
    },
    changeCategoryList(state, list) {
      state.categoryList = list
    },
    changeGoodsTotalCount(state, count) {
      state.goodsTotalCount = count
    },
    changeGoodsList(state, list) {
      state.goodsList = list
    },
    changeStoryTotalCount(state, count) {
      state.storyTotalCount = count
    },
    changeStoryList(state, list) {
      state.storyList = list
    }
  },
  actions: {
    async getPageListDataAction({ commit }, payload: IPagePayload) {
      //保存路由页面传来的pageName
      const pageName = payload.pageName
      //声明url
      const pageUrl = `${payload.pageName}/list`
      //请求数据，并分开保存
      const { totalCount, list } = await getPageList(pageUrl, payload.queryInfo)
      const mPageName = pageName.split('')[0].toLocaleUpperCase() + pageName.slice(1)
      //保存在vuex中
      if (totalCount) {
        commit(`change${mPageName}TotalCount`, totalCount)
      }

      commit(`change${mPageName}List`, list)
    },
    async newPageDataAction({ dispatch }, payload: IPagePayload) {
      const pageUrl = `/${payload.pageName}`
      const queryInfo = payload.queryInfo
      await newPageData(pageUrl, queryInfo)

      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    },
    async editPageDataAction({ dispatch }, payload: IPagePayload) {
      if (!payload.id) return
      const pageUrl = `/${payload.pageName}/${payload.id}`
      const queryInfo = payload.queryInfo
      await editPageData(pageUrl, queryInfo)

      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    },
    async deletePageDataAction({ dispatch }, payload: IPagePayload) {
      const pageUrl = `/${payload.pageName}/${payload.id}`
      await deletePageData(pageUrl)
      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    }
  }
}

export default system
