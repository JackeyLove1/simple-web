<script setup>
import {ref} from 'vue'

const active = ref(0)
</script>

<template>
  <div>
    <!-- 二级路由出口：二级组件展示的位置 -->
    <keep-alive :max="5">
      <router-view></router-view>
    </keep-alive>
    <van-tabbar v-model="active" route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" replace to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>