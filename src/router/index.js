import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: r => require(['@/pages/home'], r)
    },
    {
      path: '/controll',
      component: r => require(['@/pages/controll'], r)
    },
    {
      path: '/skyApp',
      component: r => require(['@/pages/skyApp'], r)
    },
    {
      path: '/systemApp',
      component: r => require(['@/pages/systemApp'], r)
    },
    {
      path: '/settings',
      component: r => require(['@/pages/personalSet'], r)
    }
  ]
})
