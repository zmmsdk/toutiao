<template>

 <div>

    <app-header></app-header>
       <div class="container-fluid">
        <div class="row">
          <app-slider></app-slider>
          <!-- 这里是动态切换的部分 -->
          <!-- <app-list></app-list> -->
           <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <transition>
                <router-view></router-view>
            </transition>
          </div>
          </div>
      </div>
  </div>

</template>

<script>
import appHeader from './../../components/common/app-header.vue'
import appSlider from './../../components/common/app-aside.vue'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    'app-header': appHeader,
    'app-slider': appSlider
  }
}

</script>

<style>

</style>
