export interface ISystemState {
  usersTotalCount: number
  usersList: any[]
  departmentTotalCount: number
  departmentList: any[]
  roleTotalCount: number
  roleList: any[]
  categoryTotalCount: number
  categoryList: any[]
  goodsTotalCount: number
  goodsList: any[]
  storyTotalCount: number
  storyList: any[]
  menuList: any[]
}

export interface IPagePayload {
  pageName: string
  queryInfo: any
  id?: number
}
