<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
       <slot></slot>
    </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    pullUpLoad:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  data(){
    return{
      scroll:null,
      
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        tap:true,
        //是否实时监听
        probeType:this.probeType,
        //是否允许下拉加载
        pullUpLoad:this.pullUpLoad
    })

    //监听滚动位置
    this.scroll.on('scroll',(position) => {
      // console.log(position);
      this.$emit('scroll', position)
    })
    //监听上拉事件
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })  
  },
  methods:{
    refresh(){
      console.log('-----------');
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>