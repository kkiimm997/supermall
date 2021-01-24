<template>
  <nav-bar>
    <!-- 导航栏左边返回按钮 -->
    <div slot="left" class="back" @click="backClick">
      <img src="@/assets/img/common/back.svg" alt="">
    </div>
    <!-- 导航栏中间 -->
    <div slot="center" class="title">
    <div v-for="(item,index) in titles" 
    :key="index" 
    class="title-item"
    :class="{active:currentIndex === index}"
    @click="itemClick(index)">{{item}}</div>
    </div></nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
components:{
    NavBar
  },
  data(){
  return {
    titles:['商品','参数','评价','推荐'],
    currentIndex:0
  }
},
methods:{
  itemClick(index){
    this.currentIndex = index
    this.$emit('titleClick', index)
  },
  backClick(){
    // this.$router.go(-1)
    //上面也可以
    this.$router.back()
  }
}
}
</script>

<style>
  .title{
    display: flex;
    
  }
  .title-item{
    flex:1;
    font-size: 13px;
  }
  .back{
    margin-top: 5px;
    margin-left: 15px;
  }
</style>