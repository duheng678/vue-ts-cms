import skyRequest from '@/service'

export function getPageList(pageUrl: string, queryInfo: any) {
  return skyRequest.post({
    url: pageUrl,
    data: queryInfo
  })
}

export function newPageData(pageUrl: string, queryInfo: any) {
  return skyRequest.post({
    url: pageUrl,
    data: queryInfo
  })
}
export function editPageData(pageUrl: string, queryInfo: any) {
  return skyRequest.patch({
    url: pageUrl,
    data: queryInfo
  })
}
export function deletePageData(pageUrl: string) {
  return skyRequest.delete({
    url: pageUrl
  })
}
