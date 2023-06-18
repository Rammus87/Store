//封裝購物車模塊
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore("cart",()=>{
    // 1.定義state - cartList
    const cartList = ref([])
    // 2.定義action - addCart
    const addCart = (goods) =>{
        //添加購物車操作
        //已添加過 - count + 1
        //沒有添加過 - 直接push
        //思路: 通過匹配傳遞過來的商品對象中的skuId能不能在cartList中找到,找到代表添加過
        const item = cartList.value.find((item)=>goods.skuId === item.skuId)
        if(item){
            //找到
            item.count++
        }else{
            //沒找到
            cartList.value.push(goods)
        }
    }
    return{
        cartList,
        addCart
    }
},{
    //同步到本地
    persist:true,
})