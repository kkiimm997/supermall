<template>
     <swiper >
      <swiper-item v-for="(item,index) in banner" :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="ImageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name:"HomeSwiper",
  props:{
    banner:{
      tyoe:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    ImageLoad(){
      // console.log('轮播图图片加载完了');
      this.$emit('swiperImageLoad')
    }
  }
}
</script>

<style>

</style>