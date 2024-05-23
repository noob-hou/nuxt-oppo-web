/*
 * @Description: 
 * @Author: houxin
 * @Date: 2024-05-23 15:22:44
 * @LastEditTime: 2024-05-23 15:23:38
 * @LastEditors: houxin
 * @Reference:  
 */
import type { AsyncData, UseFetchOptions } from "nuxt/dist/app/composables"
type methodType = 'GET' | 'POST'
const BASE_URL = "http://codercba.com:9060/oppo-nuxt/api/"
export interface IResultData<T> {
  code: number,
  data: T
}
class MyRequest {
  request<T = any>(url: string, method: methodType, data?: any, options?: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: BASE_URL,
        method: method,
        ...options
      }
      if (method === 'GET') {
        newOptions.query = data
      }
      if (method === 'POST') {
        newOptions.data = data
      }

      useFetch<T>(url, newOptions as any).then((res => {
        resolve(res as AsyncData<T, Error>)
      })).catch(error => {
        reject(error)
      })
    })
  }
  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request(url, 'GET', params, options)
  }
  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request(url, 'POST', data, options)
  }
}

export default new MyRequest()