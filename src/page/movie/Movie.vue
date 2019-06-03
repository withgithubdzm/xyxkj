<template>
    <div class="Movie">
      <movieNav></movieNav>
      <router-view></router-view>
    </div>
    
</template>

<script>
import axios from 'axios'
import movieNav from "./components/movie-nav.vue"
export default {
  name: 'Movie',
  components:{
    movieNav
  }
}
</script>

<style scoped>

</style>
