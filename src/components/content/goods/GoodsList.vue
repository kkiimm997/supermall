<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem'
export default {
  name:"GoodsList",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .goods{
    display: flex;
    /* flex布局如果宽度不够则换行，默认nowrap */
    flex-wrap: wrap;
  }
</style>