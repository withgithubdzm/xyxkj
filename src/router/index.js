import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home.vue'
import Heat from '@/page/heat/Heat.vue'
import Movie from '@/page/movie/Movie.vue'
import Forum from '@/page/forum/Forum.vue'
import Machine from '@/page/machine/Machine.vue'
import About from '@/page/about/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  //根路由
  
      component: Home //组件
    },
    {
      path: '/forum',  //根路由

      component: Forum //组件
    },
    {
      path: '/about',  //根路由
    
      component: About //组件
    },
    {
      path: '/machine',  //根路由
     
      component: Machine //组件
    },
    {
      path: '/movie',  //根路由

      component: Movie //组件
    },
    {
      path: '/heat',  //根路由

      component: Heat //组件
    }
  ]
})