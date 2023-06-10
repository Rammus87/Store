//createRouter 創建router實例對象
//createWebHistory 創建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
//導入login和layout
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
//導入二級路徑home和category
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //設定path和component位置
  routes: [
   {
    path:'/',
    component: Layout,
    //在一級路徑底下,使用childred設定二級路徑路由
    children:[
      {
        path:'',
        component: Home
      },
      {
        //配置分類參數
        path:'category/:id',
        component: Category
      }
    ]
   },
   {
    path: '/login',
    component: Login
   }
  ]
})

export default router
