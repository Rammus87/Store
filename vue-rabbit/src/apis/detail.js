// 獲取公共實例
import request from '@/utils/http'

export const getDetail = (id)=>{
    return request({
        url:'/goods',
        params: {
            id
        }
    })
}
