<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view/></keep-alive>
    <main-tab-bar v-if="this.$route.meta.showTab"></main-tab-bar>
  </div>
</template>

<script>


import MainTabBar from '@/components/content/mainTabbar/MainTabBar'

export default {
  
  name: 'App',
  components: {
    MainTabBar,
   
  }
}
</script>

<style>

@import '../src/assets/css/base.css'
</style>
