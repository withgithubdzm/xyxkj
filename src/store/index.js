import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    show:false,
    content:"",
    imgUrl:require('@/assets/img/imgnull.jpg'),
    city:'',
    logins:[],
    usernames:"登录 / 注册",
    tos:"/user",
    de:false
}

const store = new Vuex.Store({
    state
})

export default store