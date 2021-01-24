<template>
  <div class="check-button">
    <i class="iconfont icon-xuanze" :class="{check:isChecked}"></i>
  </div>
</template>

<script>
export default {
  name:"check-button",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
i{
  font-size: 20px;
}
 .check{
   color: red;
 }
</style>