<script setup>

import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/modules/user.js";
import {computed, onBeforeMount, ref} from "vue";
import {getUserInfoDetail} from "@/api/api.js";
import {showConfirmDialog} from "vant";

const router = useRouter();
const userStore = useUserStore()

const detail = ref({})

async function logout() {
  showConfirmDialog({
    title: '温馨提示',
    message: '你确认要退出么',
  }).then(() => {
    userStore.clearUserInfo()
    isLogin.value = false
  }).catch(() => {
  })
}

const isLogin = computed(() => {
  return userStore.getUserInfo()?.token
})

onBeforeMount(async () => {
  if (isLogin.value) {
    const {data: {userInfo}} = await getUserInfoDetail();
    detail.value = userInfo
    console.log("userinfo: ", userInfo)
  }
})

</script>

<template>
  <div class="user">
    <header @click="router.push('/login')">
      <div class="page" v-if="isLogin">
        <div class="pic">
          <img :src="detail.avatar_url" alt="#">
        </div>
        <div class="content">
          <h3>{{ detail.nick_name }}</h3>
          <div class="vip">
            <van-icon name="diamond-o"/>
            <span>普通会员</span>
          </div>
        </div>
      </div>
      <div class="page" v-else>
        <div class="pic">
          <img src="@/assets/default-avatar.png" alt="#">
        </div>
        <div class="content">
          <h3>未登录</h3>
          <p>点击账号登录</p>
        </div>
      </div>
    </header>

    <nav>
      <div class="block">
        <div class="icon">
          {{ detail.balance || '--' }}
        </div>
        <div class="name">账户余额</div>
      </div>

      <div class="block">
        <div class="icon">
          --
        </div>
        <div class="name">积分</div>
      </div>

      <div class="block">
        <div class="icon"><span>--</span></div>
        <div class="name">优惠券</div>
      </div>

      <div class="block">
        <div class="icon">
          <van-icon name="balance-pay" size="25"/>
        </div>
        <div class="name">我的钱包</div>
      </div>
    </nav>

    <main>
      <div class="order-navbar">
        <div class="order-navbar-item block">
          <div class="icon">
            <van-icon name="balance-list-o" size="25"/>
          </div>
          <span class="name">全部订单</span>
        </div>

        <div class="order-navbar-item block">
          <div class="icon">
            <van-icon name="clock-o" size="25"/>
          </div>
          <span class="name">待支付</span>
        </div>

        <div class="order-navbar-item block">
          <div class="icon">
            <van-icon name="logistics" size="25"/>
          </div>
          <span class="name">待发货</span>
        </div>

        <div class="order-navbar-item block">
          <div class="icon">
            <van-icon name="send-gift-o" size="25"/>
          </div>
          <span class="name">待收货</span>
        </div>
      </div>

      <div class="service">
        <div class="title">
          我的服务
        </div>
        <div class="service-list">
          <div class="service-item block">
            <div class="icon">
              <van-icon name="location-o" size="25"/>
            </div>
            <span class="name">收货地址</span>
          </div>

          <div class="service-item block">
            <div class="icon">
              <van-icon name="gift-o" size="25"/>
            </div>
            <span class="name">领券中心</span>
          </div>

          <div class="service-item block">
            <div class="icon">
              <van-icon name="gift-card-o" size="25"/>
            </div>
            <span class="name">优惠券</span>
          </div>

          <div class="service-item block">
            <div class="icon">
              <van-icon name="question-o" size="25"/>
            </div>
            <span class="name">我的帮助</span>
          </div>

          <div class="service-item block">
            <div class="icon">
              <van-icon name="balance-o" size="25"/>
            </div>
            <span class="name">我的积分</span>
          </div>

          <div class="service-item block">
            <div class="icon">
              <van-icon name="refund-o" size="25"/>
            </div>
            <span class="name">退款/售后</span>
          </div>

        </div>
      </div>

      <div class="logout" @click="logout">
        退出登录
      </div>
    </main>

  </div>
</template>

<style scoped lang="less">

.user {
  background-color: #f9f9f9;
}

header {
  height: 138px;
  width: 100%;
  background-image: url("@/assets/user-header2.png");
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;

  .page {
    display: flex;
    flex-direction: row;
    align-items: center;

    .vip {
      display: inline-block;
      background-color: #3c3c3c;
      padding: 1vw 1.5vw;
      border-radius: 1.5vw;
      color: #e0d3b6;
      font-size: 3.8vw;
      margin-top: 6px;
      font-weight: 500;
    }
  }

  .pic {
    width: 86px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
  }

  .content {
    color: #C59A46;

    h3 {
      font-size: 17px;
      font-weight: 700;
    }

    p {
      margin-top: 6px;
      font-size: 15px;
    }
  }
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 100px;
  background-color: #fff;
  border-bottom: #f9f9f9 1px solid;

}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  color: #545454;

  .icon {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .name {
    font-size: 14px;
    margin-top: 5px;
  }
}

main {
  background-color: #f7f7f7;
  width: 100%;
  height: 1000px;
  margin-top: 0;

  padding: 0 10px;

  .order-navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    border-radius: 5px;
    margin: 10px auto;
    padding: 12px 5px;
    background-color: #fff;
  }

  .service {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 5px;

    .title {
      margin-left: 10px;
    }

    .service-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 10px;

      .service-item {
        width: 86px;
        margin-top: 24px;

        .icon {
          color: #ff3800;
        }
      }
    }
  }
}

.logout {
  text-align: center;
  width: 50%;
  height: 30px;
  border: 1px solid #dcdcdc;
  margin: 20px auto auto;
  line-height: 30px;
  font-size: 15px;
  border-radius: 8px;
  color: #616161;
  background-color: #fff;
}
</style>