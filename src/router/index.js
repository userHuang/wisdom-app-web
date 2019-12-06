import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      component: r => require(['@/pages/helloWorld'], r)
    },
    {
      path: '/',
      component: r => require(['@/pages/home'], r)
    }
  ]
})
