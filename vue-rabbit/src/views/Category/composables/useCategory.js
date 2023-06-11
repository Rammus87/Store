// 封裝業務數據相關代碼
import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
//獲取路由參數
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory (){
    //獲取數據
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async(id = route.params.id)=>{
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(()=>getCategory())

    //目標:路由參數變化的時候,重新發送分類接口
    onBeforeRouteUpdate((to)=>{
        console.log('路由變化了')
        //存在一個問題,使用最新路由參數,請求最新分類數據
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}