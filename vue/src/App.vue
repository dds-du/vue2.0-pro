<template>
  <div id="app">
    <ul class="clear">
      <li><router-link exact :to="index">首页</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
      <li><router-link to="/document">文档</router-link></li>
      <li><router-link to="/info">初始信息</router-link></li>
      <li><router-link to="/vuex">vuex测试</router-link></li>
    </ul>
    <!-- <router-view name="r_left"></router-view> -->
    <transition :name="trans">
         <router-view class="parent"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return {
      index:'/index',
      trans:''
    }
  },
  watch:{
    $route(to,from){
      //console.log(to.meta.index)
      //console.log(from.meta.index)
      this.trans = to.meta.index>from.meta.index?'right':'left'
    }
  }
}
</script>

<style>
.v-enter {}
.v-enter-to {}
.v-enter-active {}
.v-leave {}
.v-leave-to {}
.v-leave-active {}

.left-enter {transform: translate(100%);}
.left-enter-to {transform: none;}
.left-enter-active {transition: 1s;}
.left-leave {transform: none;}
.left-leave-to {transform: translate(-100%);}
.left-leave-active {transition: 1s;}

.right-enter {transform: translate(-100%);}
.right-enter-to {transform: none;}
.right-enter-active {transition: 1s;}
.right-leave {transform: none;}
.right-leave-to {transform: translate(100%);}
.right-leave-active {transition: 1s;}
</style>
