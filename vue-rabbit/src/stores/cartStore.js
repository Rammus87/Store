//封裝購物車模塊
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore("cart",()=>{
    //新增購物車功能
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

    //刪除購物車功能
    const delCart = (skuId) => {
        //1.找到要刪除的下標值 - splice
        //2.使用數組過濾功能 - filter
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }

    //單選功能
    const singleCheck = (skuId, selected)=> {
        //通過skuId找到要修改的項目,然後把selected改為傳過來的selected
        const item = cartList.value.find((item)=>item.skuId === skuId)
        item.selected = selected
    }

    //全選功能
    const allCheck = (selected) => {
        //把cartList中每一項selected都設置為當前的全選框狀態
        cartList.value.forEach(item => item.selected = selected)
    }

    //購物車計算功能
    //總數為count的和
    const allCount = computed(()=>cartList.value.reduce((a,c)=>a + c.count,0))
    //價格為count*price
    const allPrice = computed(()=>cartList.value.reduce((a,c)=>a + c.count * c.price,0))

    //是否全選
    const isAll = computed(()=>cartList.value.every((item)=>item.selected))

    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck
    }
},{
    //同步到本地
    persist:true,
})