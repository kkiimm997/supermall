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
  data(){
    return {
      count:0
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    ImageLoad(){
      this.count += 1
      if(this.count === this.banner.length){
      this.$emit('swiperImageLoad')
      console.log('轮播图图片加载完了');
      }
    }
  }
}
</script>

<style>

</style>