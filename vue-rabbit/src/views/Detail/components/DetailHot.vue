<script setup>
 //獲取24小時數據渲染
  import {getHotGoodsAPI} from '@/apis/detail'
  import { computed } from '@vue/reactivity';
  import {onMounted, ref} from 'vue'
  import { useRoute } from 'vue-router';
  //設計porps參數 是配不同title
  const props = defineProps({
    hotType: {
        type: Number
    }
  })

  //適配title 1 = 24小時, 2 = 周熱榜
  const TYPEMAP = {
    1: '24小時熱榜',
    2: '週熱榜'
  }
  const title =  computed(()=>TYPEMAP[props.hotType])

  //封裝調用
  const hotlist = ref([])
  const route = useRoute()
  const gethotlist = async() => {
    const res = await getHotGoodsAPI({
        id: route.params.id,
        type:props.hotType
    })
    hotlist.value = res.result
  }
  onMounted(()=>gethotlist())

</script>


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品區塊 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotlist" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>