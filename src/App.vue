<template>
  <div id="app">
    <div class="app-page">
      <nav-header />
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/common/Header'

export default {
  name: 'App',
  components: {
    NavHeader
  },
  data () {
    return {
      hasLogin: false
    }
  },
  beforeRouteUpdate () {
    console.log('------beforeRouteEnter ---11--')
    console.log(this.$route)
    if (window.sessionStorage.account) {
      this.hasLogin = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 720px;
  height: 720px;
  background: url("./assets/image/home.jpg") no-repeat;
}
.app-page{
  width: 100%;
  height: 100%;
  background: url("./assets/image/covered.png") no-repeat;
}
</style>
