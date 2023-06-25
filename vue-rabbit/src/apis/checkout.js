import request from '@/utils/http'

//配送資訊接口
export const getCheckInfoAPI = () => {
    return request({
        url: '/member/order/pre'
    })
}

//創建訂單接口
export const createOrderAPI = (data) =>{
    return request({
        url: '/member/order',
        method: 'POST',
        data
    })
}