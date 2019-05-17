import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import '@/assets/style/iconfont.css'
import store from "./store"
import axios from 'axios'

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

