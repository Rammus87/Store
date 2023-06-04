//axios基礎封裝
import axios from 'axios'

//創建變量調用
const httpInstance = axios.create({
    //根域名
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    //超時時間
    timeout: 5000
})
//攔截器
//axios請求 HTTP請求被發送到服務器前被調用。你可以在請求攔截器中修改請求配置
httpInstance.interceptors.request.use(config => {
    return config
}, e=> Promise.reject(e))

//axios回應  HTTP回應到達應用之前被調用。你可以在回應攔截器中修改回應數據
httpInstance.interceptors.response.use(res => res.data, e=> {
    return Promise.reject(e)
})

//導出
export default httpInstance