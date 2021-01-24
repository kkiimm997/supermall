<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item" :item-index="index"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from '@/views/cart/children/CartListItem'
export default {
  name:"CartList",
  components:{
   CartListItem
  },
  data(){
    return {
      cartList:[]
    }
  },
  created(){
    this.cartList = this.$store.state.cartList
    
  }
}
</script>

<style scoped>

</style>