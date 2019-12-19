import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入路由
// import from  './router/index'
// import from './../node_modules/'
// 引入elementui并注册
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
// 注册elementui

import './styles/index.less' // 引入样式
// 引入axious
import axios from 'axios'
// 引入数据可视化echarts
import './../node_modules/echarts/dist/echarts'
Vue.use(ElementUI)
// 注册axious
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/1.0'// 设置一个常态值：基地址
Vue.prototype.$http = axios // axious赋值给全局对象
Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
