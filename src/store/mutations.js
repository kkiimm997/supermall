export default {
  //mutations只进行单一的操作
  addCounter(state, payload){
    payload.count ++
  },
  addToCart(state, payload){
    payload.checked = true
    state.cartList.push(payload)
  },
  changeCheck(state,itemIndex){
    state.cartList[itemIndex].checked = !state.cartList[itemIndex].checked
  },
  cancelSelectAll(state){
    //取消全选
    state.cartList.forEach(item => item.checked = false)
  },
  selectAll(state){
    //全选
    state.cartList.forEach(item => item.checked = true)
  }
}