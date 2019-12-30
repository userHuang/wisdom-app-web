import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 首页
      meta: {
        keepAlive: true // 需要缓存
      },
      component: r => require(['@/pages/home'], r)
    },
    {
      path: '/controll', // 快捷设置
      component: r => require(['@/pages/controll'], r),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/skyApp', // 小维智联
      component: r => require(['@/pages/skyApp'], r)
    },
    {
      path: '/systemApp', // 应用服务
      component: r => require(['@/pages/systemApp'], r)
    },
    {
      path: '/settings', // 系统设置
      component: r => require(['@/pages/personalSet'], r)
    },
    {
      path: '/washingMachine', // 洗碗机
      component: r => require(['@/pages/deviceDetail/washingMachine'], r)
    }
  ]
})
