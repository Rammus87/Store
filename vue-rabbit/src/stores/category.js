import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  //導航列表邏輯
  //state導航列表數據
  const categoryList = ref([])

// action獲取導航數據的方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        //傳入數據
        categoryList.value = res.result
    }
    return{
        categoryList,
        getCategory
    }
})
