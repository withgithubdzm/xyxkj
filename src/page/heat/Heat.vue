<template>
    <div class="Heat">
      <div class="heatlis" v-for="(item,index) in heatli" :key="index">
        <div class="heatop">
          <div class="topler">
            <img :src="item.pic_s192" alt="">
          </div>
          <div class="toprigh">
          <swiper :options="swiperOption">
            <swiper-slide class="botli" v-for="(it,indes) in item.content" :key="indes">
              <img :src="it.pic_small" alt="" @click="picbutton({name:'Forum'})">
              <div class="desc">{{it.author}}</div>
            </swiper-slide>
          </swiper>
          </div>
        </div>
        <div class="heabottom">
          {{item.comment}}
        </div>
      </div>
      <div class="boxview" v-show="heatli.length<1">
        <img src="@/assets/img/loading.jpg" alt="">
      </div>
    </div>
    
</template>

<script>
const urln = "/apn/musicRankings"
const urlt = "/apn/musicBroadcastingDetails?channelname=public_tuijian_spring"
export default {
  name: 'Heat',
  data(){
    return{
      heatli:[],
       swiperOption:{
        pagination:'.swiper-pagination',
        loop:true,
         slidesPerView:3
      }
    }
  },
  created(){
     console.log("请求中...")
      this.axios.get(urln).then(response=>{
        this.heatli = response.data.result
            console.log(this.heatli)
          },err=>{
              console.log(err)
          })
        },
  methods:{
    picbutton(path){
      this.$router.push(path)
      this.axios.get(urlt).then(response=>{
            console.log(response)
          },err=>{
              console.log(err)
          })
    }
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
.Heat{
  background: #f4f5f6;
}
.heatlis{
  width: 100%;
  margin-bottom: 1px;
  overflow: hidden;
   border-bottom: 1px solid rgb(202, 199, 199);
}
.heatop{
  width: 92%;
  margin: 0 auto;
  padding: .2rem;
  overflow: hidden;
}
.topler{
  float: left;
  width: 30%;
}
.topler img{
width: 100%;
}
.heabottom{
  width: 100%;
  overflow: hidden;
}
.botli{
  margin: .2rem 2%;
  float: left;
}
.botli img{
  width: 100%;
}
.desc{
  text-align: center;
  margin-top: .1rem;
  color: #e44444;
}
.heabottom{
  width: 90%;
  margin: 0 auto;
  padding-bottom: .2rem;
}
</style>
