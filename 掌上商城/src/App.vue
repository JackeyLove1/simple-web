<script setup>
import {getHomeData} from "@/api/home.js";

const getData = async () => {
  const res = await getHomeData();
  console.log(res)
}
</script>

<template>
<div id="app">
<van-button type="primary" @click="getData">
  GetData
</van-button>
</div>
</template>

<style>

</style>
