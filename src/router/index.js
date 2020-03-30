import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Zhu from '../components/Management/Performance/Zhuyao.vue'
import Home from '../views/Home.vue'
import Role from '../components/System/Role/Rolezhu.vue'
import systemzhu from '../components/System/Systemzhu.vue'
import management from '../components/Management/Managementzhu.vue'
import Userzhu from '../components/System/Usermanagement/Userzhu.vue'
import operation from '../components/Operation/Operation.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
       {
        path: '/management',
        name: 'management',
        component: management
      },
       {
        path: '/zhu',
        name: 'zhu',
        component: Zhu
      },
       {
        path: '/operation',
        name: 'operation',
        component:operation
      },
        {
        path: '/system',
        name: 'system',
        component: systemzhu
      },
        {
        path: '/userzhu',
        name: 'userzhu',
        component: Userzhu
      },
        {
        path: '/role',
        name: 'role',
        component: Role
      }
       
    ]
  },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
