<template>
  <div id="app">
    <Header></header>
    <SideNav></SideNav>
    <router-view class="top"></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import Header from "./components/Header.vue"
import SideNav from "./components/SideNav.vue"
export default {
  name: 'App',
  components:{
    Header,
    SideNav
  },
  mounted(){
    //新建地图实例
      let map = new BMap.Map('allmap')
    //获取当前位置
      let myCity = new BMap.LocalCity()
      myCity.get((result)=>{
        if(result){
          this.$store.state.city=result.name
        }else{
          this.city='正在获取位置信息'
        }
      })
  },
}
</script>

<style>
.top{
  margin-top: 1rem;
}
</style>
