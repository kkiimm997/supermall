import Vue from 'vue'
import App from './App.vue'
// 导入路由对象对象
import router from './router/index'
Vue.config.productionTip = false
//事件总线bus传输图片加载后刷新的事件
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
