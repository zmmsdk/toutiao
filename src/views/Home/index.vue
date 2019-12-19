<template>

<!-- 先定义一个大容器 -->
  <el-container>
    <!-- 先放置一个左侧 -->
    <el-aside style="width:200px!important; "  class="el-aside"><app-slider></app-slider></el-aside>
    <!-- 右侧大容器 -->
    <el-container>
      <!-- 头部 -->
      <el-header style="padding:0!important;"> <app-header></app-header></el-header>
      <!-- 中部区域 -->
      <el-main>
        <!-- 二级路由容器 -->
        <!-- <index-page></index-page> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import appHeader from './../../components/common/app-header.vue'
import appSlider from './../../components/common/app-aside.vue'
// import indexpage from './../../components/main-page/index-page.vue'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    'app-header': appHeader,
    'app-slider': appSlider
    // 'index-page': indexpage
  }
}

</script>

<style>

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-aside{
    height: 100%;
    min-height: 755px;
    background-color: rgb(53, 59, 78);
  }
</style>
