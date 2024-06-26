export interface INavList {
  id: string
  title: string
  type: string
  showName: number
  url: string
  jsonUrl: string
  clickUrl: string
  jsonClickUrl: string
  beginAt: any
  endAt: any
  seq: number
  labelDetailss: any[]
  link: string
  isLogin: number
  moduleCode: string
  rows: number
  cols: number
  maxProductNum: number
}
export interface IBanners {
  id: number
  picStr: string
  link: string
}

export interface ICateGory {
  id?: number
  picStr?: string
  title?: string
  type?: string
  url?: string
  moduleCode?: string
  productDetailss?: ProductDetailss[]
  link?: string
}

export interface ProductDetailss {
  id?: string
  skuId?: number
  title?: string
  secondTitle?: string
  thirdTitle?: string
  url?: string
  jsonUrl?: string
  video?: string
  seq?: number
  configKeyLattice?: number
  latticeIndex?: number
  configProductType?: number
  goodsSpuId?: number
  goodsSpuName?: string
  isShowIcon?: number
  topIcon?: string
  cardType?: number
  backColor?: string
  liveInfoJson?: any
  businessInfoJson?: any
  priceInfo?: PriceInfo
  price?: number
  originalPrice?: any
  categoryId?: number
  link?: string
  isLogin?: number
  marketPrice?: string
  nameLabel?: any
  imageLabel?: any
  extendList?: any
  heytapInfo?: any
  activityList?: ActivityList[]
  placeholderLabel?: PlaceholderLabel
  vipDiscounts?: any
  nameLabelWidth?: any
  nameLabelHeight?: any
  pricePrefix?: string
  priceSuffix?: any
  goodsTopCategoryId?: number
  goodsTopCategoryName?: string
  goodsCategoryId?: number
  goodsCategoryName?: string
  skuName?: string
  cardInfoType?: any
  liveUrl?: any
  storage?: any
  seckill?: any
  rankInfo?: any
  businessLink?: string
  sellPoints?: any
  commentCount?: any
  commentRate?: any
  interenve?: boolean
  productDetailLabelss?: any[]
}

export interface PriceInfo {
  originalPrice: string
  price: string
  marketPrice: string
  buyPrice: string
  prefix: string
  suffix: string
  currencyTag: string
}

export interface ActivityList {
  type?: number
  activityInfo?: string
}

export interface PlaceholderLabel {
  type: number
  activityInfo: string
}
