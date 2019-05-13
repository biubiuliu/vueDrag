import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/commons/menu/menu'
import detail from '@/page/detail/detail'

import designManagement from './part/design-management'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Menu',
    //   component:()=>('../components/commons/menu'),
    // },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
      children: [
        designManagement,
      ]
    },{
      path: '/detail',
      name: 'detail',
      component: detail,
    }
  ]
})
