<template>
  <div class="detail-swiper">
    <swiper class="swipershow">
      <swiper-item  v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="" @load="topImagesLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      count:0
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    topImagesLoad(){
      this.count = this.count + 1
      if (this.count === this.topImages.length){
      console.log('加载完成');
      this.$emit('itemimageload')
      }
    
    }
  }
}
</script>

<style>
.swipershow{
  height: 300px;
}
</style>