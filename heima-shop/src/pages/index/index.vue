<script setup lang="ts">

import CustomNavbar from "@/pages/index/components/CustomNavbar.vue";
import {onLoad} from '@dcloudio/uni-app'
import {getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI} from "@/services/home";
import {ref} from "vue";
import type {BannerItem, CategoryItem, HotItem} from "@/types/home";
import CategoryPanel from "@/pages/index/components/CategoryPanel.vue";
import HotPanel from "@/pages/index/components/HotPanel.vue";
import XtxGuess from "@/components/XtxGuess.vue";
import type {XtxGuessInstance} from "@/components/components";
import PageSkeleton from "@/pages/index/PageSkeleton.vue";

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
  console.log("bannerList: ", bannerList)
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
  console.log("categoryList: ", categoryList.value)
}

const hoList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hoList.value = res.result
  console.log("hoList: ", hoList)
}

const guessLikeRef = ref<XtxGuessInstance>()

const getHomePageData = async () => {
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData()
  ])
}

const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await getHomePageData()
  isLoading.value = false
})

const isTriggered = ref(false)
const onRefreshTriggered = async () => {
  isTriggered.value = true
  isLoading.value = true
  await getHomePageData()
  guessLikeRef.value?.resetGuessPageData()
  isLoading.value = false
  isTriggered.value = false
}

const onScrollToLower = async () => {
  console.log("guessRef: ", guessLikeRef.value)
  await guessLikeRef.value?.getMore()
}

</script>

<template>
  <!-- 顶部导航栏 -->
  <CustomNavbar/>

  <scroll-view
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefreshTriggered"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading"/>
    <template v-else>
      <!-- 轮播图组件 -->
      <XtxSwiper :list="bannerList"/>

      <!-- 首页分类组件 -->
      <CategoryPanel :list="categoryList"/>

      <!-- 推荐导航栏 -->
      <HotPanel :list="hoList"/>

      <!-- 猜你喜欢 -->
      <scroll-view
        enable-back-to-top
        @scrolltolower="onScrollToLower"
        class="scroll-view"
        scroll-y
      >
        <XtxGuess ref="guessLikeRef"/>
      </scroll-view>
    </template>

  </scroll-view>

</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;

  .scroll-view {
    flex: 1;
  }
}
</style>
