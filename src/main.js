import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入路由
// import from  './router/index'

// 引入elementui并注册
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
// 注册elementui

import './styles/index.less' // 引入样式
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
