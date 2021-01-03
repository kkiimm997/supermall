<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <tab-control :titles="['流行','新款','精选']" 
     @tabClick="tabClick"  ref="tabControl1"  
     class="tab-control" v-show="isTabFixed"/>

    <scroll class="content" ref="scroll" :probe-type="3" 
    @scroll="contentScroll" 
    :pull-up-load="true" 
    @pullingUp="loadMore">
      <home-swiper :banner="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <!-- 推荐图 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周流行图 -->
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
      @tabClick="tabClick"  
      ref="tabControl" 
      />
      <!-- 商品展示 -->
     
      <goods-list :goods="showGoods"/>
    
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>

import HomeSwiper from '@/views/home/children/HomeSwiper'
import RecommendView from './children/RecommendView'
import FeatureView from './children/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import GoodsListItem from '@/components/content/goods/GoodsListItem'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'
//axios请求
import { getHomeMultidata,getHomeGoods} from '@/network/home'

export default {
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    GoodsListItem,
    Scroll,
    BackTop
   
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  data(){
    return {
      banners:[],
      recommends:[],
      //商品数据存放
      goods:{
        'pop':{page: 0, list:[]},
        'new':{page: 0, list:[]},
        'sell':{page: 0, list:[]},
      },
      currentType: 'pop',
      isShowBackTop:false,
      taboffsetTop:0,
      isTabFixed:false
    }
  },
  created(){
    //初始化获得首页多个数据
    this.getHomeMultidata()
    //初始化每一种一页数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    //初始化GoodsItem中的图片加载完成刷新的事件
  
      
    //对refresh图片加载刷新进行防抖封装
    const refresh = this.debounce(this.$refs.scroll.refresh)
    //通过事件总线触发后得知一张照片已经加载好
    this.$bus.$on('itemImageLoad', () => {
      refresh()
     
    })
  },
  methods:{
    //事件监听的方法
    
    //防抖函数debounce封装
    debounce(func, delay=500){
      let timer = null;
      return function (...args) {
        if(timer){
          clearTimeout(timer)
          
          }
        timer = setTimeout(() => {
          func.apply(this, args)
         
        }, delay);
      }
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      },
     backClick(){
      //Scroll.vue里的BScroll实例的scrollTo方法
      this.$refs.scroll.scroll.scrollTo(0,0,300) 
      },
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000 
      
      this.isTabFixed = (-position.y) > this.taboffsetTop
      },
    loadMore(){
      this.getHomeGoods(this.currentType)

      this.$refs.scroll.scroll.refresh()
    },
    //轮播图加载完成后计算tabcontrol的位置
    swiperImageLoad(){
   
      this.taboffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.taboffsetTop);
    },
    //网络请求相关的方法
    //请求首页数据，轮播图，推荐图
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    //请求首页的商品数据
    getHomeGoods(type){
      const page = this.goods[type].page + 1
       getHomeGoods(type, page).then(res => {
    
      //解构添加到goods里
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page += 1

      // Scroll.vue里的BScroll实例的finishPullUp方法
      //让下拉加载可以继续进行，表示完成这一轮下拉事件
      this.$refs.scroll.scroll.finishPullUp()
    })
    }
  }
}
</script>

<style scoped>
#home{
  /* padding-top:44px; */
  height: 100vh;
  position: relative;
}
  .home-nav{
    /*头部标题组件*/
    background: pink;
    color: white;
/* 
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  /* .tab-control{
    position: sticky;
    top: 44px;
    background: white;
    z-index: 9;
  } */
  .content{
    /* bscroll组件 */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
}
.tab-control{
  position: relative;
  z-index: 9;
  background: white;
}
</style>