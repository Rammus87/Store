//項目的入口文件,用來創建實例和配置組件及樣式

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入css
import '@/styles/common.scss'

//引入js
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定義全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        //el:綁定指定的元素 img
        //binding: binding.value 指令等於號後面綁定的表達式的值(在這指的是圖片url)
        console.log(el,binding.value)
        useIntersectionObserver(
            //監聽誰
            el,
            ([{ isIntersecting }] ) => {
                console.log(isIntersecting)
                if(isIntersecting){
                    el.src = binding.value
                }
            },
        )
    }
}) 

