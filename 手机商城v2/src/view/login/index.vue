<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {codeLogin, getCaptchaCode, getSmsCode} from "@/api/api.js";
import {showToast, showSuccessToast, showFailToast} from "vant";
import {useUserStore} from "@/stores/modules/user.js";

const router = useRouter()
const route = useRoute()

function onClickLeft() {
  router.go(-1)
}

const mobile = ref('')
const picCode = ref('')
const picUrl = ref('')
const picKey = ref('')
const msgCode = ref('')
const totalSecond = ref(60)
const second = ref(60)
const getSMSLoading = ref(false)

let timer = null;

function validatePhone() {
  const phoneRegex = /^1[3-9]\d{9}/;
  if (!phoneRegex.test(mobile.value)) {
    showFailToast("手机号码格式不正确！")
    return false;
  }
  return true;
}

function validateCaptchaCode() {
  const captchaRegex = /^\w{4}/;
  if (!captchaRegex.test(picCode.value)) {
    showFailToast("图形验证码不正确！")
    return false;
  }
  return true;
}

function validateMsgCode() {
  const msgCodeRegex = /^\d{6}/;
  if (!msgCodeRegex.test(msgCode.value)) {
    showFailToast("短信验证码不正确！")
    return false;
  }
  return true;
}

function allowGetSMS() {
  return validatePhone() && validateCaptchaCode()
}

function allowLogin() {
  return validatePhone() && validateCaptchaCode() && validateMsgCode()
}

const getCaptcha = async () => {
  const {data: {base64, key}} = await getCaptchaCode()
  picUrl.value = base64
  picKey.value = key
}

const refreshCaptcha = async () => {
  await getCaptcha();
  showSuccessToast("刷新验证码成功！")
}

async function getSms() {
  if (allowGetSMS()) {
    if (totalSecond.value === second.value && !timer) {
      const res = await getSmsCode(picCode.value, picKey.value, mobile.value)
      console.log(res)
      showSuccessToast("发送短信验证码成功！")

      timer = setInterval(() => {
        second.value--
        if (second.value === 0) {
          clearInterval(timer)
          timer = null
          second.value = totalSecond.value
        }
      }, 1000)
    }
  }
}

const userStore = useUserStore()

async function login() {
  if (allowLogin()) {
    const {data: {token, userId}} = await codeLogin(mobile.value, msgCode.value)
    userStore.setUserInfo({'token': token, 'userId': userId})
    showSuccessToast("登录成功！")
    await router.push('/')
  }
}

onMounted(async () => {
  await getCaptcha()
})

onUnmounted(() => {
  clearInterval(timer)
})


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
        <input type="text" v-model="mobile" maxlength="11" placeholder="请输入手机号码"></input>
      </div>

      <div class="form-item">
        <input type="text" v-model="picCode" placeholder="请输入图形验证码"></input>
        <img v-if="picUrl" :src="picUrl" alt="" @click="refreshCaptcha"/>
      </div>

      <div class="form-item">
        <input type="text" v-model="msgCode" placeholder="请输入短信验证码"></input>
        <div class="sms" @click="getSms">
          {{ second === totalSecond ? '获取验证码' : second + '秒后重新获取' }}
        </div>
      </div>

      <div class="login" @click="login">
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
        width: 100px;
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