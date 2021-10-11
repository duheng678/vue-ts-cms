import type { ILoginState } from './login/types'
import { IAnalysisState } from './main/analysis/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

export interface IRootModule {
  login: ILoginState
  system: ISystemState
  analysis: IAnalysisState
}

export type IStore = IRootState & IRootModule
