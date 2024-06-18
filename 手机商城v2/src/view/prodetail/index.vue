<script setup>

import {useRouter} from "vue-router";
import {ref, computed, onMounted} from "vue";
import {getGoodDetail, getGoodComments} from "@/api/api.js";

const router = useRouter()
const goodId = computed(() => {
  return router.currentRoute.value.params.id
})

console.log("goodId: ", goodId.value)

const detailData = ref({})
const images = ref([])
const commentsList = ref([])
const commentTotal = ref(0)

async function getGoodDetailData() {
  const {data: {detail}} = await getGoodDetail(goodId.value)
  detailData.value = detail
  console.log("detail: ", detailData.value)
  images.value = detail?.goods_images
}

async function getGoodCommentsData() {
  const {data: {list, total}} = await getGoodComments(goodId.value, 10)
  console.log("comment: ", list)
  commentsList.value = list.splice(0, 3)
  commentTotal.value = total
}

onMounted(async () => {
  await getGoodDetailData();
  await getGoodCommentsData();
})

</script>

<template>
  <div class="good-detail">
    <header>
      <van-nav-bar
          title="商品详情"
          left-arrow
          @click-left="router.back()"
          fixed
      />
    </header>

    <main>
      <div class="swipe">
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <img :src="item.external_url" alt="">
          </van-swipe-item>
          <template #indicator="{ active, total }">
            <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
          </template>
        </van-swipe>
      </div>

      <div class="desc">
        <div class="price-sales">
          <div class="price">
            <div class="new"> ￥0.01</div>
            <div class="old"> ￥99.99</div>
          </div>
          <div class="sales">
            已售 522850 件
          </div>
        </div>

        <div class="product-name text-ellipsis-2">
          三星手机 SAMSUNG Galaxy S23 8GB+256GB 超视觉夜拍系统 超清夜景 悠雾紫 5G手机 游戏拍照旗舰机s23
        </div>

        <div class="service">
          <div class="service-left">
            <span><van-icon color="#fa2209" name="passed"/>七天无理由退货</span>
            <span><van-icon color="#fa2209" name="passed"/>48小时发货</span>
          </div>
          <div class="service-right">
            <van-icon name="arrow"/>
          </div>
        </div>

        <div class="comments">
          <div class="comments-title">
            <span>商品评价（11条）</span>
            <div class="more">
              查看更多
              <van-icon name="arrow"/>
            </div>
          </div>

          <div class="comments-list">
            <div class="comments-item" v-for="(item, index) in commentsList" :key="index">
              <div class="comments-user">
                <img :src="item.user?.avatar_url" alt="">
                <div> {{ item.user?.nick_name }}</div>
              </div>
              <div class="comments-item-content text-ellipsis-2">
                {{ item.content }}
              </div>
              <div class="comments-time">
                {{ item.create_time }}
              </div>
            </div>
          </div>
        </div>

        <div class="image-content" v-html="detailData.content"></div>
      </div>
    </main>

    <footer>
      <div class="footer-icon">
        <van-icon name="home-o" size="28"/>
        <span>首页</span>
      </div>
      <div class="footer-icon">
        <van-icon name="shopping-cart-o" size="28"/>
        <span>购物车</span>
      </div>
      <button class="btn shop-btn">加入购物车</button>
      <button class="btn buy-btn">立即购买</button>
    </footer>
  </div>

</template>

<style scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 3px 10px;
  font-size: 16px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.1);
}

.swipe {
  img {
    width: 100%;
    height: 400px;
  }
}

.desc {
  padding: 0 3vw;

  .price-sales {
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;

    .price {
      display: flex;

      .new {
        color: #fa2209;
        font-size: 5.4vw;
      }

      .old {
        color: #959595;
        font-size: 4.3vw;
        text-decoration: line-through;
        margin-left: 1.33333vw;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .sales {
      color: #959595;
      font-size: 4.3vw
    }
  }

  .product-name {
    font-size: 4.26667vw;
    line-height: 6.4vw;
    margin-top: 1.33333vw;
  }

  .service {
    margin-top: 1.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10.66667vw;
    background-color: #f9f9f9;
    font-size: 16px;

    .service-left {
      width: 70%;
      padding: 0 1vw;
      display: flex;
      justify-content: space-between;
    }

  }
}

.van-icon {
  margin-right: 1vw;
}

.comments {
  margin-top: 3vw;
  display: flex;
  flex-direction: column;

  .comments-title {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #303133;

    .more {
      font-size: 14px;
      color: #999;
    }
  }

  .comments-list {

    .comments-item {
      margin-top: 3vw;
      display: flex;
      flex-direction: column;

      .comments-user {
        display: flex;
        align-items: center;

        img {
          width: 5.3vw;
          height: 5.3vw;
          border-radius: 100%;
        }

        div {
          font-size: 4.3vw;
          margin-left: 3vw;
        }
      }

      .comments-item-content {
        font-size: 4.3vw;
        line-height: 10vw;
      }

      .comments-time {
        color: #999;
        font-size: 4.3vw;
        line-height: 8vw;
        margin-top: -1vw;
      }
    }
  }
}

.image-content {
  width: 100%;
  overflow: scroll;

  :deep(img) {
    object-fit: cover;
    width: 100% !important;
  }
}

footer {
  position: fixed;
  width: 100%;
  height: 15vw;
  left: 0;
  bottom: 0;
  z-index: 999;
  background-color: #ffffff;
  display: flex;
  padding: 0 1vw;


  .footer-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    font-size: 14px;
  }

  .btn{
    border: 0;
    width: 60vw;
    height: 10vw;
    margin: auto 3vw auto auto;
    border-radius: 4.8vw;
    background-color: #ffa900;
    text-align: center;
    color: #fff;
    font-size: 3.8vw;
  }
  .buy-btn{
    background-color: #fe5630;
  }
}
</style>