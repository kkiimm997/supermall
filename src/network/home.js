import { request } from './request'
// 对首页请求进行封装
export function getHomeMultidata(){
  //request返回的是一个promise对象，调用时可以直接用then
  return request({
    url:'/home/multidata'
  })
}
//商品数据
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}