<template>
    <div class="Machine">
      <matop></matop>
      <mainput></mainput>
    </div>
    
</template>

<script>
import matop from "./components/matop"
import mainput from "./components/mainput"
export default {
  name: 'Machine',
  components:{
    matop,
    mainput
  }
}
</script>

<style scoped>

</style>
