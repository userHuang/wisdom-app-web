<template>
  <div id="app" :style="homeBg">
    <div class="app-page" :style="coveredBg">
      <nav-header />
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/common/Header'
import homeBgImage from '@/assets/image/home.jpg'
import coveredImage from '@/assets/image/covered.png'

export default {
  name: 'App',
  components: {
    NavHeader
  },

  data () {
    return {
      homeBg: '',
      coveredBg: '',
      coveredImage,
      route2homeStyle: {
        '/': `background-image: url("${homeBgImage}")`,
        '/controll': 'background: linear-gradient(135deg,rgba(77,84,93,1) 0%,rgba(25,29,35,1) 100%)',
        '/skyApp': 'background: linear-gradient(135deg,rgba(77,84,93,1) 0%,rgba(25,29,35,1) 100%)'

      }
    }
  },

  watch: {
    $route (route) {
      console.log(route.path,'====route====')
      this.$nextTick(() => {
        this.homeBg = this.route2homeStyle[route.path]
        this.coveredBg = route.path === '/' ? `background-image: url("${this.coveredImage}")` : ''
        console.log(this.coveredBg, '--this.coveredBg--')
      })
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
  background-repeat: no-repeat;
}
.app-page{
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
</style>
