<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from "components/common/scroll/Scroll";

import CartList from './children/CartList'
import CartBottomBar from './children/CartBottomBar'
export default {
  name:"Cart",
  components:{
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
 activated(){
    this.$refs.scroll.scroll.refresh()
    
 }
}
</script>

<style scoped>
.nav-bar{
  background: pink;
  color: white;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.cart{
  
  height: 100%;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 99;
  background: white;
}

</style>