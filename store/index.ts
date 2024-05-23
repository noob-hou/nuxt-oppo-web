import { defineStore } from "pinia"
import { apiGetHomeInfo, homeInfoType } from "~/service/home"
import { INavList, IBanners, ICateGory } from "~/types/home"

export interface IHomeState {
  navbars?: INavList[],
  banners?: IBanners[],
  category?: ICateGory[]
}
export const useHomeStore = defineStore('home', {
  state(): IHomeState {
    return {
      navbars: [],
      banners: [],
      category: []
    }
  },
  actions: {
    async fetchHomeInfo(type: homeInfoType) {
      const { data } = await apiGetHomeInfo(type)
      this.navbars = data.value.data.navbars || []
      this.banners = data.value.data.banners || []
      this.category = data.value.data.category || []
    }
  }
})