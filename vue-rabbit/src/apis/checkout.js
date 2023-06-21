import request from '@/utils/http'

//配送資訊接口
export const getCheckInfoAPI = () => {
    return request({
        url: '/member/order/pre'
    })
}