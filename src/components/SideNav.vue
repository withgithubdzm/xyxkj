<template>
<div class="SideNav">
<transition name="drawer">
    <div class="side drawer" v-show="$store.state.show">
      <div class="portrait">
        <img src="@/assets/img/toux.jpg" alt="">
      </div>
      <router-link :to="$store.state.tos">
      <div class="desc" @click="toggleFn">{{$store.state.usernames}}</div>
      </router-link>
      <router-link to="/">
      <div class="lis" @click="toggleFn">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
      <router-link to="/movie">
      <div class="lis" @click="toggleFn">每日资讯<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
      <router-link to="/heat">
      <div class="lis" @click="toggleFn">音乐排行<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
      <router-link to="/forum">
      <div class="lis" @click="toggleFn">交流论坛<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
      <router-link to="/machine">
      <div class="lis" @click="toggleFn">人机互动<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
      <router-link to="/about">
      <div class="lis" @click="toggleFn">关于我们<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
      <div class="lis" @click="toggleFnt">退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出<i class="iconfont icon-xiangyou"></i></div>
      <div class="weather">{{$store.state.city}}</div>
    </div>
</transition>
<transition name="fade">
        <div class="bg" v-show="$store.state.show" @click="toggleFns"></div>
</transition>
 <transition name="shg">
     <div class="good" v-show="shgood">
       <span class="tan">!</span>
       {{con}}
       <router-link :to="linto">
       <div class="sp" @click="dele">确定</div>
       </router-link>
     </div>
     </transition>
</div>
</template>
<script>
// const urls = '/api/weatherApi?city=广州'
export default {
  name: 'SideNav',
  data(){
    return{
      linto:"/",
      shgood:false,
      con:"退出成功"
    }
  },
  methods: {
    toggleFn() {
      this.$store.state.show = !this.$store.state.show
    },
    toggleFns(){
      this.$store.state.show = false
    },
    toggleFnt(){
      let vx = this.$store.state.logins
      this.$store.state.show = !this.$store.state.show
      if(this.$store.state.de){
           this.$store.state.usernames = "登录 / 注册"
           this.$store.state.tos = "/user"
           this.$store.state.de = false
      }else{
          console.log("请先登录")
      }
    },
    dele(){
      this.shgood = !this.shgood
      this.linto="/user"
    }
  }
}
</script>

<style scoped>
.side{
  position:fixed;
  z-index: 100;
  width: 46%;
  height: 100%;
  top: 0;
  left: 0;
  /* background: #111222d9; */
  background-image: linear-gradient(90deg, #111222d9 92%,#f5e6e680);
  border-top: 1px solid #eee;
}
.drawer-enter-active, .drawer-leave-active {
  transition: all 0.5s linear;
}

.drawer-enter, .drawer-leave-to {
   opacity: 0;
            /*进入动画的第一帧*/
  transform: translateX(-100%);
}
.drawer-enter-to, .drawer-leave {
            /*进入动画的第一帧*/
             opacity: 0.5;
  transform: translateX(0);
}

.bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(7, 17, 27, 0.5);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-entert-to, .fade-leave {
  opacity: 0.5;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.6s linear;
}

.portrait{
  width: 1.3rem;
  margin: 1rem auto .4rem;
}
.portrait>img{
  width: 100%;
  border-radius: 50%;
}
.desc{
  color: #eee;
  font-size: .4rem;
  text-align: center;
  border-bottom: 1px solid #888;
  padding-bottom: .2rem
}

.lis{
  width: 90%;
  margin: .4rem auto;
  color: #eee;
  font-size: .3rem;
  font-weight: 100;
  border-bottom: 1px solid #eeeeee2e;
  padding-bottom: .1rem
}
.lis i{
  float: right;
}
.tan{
  font-size: .6rem;
  font-weight: normal;
  color: red;
}
.good{
  width: 60%;
  background: #c5c5c5d3;
  margin: auto;
  position: fixed;
  top: 2.1rem;
  left: 20%;
  padding: .2rem 0;

  text-align: center;
}
.sp{
  margin-top: .2rem;
  font-size: .3rem;
  border-bottom: 1px solid rgb(122, 121, 121);
  color: red;
}
.shg-enter-active, .shg-leave-active {
  transition: all 0.5s linear;
}

.shg-enter, .shg-leave-to {
            opacity: 0;
            /*进入动画的第一帧*/
}
.shg-enter-to, .shg-leave {
            /*进入动画的第一帧*/
             opacity: 0.5;
}
</style>
