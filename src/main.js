import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入elementui并注册
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
Vue.use(ElementUI)// 注册elementui

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
