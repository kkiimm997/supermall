import Vue from 'vue'
import App from './App.vue'
// 导入路由对象对象
import router from './router'
//导入vuex
import store from './store'

import FastClick from 'fastclick'

import toast from 'components/common/toast'
Vue.config.productionTip = false
//事件总线bus传输图片加载后刷新的事件!!!用于非父子关系的关联事件
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
//解决移动端300ms延迟
FastClick.attach(document.body)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
