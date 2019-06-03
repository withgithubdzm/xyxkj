<template>
    <div class="register">
      用户名：<input type="text" v-model="task.name">
     <p></p>
      账号：<input type="text" v-model="task.userid">
     <p></p>
     密码：<input type="password" v-model="task.pwd">
     <p></p>
    确认密码：<input type="text">
     <p></p>
     手机号：<input type="text" v-model="task.call">
     <p></p>
     <button class="but" @click="butreg">注册</button>
     <transition name="shg">
       <div class="bgg" v-show="shgood">sad
     <div class="good" v-show="shgood">
       注册成功
       <router-link to="/user">
       <div class="sp" @click="dele">点击跳转到登录页面</div>
       </router-link>
     </div>
     </div>
     </transition>
    </div>
    
</template>

<script>

export default {
  name: 'register',
  data(){
    return{
      shgood:false,
      task:{
        id:"",
        name:"",
        userid:"",
        pwd:"",
        call:"",
        goo:false
      }
    }
  },
  methods:{
    
    butreg(){
      let vx = this.$store.state.logins
      this.shgood = !this.shgood
      vx.push(this.task)
    },
    dele(){
      this.shgood = !this.shgood
    }
  }
}
</script>

<style scoped>
.register{
  font-size: .38rem;
  margin: 0 auto;
}
.register input{
  border-bottom: 1px solid #dddddd;
  margin-bottom: .4rem;
  font-size: .32rem;
  padding: .2rem 0;
}
.but{
  width: 60%;
  margin: .3rem auto;
  display: block;
  background: #ff5050;
  color: #fff;
  border-radius: .2rem;
}
.bgg{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.274);
  position: fixed;
  top: 0;
  left: 0;
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
