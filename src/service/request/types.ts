import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface IInterceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

export interface SkyRequestConfig extends AxiosRequestConfig {
  interceptorHooks?: IInterceptorHooks
}

export interface HYData<T> {
  data: T
  returnCode: string
  success: boolean
}
