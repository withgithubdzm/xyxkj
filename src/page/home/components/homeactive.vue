<template>
    <div class="homeactive">
       <div class="gong">
          <div class="gtop">{{dcasa.title}}</div>
          <div class="uls">
              <div class="boxli">
                  <swiper :options="swiperOption">
                  <swiper-slide class="list" v-for="item in dcasb.channellist" :key="item.channelid">
                      <img :src="item.avatar" alt="">
                      <div class="desc">{{item.name}}</div>
                  </swiper-slide>
                  </swiper>
              </div>
          </div>
      </div>
       <div class="gong">
          <div class="gtop">{{dcasb.title}}</div>
          <div class="uls">
              <div class="boxli">
                  <div class="lis" v-for="item in dcasa.channellist" :key="item.channelid">
                      <img :src="item.thumb" alt="">
                      <div class="desc">{{item.name}}</div>
                  </div>
              </div>
          </div>
      </div>
       <div class="boxview" v-show="dcasa.length<1">
        <img src="@/assets/img/loading.jpg" alt="">
      </div>
    </div>
    
</template>

<script>
const urld = "/apn/musicBroadcasting"
export default {
  name: 'homeactive',
  data(){
      return{
        dcasa:[],
        dcasb:[],
         swiperOption:{
        pagination:'.swiper-pagination',
        loop:true,
         slidesPerView:3
      }
      }
  },
  created(){
     console.log("请求中...")
      this.axios.get(urld).then(response=>{
          this.dcasa = response.data.result[0]
          this.dcasb = response.data.result[1]
            console.log(response)
          },err=>{
              console.log(err)
          })
        },
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
.gong{
    width: 100%;
    overflow: hidden;
}
.gtop{
    font-size: 0.36rem;
  font-weight: normal;
  padding: 0.3rem 0.3rem 0.1rem;
  color: #ff3333;
  background: #fff;
}
.lis{
    width: 20%;
    float: left;
    margin-top: .1rem;
}
.lis img{
    width: 100%;
}
.desc{
    text-align: center;
    margin-top: .1rem;
}
.list{
    width: 33%;
    margin-top: .1rem
}
.di{
    width: 100%;
    padding: .2rem 0;
    text-align: center;
    color: #cecece;
    margin-top: .3rem;
    border-top: 1px solid #cecece;
}
</style>
