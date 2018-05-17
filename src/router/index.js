import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/layout/Main'

Vue.use(Router)

export const routes = [{
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Main,
    children: [{
      path: 'home',
      name: 'HelloWorld',
      component: HelloWorld
    }]
  },
  {
    path: '/system',
    name: 'system',
    component: Main,
    children: [{
        path: 'rocket-mq',
        name: 'RocketMq',
        component: () =>
          import('@/components/system/rocket-mq/RocketMq.vue')
      },
      {
        path: 'rocket-mq-item',
        name: 'RocketMqItem',
        component: () =>
          import('@/components/system/rocket-mq/RocketMqItem.vue')
      }
    ]
  },
  {
    path: '/day-path',
    name: 'DayPath',
    component: () => import('@/components/lu-lin/DayPath.vue')
  }
  // #region 嵌套路由
  // {
  //   path: '/lu-lin',
  //   name: 'LuLin',
  //   redirect: '/day-path',
  //   component: Main,
  //   children: [{
  //     path: 'day-path',
  //     name: 'DayPath',
  //     component: () =>
  //       import('@/components/lu-lin/DayPath.vue')
  //   }]
  // }
  // #endregion 嵌套路由end
]

export default new Router({
  routes
})
