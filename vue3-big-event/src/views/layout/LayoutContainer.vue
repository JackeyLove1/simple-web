<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  ArrowDown,
} from '@element-plus/icons-vue'
import avatar from '@/assets/default.png'

import {useRoute, useRouter} from "vue-router";
import {useUserStore} from "@/stores/index.js";

const router = useRouter()
const route = useRoute()

const handleOpen = (key, keyPath) => {
  console.log("key:", key)
  console.log("keyPath: ", keyPath)
}
const handleClose = (key, keyPath) => {
  console.log("key:", key)
  console.log("keyPath: ", keyPath)
}

const userStore = useUserStore()

const handleCommand = async (key) => {
  console.log("handle key: ", key)
  if (key === 'logout') {
    await
        router.push('/login')
  } else {
    router.push(`/user/${key}`)
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container class="h-screen">
      <el-aside width="200px" class="h-full bg-[#545c64]">
        <div class="aside-logo"></div>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            :default-active="$route.path"
            router
        >
          <el-menu-item index="/article/channel">
            <el-icon>
              <Management/>
            </el-icon>
            <span>文章分类</span>
          </el-menu-item>

          <el-menu-item index="/article/manage">
            <el-icon>
              <Promotion/>
            </el-icon>
            <span>文章管理</span>
          </el-menu-item>

          <el-sub-menu index="/user">
            <template #title>
              <el-icon>
                <UserFilled/>
              </el-icon>
              <span>个人中心</span>
            </template>

            <el-menu-item index="/user/profile">
              <el-icon>
                <User/>
              </el-icon>
              <span> 基本资料</span>
            </el-menu-item>

            <el-menu-item index="/user/avatar">
              <el-icon>
                <Crop/>
              </el-icon>
              <span> 修改头像</span>
            </el-menu-item>

            <el-menu-item index="/user/password">
              <el-icon>
                <EditPen/>
              </el-icon>
              <span> 修改密码</span>
            </el-menu-item>

          </el-sub-menu>

        </el-menu>
      </el-aside>
      <el-container class="bg-[#f5f5f5]">
        <el-header class="bg-[#fff] flex justify-between items-center">
          <div>
            管理员: <strong>
            {{ userStore.user.username || userStore.user.nickname || '默认管理员' }}
          </strong>
          </div>
          <el-dropdown class="dropdown mr-4" @command="handleCommand">
            <div class="avatar flex items-center ">
              <el-avatar :src="userStore.user.avatar || avatar"/>
              <el-icon class="el-icon--right">
                <arrow-down/>
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-menu>
                  <el-dropdown-item command="profile" :icon="User">
                    基本资料
                  </el-dropdown-item>
                  <el-dropdown-item command="avatar" :icon="Crop">
                    更换头像
                  </el-dropdown-item>
                  <el-dropdown-item command="password" :icon="EditPen">
                    重置密码
                  </el-dropdown-item>
                  <el-dropdown-item command="logout" :icon="SwitchButton">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>

        <el-footer class="flex items-center justify-center text-gray-500">
          Vue3 Big Event ©2023 Created by JackyFan
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.aside-logo {
  height: 120px;
  background: url("@/assets/logo.png") no-repeat center;
  background-size: 120px auto;
}

.common-layout {
  :deep(.el-dropdown) {
    border: 0;
    outline: none;

    &:focus, :hover, :focus {
      border: 0;
      outline: none;
    }
  }

  :deep(.el-footer) {
    height: var(--el-footer-height)/2;
    font-size: 16px;
  }
}
</style>