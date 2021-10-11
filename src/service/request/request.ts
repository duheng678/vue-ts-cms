import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import type { IInterceptorHooks, SkyRequestConfig, HYData } from './types'
class SkyRequest {
  config: AxiosRequestConfig
  interceptorHooks?: IInterceptorHooks
  instance: AxiosInstance
  constructor(options: SkyRequestConfig) {
    this.config = options
    this.interceptorHooks = options.interceptorHooks
    this.instance = axios.create(options)
    this.setupInterceptor()
  }
  setupInterceptor(): void {
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use((config) => {
      return config
    })
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }
  request<T = any>(config: SkyRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, HYData<T>>(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: SkyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: SkyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  patch<T = any>(config: SkyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
  delete<T = any>(config: SkyRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default SkyRequest
