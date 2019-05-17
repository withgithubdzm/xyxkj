import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    show:false,
    content:""
}

const store = new Vuex.Store({
    state
})

export default store