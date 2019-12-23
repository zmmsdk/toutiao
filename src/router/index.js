import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入home组件和login组件
import home from '../views/Home/index.vue'
import login from '../views/login/login.vue'

// 导入文章发布组件
import publish from './../views/main-page/index-publish.vue'

import indexpage from './../views/main-page/index-page.vue'
// 导入文章列表组件
import indexaticles from './../views/main-page/index-aticles.vue'

import indexcomment from './../views/main-page/index-common.vue'

import indexsucai from './../views/main-page/index-sucai.vue'

import fanspicture from './../views/main-page/fans-picture.vue'

import fansinfo from './../views/main-page/fans-info.vue'

import fanshuaxiang from './../views/main-page/fans-huaxiang.vue'

import fanslist from './../views/main-page/fans-list.vue'

import userinfo from './../views/main-page/index-userinfo.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login', component: login },
  // 一级路由组件
  { path: '/login', component: login },
  // 注册home组件和login组件
  { path: '/home',
    component: home,
    children: [
      // 为空位默认
      { path: '', component: indexpage },
      { path: 'publish', component: publish },
      { path: 'articles', component: indexaticles },
      { path: 'comment', component: indexcomment },
      { path: 'material', component: indexsucai },
      { path: 'picture', component: fanspicture },
      { path: 'fansinfo', component: fansinfo },
      { path: 'fanspicture', component: fanshuaxiang },
      { path: 'fanslist', component: fanslist },
      { path: 'userinfo', component: userinfo }

    ] }

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
