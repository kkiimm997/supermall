import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home'
//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: () => import ('../views/category/Category')
  },
  {
    path:'/profile',
    component: () => import ('../views/profile/Profile')
  },
  {
    path:'/cart',
    component: () => import ('../views/cart/Cart')
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router