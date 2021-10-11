import skyRequest from '../index'

import type { IAccount, ILoginInfo } from './types'

enum LoginAPI {
  AccountLogin = 'login',
  userInfo = '/users/',
  userMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return skyRequest.post<ILoginInfo>({ url: LoginAPI.AccountLogin, data: account })
}

export function getUserById(id: number) {
  return skyRequest.get({ url: LoginAPI.userInfo + id })
}

export function getUserMenus(roleID: number) {
  return skyRequest.get({ url: LoginAPI.userMenus + roleID + '/menu' })
}
