<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="cotnentScroll">
    
      <detail-swiper
        :top-images="topImages"
        ref="detailSwiper"
        @itemimageload="imageload"/>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @goodsImageLoad="goodsImageLoad"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <toast />
  </div>
</template>

<script>
//组件
import DetailNavBar from "./children/DetailNavBar";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShopInfo from "./children/DetailShopInfo";
import DetailGoodsInfo from "./children/DetailGoodsInfo";
import DetailParamInfo from "./children/DetailParamInfo";
import DetailCommentInfo from "./children/DetailCommentInfo";
import DetailBottomBar from './children/DetailBottomBar'

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";
import {debounce} from '@/common/utils'
//网络数据请求（包括类）
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "@/network/detail.js";

//混入mixin 给刷新操作防抖
import { itemListenerMixin } from "@/common/mixin.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    // Toast
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex:0,
      isShowBackTop:false,
      
    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;

    //2.根据iid请求详细页的数据
    getDetail(this.iid).then((res) => {
      //获得顶部轮播图照片的数据并保存
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      console.log(data);
      //获得商品数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //商铺信息
      this.shop = new Shop(data.shopInfo);
      //商品详情
      this.detailInfo = data.detailInfo;
      //商品参数栏
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
        // console.log(data.rate);
      }

    
    }),
      //推荐商品信息的获取
      getRecommend().then((res) => {
        
        this.recommends = res.data.data.list;
      });
  },
 
  methods: {
    goodsImageLoad(){
      //各个内容的y坐标,标题和内容对齐
      this.$refs.scroll.scroll.refresh();
        
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        console.log(this.themeTopYs);
    },
    imageload() {
      //轮播图加载完刷新
      this.$refs.scroll.scroll.refresh();
    },
    //监听滚动
    cotnentScroll(position) {
      
      //标题跟着内容滚动而变
      const positionY = -position.y;
      let length = this.themeTopYs.length
      for(let i=0;i < length-1;i++){
       
        if (this.currentIndex !==i &&
         (i< length-1 && positionY >=this.themeTopYs[i] && positionY < this.themeTopYs[i+1]))
        {
          console.log(i);
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      //回顶显示
      this.isShowBackTop = positionY > 1000;
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 300);

    },
    backClick() {
      //Scroll.vue里的BScroll实例的scrollTo方法
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    addToCart(){
      // console.log('添加到购物车');
      const product = {}
      //获取购物车需要展示的信息
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid

      //2商品添加到购物车
      //复杂判定操作放在action
      // 用promise对面添加数量和添加商品分开
      this.$store.dispatch('addCart',product).then(res => {
        this.$toast.show(res, 2000)
      })
      
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content {
  /* 滚动视图的大小 */
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detail-nav {
  position: relative;
}
</style>

