<template>
    <div class="movie-nav">
     <div class="nav-box">
        <router-link to="/movie">
          <span class="spa">推荐</span>
        </router-link>
         <router-link to="/movie/movietoutiao">
          <span class="spa">新闻</span>
        </router-link>
         <router-link to="/movie/movieent">
          <span class="spa">娱乐</span>
        </router-link>
         <router-link to="/movie/movieauto">
          <span class="spa">汽车</span>
        </router-link>
         <router-link to="/movie/moviemoney">
          <span class="spa">财经</span>
        </router-link>
         <router-link to="/movie/moviesports">
          <span class="spa">体育</span>
        </router-link>
         <router-link to="/movie/movietech">
          <span class="spa">科技</span>
        </router-link>
     </div>
    </div>
    
</template>

<script>
import axios from "axios"
export default {
  name: 'movieNav'
}

</script>

<style scoped>
.movie-nav{
  width: 100%;
  background: #f4f5f6;
  padding: .2rem 0 .2rem 0;
}
.nav-box{
  text-align: center;
}
.spa{
  font-size: .32rem;
  display: inline-block;
  margin: 0 .16rem 0 .16rem;
}
</style>
