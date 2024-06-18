<script setup>

</script>

<template>
  <div>
    <!-- 二级路由出口：二级组件展示的位置 -->
    <router-view></router-view>
    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" replace to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<style scoped>

</style>