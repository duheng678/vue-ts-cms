import { Module } from 'vuex'
import type { IRootState } from '../../types'
import type { IAnalysisState } from './types'

import {
  getMountData,
  getCategoryGoodsCount,
  getAddressGoodsCount,
  getGoodsSaleTop10,
  getCategoryGoodsSale,
  getCategoryGoodsFavor
} from '@/service/main/analysis/analysis'

const analysis: Module<IAnalysisState, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: [],
      categoryGoodsCount: [],
      goodsAddressSale: [],
      goodsSaleTop10: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: []
    }
  },
  mutations: {
    changeTopPanelDatas(state, data) {
      state.topPanelDatas = data
    },
    changeCategoryGoodsCount(state, data) {
      state.categoryGoodsCount = data
    },
    changeGoodsAddressSale(state, data) {
      state.goodsAddressSale = data
    },
    changeGoodsSaleTop10(state, data) {
      state.goodsSaleTop10 = data
    },
    changeCategoryGoodsSale(state, data) {
      state.categoryGoodsSale = data
    },
    changeCategoryGoodsFavor(state, data) {
      state.categoryGoodsFavor = data
    }
  },
  actions: {
    async getAnalysisDataAction({ commit }) {
      //请求最上层统计数据
      const totalAmountData = await getMountData()
      commit('changeTopPanelDatas', totalAmountData)
      //请求分类商品数量
      const goodsCount = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', goodsCount)
      //请求不同城市商品销量
      const addressSales = await getAddressGoodsCount()
      commit('changeGoodsAddressSale', addressSales)
      //请求分类商品数量(玫瑰图)
      const goodsTop10 = await getGoodsSaleTop10()
      commit('changeGoodsSaleTop10', goodsTop10)
      //请求分类商品的销量
      const goodsSales = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', goodsSales)
      //请求分类商品的收藏
      const goodsFavor = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', goodsFavor)
    }
  }
}

export default analysis
