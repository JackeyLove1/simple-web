<script setup lang="ts">
import {onLoad} from "@dcloudio/uni-app";
import {ref, onMounted} from 'vue'
import type {GuessItem} from "@/types/home";
import {getHomeGoodsGuessLikeAPI} from "@/services/home";
import type {PageParams} from "@/types/global";

const guessLikeList = ref<GuessItem[]>([])
const finish = ref<boolean>(false)
const pageParam: Required<PageParams> = {
  page: 1,
  pageSize: 10
}

const getHomeGoodsGuessLikeData = async () => {
  if(finish.value){
    uni.showToast({
      title: '没有更多数据了',
      icon: 'none'
    })
    return
  }
  const res = await getHomeGoodsGuessLikeAPI()
  guessLikeList.value.push(...res.result.items)
  if(pageParam.page <= res.result.pages){
    pageParam.page++
  } else {
    finish.value = true
  }
  console.log("pageParam: ", pageParam.page)
  console.log("getHomeGoodsGuessLikeData: ", res)
}

const resetGuessPageData = () => {
  guessLikeList.value = []
  pageParam.page = 1
  finish.value = false
}

onMounted(async () => {
  await getHomeGoodsGuessLikeData()
})

defineExpose({
  getMore: getHomeGoodsGuessLikeData,
  resetGuessPageData,
})

</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessLikeList"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image
        class="image"
        mode="aspectFill"
        :src="item.picture"
      ></image>
      <view class="name"> {{item.name}} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{item.price}}</text>
      </view>
    </navigator>
  </view>
  <view class="footer">
    <van-loading class="loading-text" v-if="!finish" size="24px">加载中...</van-loading>
    <view class="loading-text" v-else>
      没有更多数据啦~
    </view>
  </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
  .loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
  }
}
</style>
