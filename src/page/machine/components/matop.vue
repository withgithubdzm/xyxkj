<template>
    <div class="matop">
        <div class="matop-left">
          <img src="@/assets/img/timg.gif" alt="">
        </div>
        <div class="matop-right">
          {{$store.state.content}}

        </div>
    </div>
    
</template>

<script>
export default {
  name: 'matop'
}
</script>

<style scoped>
.matop{
  padding-top: 1rem;
  overflow: hidden;
}
  .matop-left{
    width: 50%;
    float: left;
  }
  .matop-left img{
    width: 100%;
  }
  .matop-right{
    width: 40%;
    height: 3rem;
    float: left;
    border: 1px solid #888;
    border-radius: 20px;
    padding: 0.2rem;
    font-size: .3rem;
    overflow: hidden;
    word-break:break-all;
  }
</style>
