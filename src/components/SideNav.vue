<template>
<div class="SideNav">
<transition name="drawer">
    <div class="side drawer" v-show="$store.state.show">
      <div class="portrait">
        <img src="@/assets/img/toux.jpg" alt="">
      </div>
      <div class="desc">登录 &nbsp;/ &nbsp;注册</div>
      <router-link to="/">
      <div class="lis" @click="toggleFn">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
      <router-link to="/heat">
      <div class="lis" @click="toggleFn">正在热映<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
      <router-link to="/movie">
      <div class="lis" @click="toggleFn">电影资讯<i class="iconfont icon-xiangyou"></i></div>
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
      <div class="lis">退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出<i class="iconfont icon-xiangyou"></i></div>
    </div>
</transition>
<transition name="fade">
        <div class="bg" v-show="$store.state.show" @click="toggleFns"></div>
</transition>
</div>
</template>
<script>
export default {
  name: 'SideNav',
  methods: {
    toggleFn() {
      this.$store.state.show = !this.$store.state.show
    },
    toggleFns(){
      this.$store.state.show = false
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
  background: #111222d9;
  border-top: 1px solid #eee;
}
.drawer-enter-active, .drawer-leave-active {
  transition: all 0.5s linear;
}

.drawer-enter, .drawer-leave-to {
            /*进入动画的第一帧*/
  transform: translateX(-100%);
}
.drawer-enter-to, .drawer-leave {
            /*进入动画的第一帧*/
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
  font-size: .4rem;
  font-weight: 100;
  border-bottom: 1px solid #eeeeee2e;
  padding-bottom: .1rem
}
.lis i{
  float: right;
}
</style>
