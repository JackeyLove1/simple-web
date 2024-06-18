<script setup>

import {useRouter} from "vue-router";
const router = useRouter();

</script>

<template>
  <div class="user">
    <header @click="router.push('/login')">
      <div class="pic">
        <img src="@/assets/default-avatar.png" alt="#">
      </div>
      <div class="content">
        <h3>未登录</h3>
        <p>点击账号登录</p>
      </div>
    </header>

    <nav>
      <div class="block">
        <div class="icon"><span>--</span></div>
        <div class="name">账户余额</div>
      </div>

      <div class="block">
        <div class="icon"><span>--</span></div>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: url("@/assets/user-header2.png");
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

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
  color: #545454;

  .icon {
    width: 25px;
    height: 25px;
    text-align: center;
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

    .title{
      margin-left: 10px;
    }
    .service-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 10px;
      .service-item{
        width: 86px;
        margin-top: 24px;
        .icon{
          color: #ff3800;
        }
      }
    }
  }

}
</style>