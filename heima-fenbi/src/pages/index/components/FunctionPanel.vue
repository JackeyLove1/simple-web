<script setup lang="ts">
import type {FunctionItem} from "@/types/category";
import {ref} from 'vue'
import type {CardItem} from "@/types/global";

const onClick = () => {
  console.log('click')
}

const functionList = ref<CardItem[]>([
  {
    title: '错题复习',
    desc: '温故知新',
    image: '/static/images/wrong_question.svg',
  },
  {
    title: '我的收藏',
    desc: '分类整理',
    image: '/static/images/my_favorite.svg',
  },
  {
    title: '个人笔记',
    desc: '重点回顾',
    image: '/static/images/my_note.svg',
  }
])

</script>

<template>
  <view class="container">
   <XtxCard
     v-for="(item, index) in functionList"
     :key="index"
     :card="item"
     @click="onClick"/>
  </view>
</template>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 140rpx;
  padding-top: 15rpx;
  padding-bottom: 15rpx;
}
</style>
