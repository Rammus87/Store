<script setup>

import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';

//觸發獲取nav的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()

onMounted(()=>categoryStore.getCategory())
</script>

<template>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key 破壞複用機制 重新更新-->
    <RouterView />
    <LayoutFooter />
</template>