export default {
  //将复杂的操作放进actions
  addCart(context,payload){
    //查找数组中是否有该商品
    //有的话，oldproduct指向旧有的商品
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(function(item){
        return item.iid === payload.iid
      })
  
      //判断product的值
      if(oldProduct) {
        // oldproduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量+1')
      }else{
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加商品到购物车')
      }
    })
  }
}