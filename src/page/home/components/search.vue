<template>
    <div class="search">
      <input type="text" placeholder="请输入内容" v-model="seatext">
      <i class="icon-sousuo iconfont" @click="officon"></i>
      <span>取消</span>
    </div>
    
</template>

<script>
const urln = "/apn/searchMusic?name=李白"
export default {
  name: 'search',
  data(){
   return{
     seatext:""
   }
  },
   methods:{
     officon(){
      console.log("请求中...")
      this.axios.get(urln).then(response=>{
            console.log(response)
          },err=>{
              console.log(err)
          })
     }
   }
}
</script>

<style scoped>
.search{
    width: 100%;
    background:#f1f4f8;
    padding: .16rem 0 .16rem 0;
    position: relative;
}
.search input{
    width: 66%;
    font-size:.3rem;
    color: #999;
    margin-left: 8%;
    padding: .1rem 0 .1rem .68rem;
}
.search i{
    font-size: .4rem;
    position: absolute;
    color: #abacad;
    top:.28rem;
    left: .8rem;
}
.search span{
  font-size: .3rem;
  margin-left: .2rem;
}
</style>
