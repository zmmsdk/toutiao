// 导入vue
import Vue from 'vue'
// 引入根组件
import App from './App.vue'
// 引入路由文件index
import router from './router/index'
// 引入elementui并注册
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
// 注册elementui
// 引入全局注册插件
import Component from './components/index'

// 引入权限模块
import './permission'
// 导入请求配置文件
import './utils/axios.config'

import './styles/index.less' // 引入样式
// 引入axious
// import axios from 'axios'
// 引入数据可视化echarts
import './../node_modules/echarts/dist/echarts'
Vue.use(ElementUI)
Vue.use(Component) // 全局注册

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
