<template>
    <div class="login">
     账号：<input type="text" placeholder="手机号/邮箱/QQ" v-model="userid">
     <p></p>
     密码：<input type="text" placeholder="登录密码" v-model="pwd">
     <p></p>
     <button class="but" @click="loginbut">登录</button>
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
export default {
  name: 'login',
  data(){
    return{
      con:"",
      shgood:false,
      userid:"",
      pwd:"",
      linto:""
    }
  },
  methods:{
    
    loginbut(){
      let vx = this.$store.state.logins
      console.log(vx)
      if(this.userid&&this.pwd){
        this.shgood = !this.shgood
        for(var i = 0;i<vx.length;i++){
          if(this.userid==vx[i].userid&&this.pwd==vx[i].pwd){
            this.linto = "/"
            this.con = "登录成功"
            this.shgood=true,
            this.goo = true,
            this.$store.state.usernames = vx[i].name
            this.$store.state.tos = "/"
            this.$store.state.de = true
            console.log("登录成功",vx)
          }else{
            this.con = "用户不存在"
          }
        }
      }else{
         this.shgood = !this.shgood
        this.con = "请输入账号或密码"
      }
    },
     dele(){
      this.shgood = !this.shgood
    }
  }
}
</script>

<style scoped>
.login{
  font-size: .38rem;
  margin: 0 auto;
}
.login input{
  border-bottom: 1px solid #dddddd;
  margin-bottom: .4rem;
  font-size: .32rem;
  width: 80%;
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
