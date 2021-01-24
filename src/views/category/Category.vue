<template>
  <div class="wrapper">
    <ul>
    <li>分类1</li>
    <li>分类2</li>
    <li>分类3</li>
    <li>分类4</li>
    <li>分类5</li>
    <li>分类6</li>
    <li>分类7</li>
    <li>分类8</li>
    <li>分类9</li>
    <li>分类10</li>
    <li>分类11</li>
    <li>分类12</li>
    <li>分类13</li>
    <li>分类14</li>
    <li>分类15</li>
    <li>分类16</li>
    <li>分类17</li>
    <li>分类18</li>
    <li>分类19</li>
    <li>分类20</li>
    <li>分类21</li>
    <li>分类22</li>
    <li>分类23</li>
    <li>分类24</li>
    <li>分类25</li>
    <li>分类26</li>
    <li>分类27</li>
    <li>分类28</li>
    <li>分类29</li>
  </ul></div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"Category",
  data(){
    return{
      scroll:null
    }
  },
 mounted(){
    this.scroll = new BScroll('.wrapper',{
        //随时scroll监听变化
        probeType: 3,
        //下拉触发事件
        pullupLoad: true
    })
    this.scroll.on('scroll',(position) => {
      console.log(position);
    })
    this.scroll.on('pullingUp',() => {
      //上拉加载更多
      console.log(开始了);
    })
  }
}
</script>

<style scoped>
  .wrapper{
    height: 100%;
    background-color: red;
    overflow: hidden;
  }
</style>