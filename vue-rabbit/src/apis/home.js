// 導入
import  httpInstance  from '@/utils/http'

//獲取banner
export function getBannerAPI(params = {}){
    //默認為1 商品為2
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params:{
            distributionSite
        }
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}

/**
 * @description: 獲取人氣推薦
 * @param {*}
 * @return {*}
 */
export const findHotAPI = () => {
    return httpInstance({
        url:'/home/hot'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
      url: '/home/goods'
    })
  }