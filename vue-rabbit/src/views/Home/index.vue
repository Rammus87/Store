<script setup>
// 引入每個頁面區塊
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import homeProduct from '@/views/Home/components/HomeProduct.vue'
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