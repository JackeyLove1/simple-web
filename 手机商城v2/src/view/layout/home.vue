<script setup>
import {ref, onBeforeMount, onMounted} from 'vue'
import {getHomeData} from "@/api/api";
import GoodsItem from "@/components/GoodsItem.vue";
import {useRouter} from "vue-router";

const bannerList = ref([])
const navList = ref([])
const productList = ref([])
const router = useRouter()

onBeforeMount(async () => {
  const {data: {pageData}} = await getHomeData();
  console.log("page data: ", pageData)
  bannerList.value = pageData.items[1].data
  navList.value = pageData.items[3].data
  productList.value = pageData.items[6].data
})


</script>
<template>
  <div class="home">
    <!-- header -->
    <header>
      <van-nav-bar title="智慧商城" fixed border class="header-bar" safe-area-inset-top/>
    </header>

    <!-- search -->
    <div class="search-bar">
      <van-search
          @clickInput="router.push('/search')"
          background="#f1f1f2"
          shape="round"
          placeholder="搜索你要找的商品"/>
    </div>

    <main>
      <!-- swipe -->
      <div class="home-swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
              v-for="(item, index) in bannerList"
              :key="index"
          >
            <img :src="item.imgUrl" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>

      <van-notice-bar
          left-icon="volume-o"
          background="rgb(82, 82, 82)"
          color="#fff"
          scrollable
          text="智慧商城2.0全新上线，更多新品等你来选~"
      />
    </main>

    <!-- nav -->
    <div class="nav-grid">
      <van-grid square :border="false" :column-num="5" :icon-size="40">
        <van-grid-item
            v-for="(item, index) in navList"
            :key="index"
            :text="item.text"
            :icon="item.imgUrl"
        >
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 主会场 -->
    <div class="main-party">
      <img src="@/assets/main.png" alt="#">
    </div>

    <!-- 猜你喜欢 -->
    <div class="guess">
      <p class="guess-title">
        —— 猜你喜欢 ——
      </p>
    </div>

    <div class="good-items">
      <GoodsItem
          v-for="(item, index) in productList"
          :key="index"
          :good_id="item.goods_id"
          :goods_image="item.goods_image"
          :goods_name="item.goods_name"
          :goods_price_min="item.goods_price_min"
          :goods_price_max="item.line_price_max"
          :goods_sales="item.goods_sales"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}

.van-nav-bar {
  z-index: 999;
  background-color: #c21401;

  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}

.van-search {
  z-index: 999;
  position: fixed;
  top: 46px;
  width: 100%;
}

main {
  width: 100%;
  padding-top: 100px;
}

.home-swipe {
  width: 100%;
  height: 185px;

  img {
    width: 100%;
    height: 185px;
    object-fit: cover;
  }
}

.van-grid {
  :deep(.van-grid-item__text) {
    font-size: 14px;
  }
}

.main-party {
  img {
    height: 118px;
    width: 100%;
  }
}

.guess {
  .guess-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: PingFang-Medium, PingFangSC-Regular, Heiti, Heiti SC, DroidSans, DroidSansFallback, Microsoft YaHei, sans-serif;
    color: #303133;
  }
}

.good-items {
  margin-top: -20px;
}
</style>