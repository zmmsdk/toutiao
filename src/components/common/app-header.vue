<template>
<el-row class='layout-header' type='flex' align="middle">
      <!-- 先定义一行 -->
     <el-col class='left' :span="12">
         <i class='el-icon-full-screen '></i>
         <span class="ti">江苏传智播客教育科技股份有限公司</span>
     </el-col>
     <el-col class='right' :span="12">
         <el-row type='flex' justify="end" align="middle">
             <!-- <img src="./../../assets/img/icons.png" alt=""> -->
             <!-- 下拉菜单 -->
             <el-dropdown>
                 <!-- 匿名插槽  下拉菜单显示的元素内容 -->
                 <span class="shui">水若寒宇</span>
                 <el-dropdown-menu slot="dropdown">
                     <el-dropdown-item>个人信息</el-dropdown-item>
                     <el-dropdown-item>git地址</el-dropdown-item>
                     <el-dropdown-item>退出</el-dropdown-item>
                 </el-dropdown-menu>
             </el-dropdown>
         </el-row>
     </el-col>

  </el-row>
</template>

<style lang='less'>
.layout-header{
  background-color: #2e2f32;
  height: 60px;
}
.ti{
  color: #fff;
  margin-left: 10px;
}
.el-icon-full-screen{
  color: #fff;
}
.shui{
  margin-right: 50px;
  color: #fff;
}
</style>

<script>
export default {

}
</script>
