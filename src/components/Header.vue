<template>
    <div class="Header">
      <i class="iconfont icon-zhedie" @click="toggleFn"></i>
      <span>看影吧</span>
    </div>
    
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleFn() {
      this.$store.state.show = !this.$store.state.show
    }
  }
}
</script>

<style scoped>
.Header{
  width: 100%;
  height: 1rem;
  background: #fa541e;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
}
.Header i{
  font-size: .6rem;
  color: #fff;
  position:absolute;
  left: 0.2rem;
  top:0.2rem;
}
.Header span{
  font-size: .4rem;
  color: #fff;
  line-height: 1rem
}
</style>
