import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入home组件和login组件
import home from '../views/Home/index.vue'
import login from '../views/login/login.vue'

// 导入文章发布组件
import publish from './../components/main-page/index-publish.vue'

import indexpage from './../components/main-page/index-page.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login', component: login },
  // 注册home组件和login组件
  { path: '/home',
    component: home,
    children: [
      // 为空位默认
      { path: '', component: indexpage },
      { path: 'publish', component: publish }
    ] },
  { path: '/login', component: login }
  // {
  //   path: '/about',
  //   // name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
