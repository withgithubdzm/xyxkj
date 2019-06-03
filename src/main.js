import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import '@/assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from "./store"
import axios from 'axios'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: '1GEYVZ1RadgZLH5dBMCCeW6pwHXVrFe8'  //这个地方是官方提供的ak密钥
 })

Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //路由
  router,
  store,
  //组件
  components: { App },
  template: '<App/>'
})

