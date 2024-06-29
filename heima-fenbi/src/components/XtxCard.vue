<script setup lang="ts">
import type {CardItem} from "@/types/global";

defineProps<{ card: CardItem }>()

</script>

<template>
  <view class="card">
    <view class="card-picture">
      <image class="image" :src="card.image" mode="widthFix"></image>
    </view>
    <view class="card-content">
      <text class="title">{{ card.title }}</text>
      <text class="desc">{{ card.desc }}</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.card {
  width: 220rpx;
  height: 120rpx;
  padding-left: 10rpx;
  padding-right: 10rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  border-radius: 10rpx;

  .card-picture {
    display: flex;
    align-items: center;
    justify-content: center;
    .image {
      width: 60rpx;
      height: 60rpx;
    }
  }

  .card-content {
    margin-left: 10rpx;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .title {
      font-size: 25rpx;
      font-weight: 700;
    }

    .desc {
      font-size: 20rpx;
      color: #999;
    }
  }
}
</style>
