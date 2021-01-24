<template>
  <div class="bottom-bar">
   <div class="check-content">
      <check-button :class="{selectAll:isSelectAll}"  @click.native="bottomClick" class="check-button"/>
      <span>全选</span>
   </div>
   <div class="bottom-price">
     合计：￥{{totalPrice}}
   </div>
   <div class="calculate">
     去计算({{checkLength}})
   </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  components:{
    CheckButton
  },
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
         //数据有￥
        return preValue + parseInt(item.price.substring(1)) * item.count
      }, 0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length == 0) return false
   
      return this.$store.state.cartList.filter(item => item.checked).length === this.$store.state.cartList.length
    }
  },
  methods:{
    bottomClick(){
      if(this.isSelectAll){
        this.$store.commit('cancelSelectAll')
      }else{
        this.$store.commit('selectAll')
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    position: flex;
    position: relative;
    top: 535px;
    line-height: 40px;
    background: #eee;
  }
  .check-content{
    display: flex;
  
  }
  .check-button{
    width: 20px;
    height: 20px;
  }
  .check-content{
    margin-left: 10px;
  }
  .check-content span{
    margin-left: 5px;
  }
  .check-content{
    flex: 1;
  }
  .bottom-price{
    flex: 1;
  }
  .calculate{
    flex: 1;
    background: red;
  }
  .selectAll{
    color: red;
  }
</style>