<script setup>

import router from "@/router/index.js";
</script>

<template>
  <h1>User</h1>
  <van-button @click="router.push('/login')">
    GoLogin
  </van-button>
</template>

<style scoped>

</style>