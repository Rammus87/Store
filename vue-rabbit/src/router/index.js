//createRouter 創建router實例對象
//createWebHistory 創建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
//導入login和layout
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
//導入二級路徑home和category
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'


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
      },
      {
        path:'category/sub/:id',
        component: SubCategory
      },
      {
        path:'detail/:id',
        component: Detail
      },
      {
        path:'cartlist',
        component: CartList
      },
      {
        path: 'checkout',
        component: Checkout
      },
      {
        path:'Pay',
        component: Pay
      },
      {
        path: 'paycallback',
        component: PayBack
      }
    ]
   },
   {
    path: '/login',
    component: Login
   }
  ],
  //在最下面做配置回頂部
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
