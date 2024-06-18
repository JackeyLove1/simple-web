<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

function onClickLeft() {
  router.push('/home')
}

</script>

<template>
  <van-nav-bar title="购物车" left-arrow @click-left="onClickLeft"/>
  <main>
    <van-empty description="购物车是空的，快去逛逛吧！"/>
    <div class="btn">
      <van-button  color="linear-gradient(to right, #ff6034, #ee0a24)" to="/home" size="large" round>去逛逛</van-button>
    </div>
  </main>
</template>

<style scoped>
main{
  width: 100%;
  background-color: #f9f9f9;

  .btn{
    width: 30%;
    height: 38px;
    margin: auto auto;
  }
}

.van-button{
  width: 100%;
  height: 100%;
}
</style>