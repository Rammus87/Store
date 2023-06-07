<script setup>
// 引入每個頁面區塊
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<!-- 渲染出來 -->
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 測試面板組件 -->
  <HomePanel title="新鮮好物" sub-title="新鮮好物 好多商品">
    <div>我是新鮮好物的插槽內容</div>
  </HomePanel>
  <HomePanel title="人氣推薦" sub-title="人氣推薦 好多商品">
    <div>我是人氣推薦的插槽內容</div>
  </HomePanel>
</template>