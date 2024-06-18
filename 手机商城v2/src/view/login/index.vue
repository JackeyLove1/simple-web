<script setup>

import {useRouter} from "vue-router";

const router = useRouter()

function onClickLeft() {
  router.go(-1)
}
</script>

<template>
  <header>
    <van-nav-bar
        title="会员登录"
        left-arrow
        @click-left="onClickLeft"
    />
  </header>

  <main>
    <h1 class="title">
      手机号登录
    </h1>
    <p>未注册的手机号登录后将自动注册</p>

    <div class="form">
      <div class="form-item">
        <input type="text" placeholder="请输入手机号码"></input>
      </div>

      <div class="form-item">
        <input type="text" placeholder="请输入图形验证码"></input>
        <img src="@/assets/code.png" alt=""/>
      </div>

      <div class="form-item">
        <input type="text" placeholder="请输入短信验证码"></input>
        <div class="sms">
          获取验证码
        </div>
      </div>

      <div class="login">
        登录
      </div>
    </div>
  </main>

  <footer>

  </footer>
</template>

<style scoped>
main {
  margin-top: 30px;
  padding: 10px 30px;

  h1 {
    font-size: 26px;
    color: #191919;
    font-weight: 400;
  }

  p {
    font-size: 14px;;
    color: #B3B3B3;
    margin-top: 6px;
  }

  .form {
    margin-top: 30px;

    .form-item {
      display: flex;
      align-items: center;
      justify-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #f3f1f2;

      input {
        flex: 1;
        width: 100%;
        height: 38px;
        padding: 0 3px;
        text-decoration: none;
        outline: none;
        border: 0;
      }

      img {
        width: 94px;
        height: 35px;
      }

      .sms {
        width: 94px;
        color: #cea26a;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}


input::placeholder {
  color: #B3B3B3;
  font-size: 16px;
}

.login {
  width: 100%;
  height: 43px;
  margin-top: 40px;
  background: linear-gradient(90deg, #ecb53c, #ff9211);
  color: #fff;
  border-radius: 40px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .1);
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
</style>