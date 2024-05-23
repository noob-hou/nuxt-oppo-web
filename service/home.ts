import type { IHomeState } from "~/store"
import myRequest, { IResultData } from "./request"

export type homeInfoType = 'oppo' | 'onePuls' | 'intelligent'
export const apiGetHomeInfo = (type: homeInfoType) => {
  return myRequest.get<IResultData<IHomeState>>('/home/info', {
    type
  })
}