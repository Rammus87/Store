// 導入
import  httpInstance  from '@/utils/http'

//獲取banner
export function getBannerAPI(){
    return httpInstance({
        url: '/home/banner'
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

export const findHotAPI = () => {
    return httpInstance({
        url:'/home/hot'
    })
}