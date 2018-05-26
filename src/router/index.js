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
    },
    {
      path: 'multi-selection',
      name: 'MultiSelection',
      component: () => import('@/components/test-control/MultiSelection.vue')
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
    path: '/day-path/:equipment/:schoolCode/:token',
    name: '智能组件',
    component: () => import('@/components/lu-lin/DayPath.vue')
  },
  {
    path: '/report61/:equipment/:schoolCode/:token',
    name: '逆变器',
    component: () => import('@/components/lu-lin/Report61NiBianQi.vue')
  },
  {
    path: '/report64/:equipment/:schoolCode/:token',
    name: '发电量与收益',
    component: () => import('@/components/lu-lin/Report64ShouYi.vue')
  },
  {
    path: '/report65/:equipment/:schoolCode/:token',
    name: '报警与故障',
    component: () => import('@/components/lu-lin/Report65BaoJing.vue')
  },
  {
    path: '/report67/:equipment/:schoolCode/:token',
    name: '效率统计',
    component: () => import('@/components/lu-lin/Report67XiaoLv.vue')
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
