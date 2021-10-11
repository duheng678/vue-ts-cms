import skyRequest from '@/service'

enum AnalysisAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  addressGoodsCount = '/goods/address/sale',
  goodsSaleTop10 = '/goods/sale/top10',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor'
}

export function getMountData() {
  return skyRequest.get({ url: AnalysisAPI.amountList })
}

export function getCategoryGoodsCount() {
  return skyRequest.get({ url: AnalysisAPI.categoryGoodsCount })
}

export function getAddressGoodsCount() {
  return skyRequest.get({ url: AnalysisAPI.addressGoodsCount })
}

export function getGoodsSaleTop10() {
  return skyRequest.get({ url: AnalysisAPI.goodsSaleTop10 })
}
export function getCategoryGoodsSale() {
  return skyRequest.get({ url: AnalysisAPI.categoryGoodsSale })
}
export function getCategoryGoodsFavor() {
  return skyRequest.get({ url: AnalysisAPI.categoryGoodsFavor })
}
