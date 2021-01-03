import axios from 'axios'
  //封装axios请求
export function request(config){
  //创建一个axios对象
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })

  //请求拦截器 参数为两个函数,一个成功一个失败（成功必须要return）
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  //响应拦截器 参数为两个函数,一个成功一个失败（必须要return）
  instance.interceptors.response.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  //返回的是一个promise对象,所以使用的时候可以直接用.then和.catch
  return instance(config)
}