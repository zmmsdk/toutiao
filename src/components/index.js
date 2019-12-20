import layoutAside from './common/app-aside.vue'
import layoutHeader from './common/app-header.vue'
import breadCrumb from './common/bread-crumb'

import { quillEditor } from 'vue-quill-editor'
// 导入富文本编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import coverImg from './common/publish/cover-image.vue'
import selectImg from './common/publish/select-image.vue'

export default {
  install (Vue) {
    Vue.component('app-slider', layoutAside) // 注册一个全局组件
    Vue.component('app-header', layoutHeader) // 注册一个全局组件

    Vue.component('bread-crumb', breadCrumb) // 注册面包屑组件
    Vue.component('quill-editor', quillEditor) // 全局注册富文本编辑
    Vue.component('cover-image', coverImg) // 注册封面组件
    Vue.component('select-image', selectImg) // 注册选择图片组件
  }
}
