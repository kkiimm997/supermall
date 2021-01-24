import { debounce } from './utils'

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener: null
    }
  },
  mounted(){
    let newRefresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    console.log('我是混入的mounted周期函数');
  }
}