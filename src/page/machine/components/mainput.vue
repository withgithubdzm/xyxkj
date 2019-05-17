<template>
    <div class="mainput">
        <div class="boxinp">
            <textarea class="tex" placeholder="你跟我聊什么。。。" v-model="textar"></textarea>
            <div class="but" @click="butmai">提问</div>
        </div>
    </div>
    
</template>

<script>
import axios from "axios"
export default {
  name: 'mainput',
  data(){
      return{
        textar:""
      }
  },
  methods:{
    butmai(){
    let self = this
    let url = 'api/api.php?key=free&appid=0&msg='+this.textar
    this.axios.get(url).then(response=>{
        if(this.textar){
            this.$store.state.content = response.data.content
            this.textar = ""
        }else{
            this.$store.state.content = "你倒是说啊！"
        }
    },err=>{
      alert(err)
    })
    }
  }
}
</script>

<style scoped>
.mainput{
    width: 100%;
    clear: both;
    margin-top: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.boxinp{
width: 100%;
background: #8a87b173;
padding: .3rem 0 .3rem 0;
height: 2rem;
border-radius: .2rem;
}
.tex{
width:60%;
height: 2rem;
float: left;
font-size: .3rem;
margin-left: .3rem;
}
.but{
    width: 30%;
    float: left;
    background: #fa541e;
    font-size: .4rem;
    color: #fff;
    height: 2rem;
    margin-left: .2rem;
    text-align: center;
    line-height: 2rem;
    border-radius: .2rem;
}
</style>
