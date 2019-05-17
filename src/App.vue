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
  }
}
</script>

<style>
.top{
  margin-top: 1rem;
}
</style>
