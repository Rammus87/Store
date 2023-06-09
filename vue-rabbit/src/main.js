//項目的入口文件,用來創建實例和配置組件及樣式

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入css
import '@/styles/common.scss'

//引入懶加載指令
import { lazyPlugin } from '@/directives'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')


