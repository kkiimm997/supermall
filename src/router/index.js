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
    component: Home,
    meta:{
      showTab:true
    }
  },
  {
    path:'/category',
    component: () => import ('../views/category/Category'),
    meta:{
      showTab:true
    }
  },
  {
    path:'/profile',
    component: () => import ('../views/profile/Profile'),
    meta:{
      showTab:true
    }
  },
  {
    path:'/cart',
    component: () => import ('../views/cart/Cart'),
    meta:{
      showTab:true
    }
  },
  {
    path:'/detail/:iid',
    component:() => import ('../views/detail/Detail'),
    meta:{
      showTab:false
    }
  }
]
//创建路由实例
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router