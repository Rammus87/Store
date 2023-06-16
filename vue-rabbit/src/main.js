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

//引入全局組件
import { componentPlugin } from './components'

//引入pinia-plugin-persistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
//註冊持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


