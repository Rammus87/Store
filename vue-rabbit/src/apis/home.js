// 導入
import  httpInstance  from '@/utils/http'

//獲取banner
export function getBannerAPI(){
    return httpInstance({
        url: '/home/banner'
    })
}