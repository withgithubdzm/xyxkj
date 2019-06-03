<template>
    <div class="movie-concent">
      <div class="toup">财经</div>
       <div class="lis" v-for="(item,index) in money" :key="index">
        <div class="img">
          <img :src="money[index].picInfo[0]?money[index].picInfo[0].url:$store.state.imgUrl" alt="">
        </div>
        <div class="title">{{item.title}}</div>
        <div class="webside">来自:{{item.source}}</div>
        <div class="ptime">{{item.ptime}}</div>
      </div>
      <div class="boxview" v-show="money.length<1">
        <img src="@/assets/img/loading.jpg" alt="">
      </div>
    </div>
</template>

<script>
import axios from "axios"
const urls = '/api/journalismApi'
export default {
  name: 'movieMoney',
  data(){
    return{
      money:[]
    }
  },
  created(){
     console.log("请求中...")
      this.axios.get(urls).then(response=>{
            this.money = response.data.data.money
            console.log(this.money)
          },err=>{
              console.log(err)
          })
        }
}

</script>

<style scoped>
.boxview{
  width: 100%;
  position:fixed;
  text-align: center;
  line-height: 10rem;
  top: 2rem;
  left: 0;
  z-index: 9;
  font-size: .6rem;
  color: #ff3333;
}
.boxview img{
  width: 10%;
}
.movie-concent{
  background: #f1f4f8;
}
.toup{
  font-size: 0.36rem;
  font-weight: normal;
  padding: 0.3rem 0.3rem 0.1rem;
  color: #ff3333;
  background: #fff;
}
.lis{
  z-index: 1;
  margin: 0 auto;
  background: #fff;
  margin-bottom: 0.06rem;
  overflow: hidden;
  padding: .2rem;
  position: relative;
}
.img{
  width: 33%;
  float: left;
  margin-right: .2rem
}
.img img{
  width: 100%;
  height: 1.6rem;
}
.title{
  font-size: .36rem;
  color: #404040;
  padding-right: .12rem;
}
.ptime{
  position: absolute;
  bottom: .2rem;
  right: .2rem;
  font-size: .2rem;
}
.webside{
  color: #757575;
  font-size: .2rem;
}
</style>
