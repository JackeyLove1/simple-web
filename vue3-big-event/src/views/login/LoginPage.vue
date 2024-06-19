<script setup>
import {ref, reactive} from 'vue'
import {User, Lock} from '@element-plus/icons-vue'

const loginForm = reactive({
  username: '',
  password: ''
})

const rules = ref({
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min:5, max:10, message: '用户名长须在5-10个字符之间', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {},
  ]
})

const onSubmit = () => {

}

const onReset = () => {

}

const login = () => {

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
            ref="loginForm"
            size="large"
            class="flex flex-col space-y-5 w-full"
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
                type="primary">
              登录
            </el-button>
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