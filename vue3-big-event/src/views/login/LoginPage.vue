<script setup>
import {ref, reactive, watch} from 'vue'
import {User, Lock} from '@element-plus/icons-vue'
import {userLoginService, userRegisterService} from "@/api/user.js";
import {useUserStore} from "@/stores/index.js";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const userStore = useUserStore()
const router = useRouter()

const defaultForm = {
  username: '',
  password: '',
  repassword: '',
}

const loginForm = reactive({
  ...defaultForm
})

function resetForm() {
  Object.keys(defaultForm).forEach(key => {
    loginForm[key] = defaultForm[key]
  })
}

const form = ref()

const isRegister = ref(false)

const rules = ref({
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 5, max: 10, message: '用户名长须在5-10个字符之间', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度在6-15个字符之间',
      trigger: 'blur'
    }],
  repassword: [
    {required: true, message: '请再次输入密码', trigger: 'blur'},
    {
      validator: (rule, value, callback) => {
        if (value !== loginForm.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    }
  ]
})


const login = async () => {
  await form.value.validate()
  const res = await userLoginService({
    username: loginForm.username,
    password: loginForm.password
  })
  console.log(res)
  userStore.setToken(res.data?.token)
  ElMessage.success("登陆成功")
  router.push('/')
}

watch(isRegister, () => resetForm())

const register = async () => {
  await form.value.validate()
  const res = await userRegisterService({
    username: loginForm.username,
    password: loginForm.password,
    repassword: loginForm.repassword,
  })
  console.log(res)
  userStore.setToken(res.data?.token)
  ElMessage.success("注册成功")
  isRegister.value = false
}

const hello = () => {
  ElMessage.success('Hello!')
}

</script>

<template>
  <div class="login">
    <el-row :span="24" class="w-full h-full">
      <el-col :span="12" class="bg-image bg-fuchsia-500 h-full"></el-col>
      <el-col :span="6" :offset="3"
              class="login-form h-2/3 my-auto mx-auto">
        <el-form
            :model="loginForm"
            :rules="rules"
            ref="form"
            size="large"
            class="flex flex-col space-y-5 w-full"
            v-if="!isRegister"
        >
          <el-form-item>
            <h1 class="text-3xl font-semibold"> 登录 </h1>
          </el-form-item>

          <el-form-item prop="username">
            <el-input
                :prefix-icon="User"
                v-model="loginForm.username"
                placeholder="请输入用户名"
                autocomplete="off"/>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
                :prefix-icon="Lock"
                type="password"
                placeholder="请输入密码"
                v-model="loginForm.password"
                autocomplete="off"/>
          </el-form-item>

          <el-form-item class="flex">
            <div class="flex flex-row justify-between w-full">
              <el-checkbox> 记住我</el-checkbox>
              <el-link type="primary" target="_blank">忘记密码？</el-link>
            </div>
          </el-form-item>

          <el-form-item class="flex">
            <el-button
                class="w-full"
                @click="login"
                @keydown.enter="login"
                type="primary">
              登录
            </el-button>
          </el-form-item>

          <el-form-item class="flex">
            <el-link
                type="info"
                :underline="false"
                @click="isRegister = true"
            >
              注册->
            </el-link>
          </el-form-item>

        </el-form>

        <el-form
            :model="loginForm"
            :rules="rules"
            ref="form"
            size="large"
            class="flex flex-col space-y-5 w-full"
            v-else
        >
          <el-form-item>
            <h1 class="text-3xl font-semibold"> 注册 </h1>
          </el-form-item>

          <el-form-item prop="username">
            <el-input
                :prefix-icon="User"
                v-model="loginForm.username"
                placeholder="请输入用户名"
                autocomplete="off"/>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
                :prefix-icon="Lock"
                type="password"
                placeholder="请输入密码"
                v-model="loginForm.password"
                autocomplete="off"/>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
                :prefix-icon="Lock"
                type="password"
                placeholder="请再次输入密码"
                v-model="loginForm.repassword"
                autocomplete="off"/>
          </el-form-item>

          <el-form-item class="flex">
            <el-button
                class="w-full"
                @click="register"
                type="primary">
              注册
            </el-button>
          </el-form-item>

          <el-form-item class="flex">
            <el-link
                type="info"
                :underline="false"
                @click="isRegister = false"
            >
              <-返回登录
            </el-link>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login {
  height: 100%;
  width: 100%;

  .bg-image {
    background-image: url('@/assets/login_bg.jpg');
    background-size: cover;
  }
}
</style>