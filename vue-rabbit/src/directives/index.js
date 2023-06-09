//定義懶加載插件
//引入js
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install (app){
        //懶加載指令
        app.directive('img-lazy',{
            mounted(el,binding){
                //el:綁定指定的元素 img
                //binding: binding.value 指令等於號後面綁定的表達式的值(在這指的是圖片url)
                console.log(el,binding.value)
                const { stop } = useIntersectionObserver(
                    //監聽誰
                    el,
                    ([{ isIntersecting }] ) => {
                        console.log(isIntersecting)
                        if(isIntersecting){
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        }) 
    }
}