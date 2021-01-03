<template>
  <div id="app">
    <router-view></router-view>
    <div><home-swiper></home-swiper></div>
    <main-tab-bar></main-tab-bar>
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
