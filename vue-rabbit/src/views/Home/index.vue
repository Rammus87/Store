<script setup>
// 引入每個頁面區塊
import HomeCategory from '@/views/Home/HomeCategory.vue'
import HomeBanner from '@/views/Home/HomeBanner.vue'
import HomeNew from '@/views/Home/HomeNew.vue'
import HomeHot from '@/views/Home/HomeHot.vue'
import homeProduct from '@/views/Home/HomeProduct.vue'
</script>

<!-- 渲染出來 -->
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>