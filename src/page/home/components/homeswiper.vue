<template>
  <div id="homeswiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in imgurl" :key="item.id">
        <img class="swiperimg" :src="item.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'homeswiper',
  data(){
    return{
        imgurl:[
            {id:1,img:require("@/assets/img/swiper1.jpg")},
            {id:2,img:require("@/assets/img/swiper2.jpg")},
            {id:3,img:require("@/assets/img/swiper3.jpg")},
            {id:4,img:require("@/assets/img/swiper4.jpg")},
            {id:5,img:require("@/assets/img/swiper5.jpg")}
        ],
        swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      }
    }
  }
}
</script>

<style scoped>

.swiperimg{
    width: 100%;
    height: 3.8rem;
}
</style>
