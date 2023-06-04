//引入剛剛的axios設定
import httpInstance from "@/utils/http";

//導出方法
export function getCategory(){
    return httpInstance({
        url: 'home/category/head'
    })
}