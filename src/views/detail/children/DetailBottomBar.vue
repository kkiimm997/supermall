<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="iconfont icon-kefu"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="iconfont icon-icon-test"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
export default {
  methods:{
    addToCart(){
      this.$emit('addCart')
    }
  }
};
</script>

<style>
.bottom-bar {
  height: 49px;
  position: relative;
  background: #fff;
  z-index: 10;
  display: flex;
  text-align: center;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.3)
  /* bottom: 49px; */
}
.bar-item {
  flex: 1;
  display: flex;
  /* flex垂直居中方法 */
  align-items:center
}
.bar-item div {
  flex: 1;
  
}
.bar-left .text {
 
  font-size: 15px;
}
.bar-left .iconfont{
  display: block;
  margin:  auto ;
  font-size: 20px;
}
.cart{
  background: #ffdc35;
  line-height: 49px
} 
.buy{
  background: #ff79bc;
  line-height: 49px;
  color: white;
}
</style>