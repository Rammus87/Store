//axios基礎封裝
import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'
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
    //1.從pinia中獲取token數據
    const userStore = useUserStore()
    //2.按照後端要求拼接token數據
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e=> Promise.reject(e))

//axios回應  HTTP回應到達應用之前被調用。你可以在回應攔截器中修改回應數據
httpInstance.interceptors.response.use(res => res.data, e=> {
    const userStore = useUserStore()
    //統一錯誤提示
    ElMessage({
        type: 'warning',
        message:e.response.data.message
    })
    //401token失效處理
    //1.清楚本地用戶數據
    //2.跳轉到登入頁面
    if(e.response.status === 401){
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})

//導出
export default httpInstance