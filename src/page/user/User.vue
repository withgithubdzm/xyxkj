<template>
    <div class="User">
        <div class="headerbox">
                <router-link to="/user"> 
                <div class="userl" :class="[userbt]" @click="userbut">登录</div>
                </router-link>
                <router-link to="/user/register">
                 <div class="regis" :class="[regisbt]" @click="regisbut">注册</div>
                </router-link>
            
        </div>
        <div class="footview">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'User',
  data(){
      return{
          userbt:"",
          regisbt:""
      }
  },
  methods:{
      userbut(){
          this.userbt="userbt"
          this.regisbt=""
      },
       regisbut(){
          this.regisbt="regisbt"
          this.userbt=""
      }
  }
}
</script>

<style scoped>
.headerbox{
    width: 100%;
    font-size: .4rem;
    border-bottom: 1px solid rgb(121, 120, 120);
    overflow: hidden;
}
.userl{
    float: left;
    width: calc(50% - 1px);
    text-align: center;
    border-right:1px solid #25a4bb6b;
    padding: .3rem 0;
}
.userbt{
    border-bottom: 1px solid red;
}
.regis{
    float: left;
    width: 50%;
    text-align: center;
    padding: .3rem 0;
}
.regisbt{
    border-bottom: 1px solid red;
}
.footview{
    width: 90%;
    margin: .2rem auto;
}
</style>
