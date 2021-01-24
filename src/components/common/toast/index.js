import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
  //1按模板创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2组件构造器创建组件
  const toast = new toastContrustor()
  //3将组件对象手动挂载在某个元素上
  toast.$mount(document.createElement('div'))
  //4 toust.$el就是这个div
  document.body.appendChild(toast.$el)
  //挂载在原型上
  Vue.prototype.$toast = toast;
}
export default obj