import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home.vue'
import Heat from '@/page/heat/Heat.vue'
import Movie from '@/page/movie/Movie.vue'
import Forum from '@/page/forum/Forum.vue'
import Machine from '@/page/machine/Machine.vue'
import About from '@/page/about/About.vue'
import User from '@/page/user/User.vue'

import moviedy from '@/page/movie/components/moviedy.vue'
import movietoutiao from '@/page/movie/components/movietoutiao.vue'
import movieent from '@/page/movie/components/movieent.vue'
import movieauto from '@/page/movie/components/movieauto.vue'
import moviemoney from '@/page/movie/components/moviemoney.vue'
import moviesports from '@/page/movie/components/moviesports.vue'
import movietech from '@/page/movie/components/movietech.vue'

import login from '@/page/user/components/login.vue'
import register from '@/page/user/components/register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  //根路由
  
      component: Home //组件
    },
    {
      path: '/forum',  //根路由
      name:'Forum',
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
      component: Movie, //组件
      children:[
        {
          path:'/movie',
          name:"moviedy",
          component:moviedy
        },
        {
          path:'/movie/movietoutiao',
          name:"movie/movietoutiao",
          component:movietoutiao
        },
        {
          path:'/movie/movieent',
          name:"movieent",
          component:movieent
        },
        {
          path:'/movie/movieauto',
          name:"movieauto",
          component:movieauto
        },
        {
          path:'/movie/moviemoney',
          name:"moviemoney",
          component:moviemoney
        },
        {
          path:'/movie/moviesports',
          name:"moviesports",
          component:moviesports
        },
        {
          path:'/movie/movietech',
          name:"movietech",
          component:movietech
        }
      ]
    },
    {
      path: '/heat',  //根路由
      component: Heat //组件
    },
    {
      path: '/user',  //根路由
      component: User, //组件
      children:[
        {
          path:'/user',
          name:"login",
          component:login
        },
        {
          path:'/user/register',
          name:"register",
          component:register
        },
      ]
    }
  ]
})