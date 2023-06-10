//封裝category數據接口
import request from '@/utils/http'

export function getCategoryAPI(id){
    return request ({
        url: '/category',
        params:{
            id
        }
    })
}