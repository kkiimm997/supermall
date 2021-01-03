<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name:"TabBar"
}
</script>
  
<style>
#tab-bar{
  display: flex;
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  
}

</style>