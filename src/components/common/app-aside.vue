<template>
  <el-container style="height: 100%; border: 1px solid #666">
    <el-aside width="200px">
      <div id="top">
        <i class="el-icon-star-off"></i> 大数据中心
      </div>
      <el-menu :default-openeds="['1', '7']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>系统设置
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">商品管理1</el-menu-item>
            <el-menu-item index="1-2">商品管理2</el-menu-item>
            <el-menu-item index="1-3">商品管理1</el-menu-item>
            <el-menu-item index="1-4">商品管理2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title" class="back">
            <i class="el-icon-message"></i>商品管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">商品管理1</el-menu-item>
            <el-menu-item index="2-2">商品管理2</el-menu-item>
            <el-menu-item index="2-3">商品管理1</el-menu-item>
            <el-menu-item index="2-4">商品管理2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title" class="back">
            <i class="el-icon-menu"></i>文章管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">商品管理1</el-menu-item>
            <el-menu-item index="3-2">商品管理2</el-menu-item>
            <el-menu-item index="3-3">商品管理1</el-menu-item>
            <el-menu-item index="3-4">商品管理2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title" class="back">
            <i class="el-icon-setting"></i>订单管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">商品管理1</el-menu-item>
            <el-menu-item index="4-2">商品管理2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title" class="back">
            <i class="el-icon-setting"></i>评论管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">商品管理1</el-menu-item>
            <el-menu-item index="5-2">商品管理2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title" class="back">
            <i class="el-icon-setting"></i>数据管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">商品管理1</el-menu-item>
            <el-menu-item index="6-2">商品管理2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title" class="back">
            <i class="el-icon-setting"></i>用户管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">商品管理1</el-menu-item>
            <el-menu-item index="7-2">商品管理2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- <el-container>
       <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-header>-->

    <el-main >
      123
     <div id="myChart"></div>
    </el-main>
  </el-container>
</template>
<script>
export default {

}
// app.title = '坐标轴刻度与标签对齐'

// option = {
//   color: ['#3398DB'],
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: { // 坐标轴指示器，坐标轴触发有效
//       type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
//     }
//   },
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true
//   },
//   xAxis: [
//     {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//       axisTick: {
//         alignWithLabel: true
//       }
//     }
//   ],
//   yAxis: [
//     {
//       type: 'value'
//     }
//   ],
//   series: [
//     {
//       name: '直接访问',
//       type: 'bar',
//       barWidth: '60%',
//       data: [10, 52, 200, 334, 390, 330, 220]
//     }
//   ]
// }

</script>
<style >
#top {
  width: 199px;
  height: 60px;
  background-color: #666;
  line-height: 60px;

  font-size: 14px;
  padding-left: 25px;
}
.el-submenu__title {
  background-color: #666;
  color: #fff !important;
}
.el-submenu__title:hover {
  background-color: #666 !important;
}

.el-header {
  background-color: #409eff;
  color: #fff;
  line-height: 60px;
  font-size: 20px;
}

.el-aside {
  color: #fff;
}

.el-menu {
  background-color: #eee !important;
}
</style>

<script>
export default {

}
</script>
