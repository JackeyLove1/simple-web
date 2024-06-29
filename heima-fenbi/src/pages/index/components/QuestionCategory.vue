<script setup lang="ts">
import {ref} from 'vue'
import type {PracticeItem} from "@/types/global";

const firstPracticeList = ref<PracticeItem[]>([
  {
    title: '言语理解与表达',
    number: '5841',
    desc: '0',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
  },
  {
    title: '数量关系',
    number: '2476',
    desc: '0',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
  },
  {
    title: '判断推理',
    number: '6569',
    desc: '0',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
  },
  {
    title: '资料分析',
    number: '3434',
    desc: '0',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
  },
  {
    title: '常识判断',
    number: '3450',
    desc: '0',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
  }
])


const secondPracticeList = ref<PracticeItem[]>([
  {
    title: '摘抄',
    number: '908',
    desc: '0',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
  },
  {
    title: '归纳',
    number: '626',
    desc: '0',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
  },
  {
    title: '分析推导',
    number: '107',
    desc: '0',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
  }
])
const avatarList = ref([{
  url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
}])

</script>

<template>
  <view class="title">
    <text class="text">行测</text>
  </view>
  <uni-list
    v-for="(item, index) in firstPracticeList"
    :key="index"
    :border="true"
  >
    <!-- 自定义右侧内容 -->
    <uni-list-chat :title="item.title"
                   :note="item.number"
                   :show-badge="false"
    >
      <view class="chat-custom-right">
        <text class="chat-custom-text">已完成：{{item.desc}}</text>
        <uni-icons type="right" color="#999" size="18"></uni-icons>
      </view>
    </uni-list-chat>
  </uni-list>

  <view class="title">
    <text class="text">申论</text>
  </view>
  <uni-list
    v-for="(item, index) in secondPracticeList"
    :key="index"
    :border="true"
  >
    <!-- 自定义右侧内容 -->
    <uni-list-chat :title="item.title"
                   :note="item.number"
                   :show-badge="false"
    >
      <view class="chat-custom-right">
        <text class="chat-custom-text">已完成：{{item.desc}}</text>
        <uni-icons type="right" color="#999" size="18"></uni-icons>
      </view>
    </uni-list-chat>
  </uni-list>
</template>

<style scoped lang="scss">
.title {
  padding-left: 15rpx;
  padding-top: 10rpx;
  padding-bottom: 10rpx;

  .text {
    font-weight: 700;
  }
}

.chat-custom-right {
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.chat-custom-text {
  font-size: 12px;
  color: #999;
}

</style>
