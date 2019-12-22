import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入home组件和login组件
import home from '../views/Home/index.vue'
import login from '../views/login/login.vue'

// 导入文章发布组件
import publish from './../components/main-page/index-publish.vue'

import indexpage from './../components/main-page/index-page.vue'
// 导入文章列表组件
import indexaticles from './../components/main-page/index-aticles.vue'

import indexcomment from './../components/main-page/index-common.vue'

import indexsucai from './../components/main-page/index-sucai.vue'

import fanspicture from './../components/main-page/fans-picture.vue'

import fansinfo from './../components/main-page/fans-info.vue'

import fanshuaxiang from './../components/main-page/fans-huaxiang.vue'

import fanslist from './../components/main-page/fans-list.vue'

import userinfo from './../components/main-page/index-userinfo.vue'

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

// 登录令牌
// 当路由发生变化时  这个方法里的函数就会执行
// router.beforeEach(function (to, from, next) {
//   console.log(to.path)
//   // 权限拦截  认为有token让过去  没token不让过
//   //   nprogress.start() // 开启进度条
//   // 判断 拦截的范围
//   // startsWith以什么为开头
//   if (to.path.startsWith('/home')) {
//     // 进入到了拦截范围
//     // 判断是否登录 有token 就登录 没token就没登录
//     let token = window.localStorage.getItem('user-token') // 获取token
//     if (token) {
//       // 如果有token  方形
//       next()
//     } else {
//       next('/login') // 没有token 就跳转到登录页
//     }
//   } else {
//     next() // 放行
//   }
// })

export default router
