//和後端要數據

//封裝接口函數
import httpInstance from "@/utils/http";
//導出
export function getCategoryAPI (){
    return httpInstance({
        url:'/home/category/head'
    })
}