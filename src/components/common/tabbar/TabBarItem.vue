<template>
 <div id="tab-bar-item" @click="itemClick">
    <div :class={active:isActive}><slot  name="item-icon"></slot></div>
    <div :class={active:isActive}><slot  name="item-text"></slot></div>
   </div>
</template>

<script>
export default {
props:{
  path:String
},
data(){
  return {
    
  }
},
methods: {
  itemClick(){
    console.log(this.path);
   this.$router.push(this.path)
   
  }
},
computed: {
  isActive(){
    
    return this.$route.path.indexOf(this.path) !== -1
  }
}
}
</script>

<style>
  #tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  #tab-bar-item i{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: red;
  }
</style>