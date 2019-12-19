import layoutAside from './common/app-aside.vue'
import layoutHeader from './common/app-header.vue'

export default {
  install (Vue) {
    Vue.component('app-slider', layoutAside) // 注册一个全局组件
    Vue.component('app-header', layoutHeader) // 注册一个全局组件
  }
}
