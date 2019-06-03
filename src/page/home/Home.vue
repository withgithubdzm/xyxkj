<template>
    <div class="Home">
       <search></search>
       <homeswiper></homeswiper>
       <homeactive></homeactive>
    </div>
    
</template>

<script>
import search from "./components/search.vue"
import homeswiper from "./components/homeswiper.vue"
import homeactive from "./components/homeactive.vue"
export default {
  name: 'Home',
  components:{
    search,
    homeswiper,
    homeactive
  }
}
</script>

<style scoped>

</style>
