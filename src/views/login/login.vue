<template>
  <div class="back">
      <img src="./../../assets/img/login_bg.jpg" alt="">
    <login class="login">
        789

    </login>
    <!-- 456 -->
    <!-- <router-view>456</router-view> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.back{
width: 100%;
height: 100%;
// background-color: red;
    img{
        width: 100%;
        // height: 100%;

    }
}
.login {
  width: 500px;
  height: 400px;
  background-color: #fff;
  /* 2.移动  不用关心盒子的本身的宽高  */
      position: absolute;
      /* 相对于父亲 宽高 */
      top: 50%;
      left: 50%;
      /* 相对于自身 宽高 */
      transform: translate(-50%, -50%);

}
</style>
