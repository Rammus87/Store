//封裝輪播圖代碼
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner(){
        //獲取banner
        const bannerList = ref([])
        const getBanner = async ()=>{
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        console.log(res)
        //獲取響應式list
        bannerList.value = res.result
    }
    
        onMounted(()=>getBanner())

        return{
            bannerList
        }
}