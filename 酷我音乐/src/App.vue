<script setup>
import {ref} from 'vue'

const searchValue = ref('')


</script>

<template>
  <header class="header">
    <van-nav-bar fixed>
      <template #left>
        <div class="left">
          <img src="./assets/head.png" alt="#">
        </div>
      </template>
      <template #right>
        <div class="btn">
          下载APP
        </div>
      </template>
    </van-nav-bar>

    <div class="search">
      <van-search shape="round" v-model="searchValue" placeholder="请输入搜索关键词"/>
    </div>
  </header>

  <!-- banner -->
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <img src="@/assets/banner01.jpeg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/banner02.jpeg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/banner03.jpeg">
      </van-swipe-item>
    </van-swipe>
  </div>

  <div class="list">
    <div class="title">
      <h4 class="name">
        酷我排行榜
      </h4>
      <a href="#" class="more">
        <span>更多</span>
        <van-icon name="arrow"/>
      </a>
    </div>

    <div class="content">
      <ul>
        <li>
          <div href="#" class="item">
            <div class="pic"><img src="./assets/icon_rank_hot.png" alt=""></div>
            <div class="txt">
              <a href="#" class="item-title">酷我热歌榜<span class="iconfont icon-right"></span></a>
              <a href="#">1.樱花树下的约定（完整版） - 旺仔小乔</a>
              <a href="#">2.就让这大雨全都落下 - 容祖儿</a>
              <a href="#">3.缺氧 - 轩姨（相信光）</a>
            </div>
          </div>
        </li>

        <li>
          <div href="#" class="item">
            <div class="pic"><img src="./assets/icon_rank_rise.png" alt=""></div>
            <div class="txt">
              <a href="#" class="item-title">酷我飙升榜<span class="iconfont icon-right"></span></a>
              <a href="#">1.樱花树下的约定（完整版） - 旺仔小乔</a>
              <a href="#">2.就让这大雨全都落下 - 容祖儿</a>
              <a href="#">3.缺氧 - 轩姨（相信光）</a>
            </div>
          </div>
        </li>

        <li>
          <div href="#" class="item">
            <div class="pic"><img src="./assets/icon_rank_new.png" alt=""></div>
            <div class="txt">
              <a href="#" class="item-title">酷我新歌榜<span class="iconfont icon-right"></span></a>
              <a href="#">1.樱花树下的约定（完整版） - 旺仔小乔</a>
              <a href="#">2.就让这大雨全都落下 - 容祖儿</a>
              <a href="#">3.缺氧 - 轩姨（相信光）</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="recommend">
    <div class="title">
      <h4 class="name">
        推荐歌单
      </h4>
      <a href="#" class="more">
        <span>更多</span>
        <van-icon name="arrow"/>
      </a>
    </div>

    <div class="content">
      <ul>
        <li>
          <a class="item" href="#">
            <div class="pic">
              <img src="./assets/song01.jpeg" alt="">
              <div class="cover">
                <!--van-icon name="play"/-->
                18.2w
              </div>
            </div>
            <div class="txt">
              抖音嗨爆DJ！劲爆旋律萦绕双耳
            </div>
          </a>
        </li>

        <li>
          <a class="item" href="#">
            <div class="pic">
              <img src="./assets/song02.jpeg" alt="">
              <div class="cover">
                <!--van-icon name="play"/-->
                18.2w
              </div>
            </div>
            <div class="txt">
              抖音嗨爆DJ！劲爆旋律萦绕双耳
            </div>
          </a>
        </li>

        <li>
          <a class="item" href="#">
            <div class="pic">
              <img src="./assets/song03.jpeg" alt="">
              <div class="cover">
                <!--van-icon name="play"/-->
                18.2w
              </div>
            </div>
            <div class="txt">
              抖音嗨爆DJ！劲爆旋律萦绕双耳
            </div>
          </a>
        </li>

        <li>
          <a class="item" href="#">
            <div class="pic">
              <img src="./assets/song01.jpeg" alt="">
              <div class="cover">
                <!--van-icon name="play"/-->
                18.2w
              </div>
            </div>
            <div class="txt">
              抖音嗨爆DJ！劲爆旋律萦绕双耳
            </div>
          </a>
        </li>


        <li>
          <a class="item" href="#">
            <div class="pic">
              <img src="./assets/song02.jpeg" alt="">
              <div class="cover">
                <!--van-icon name="play"/-->
                18.2w
              </div>
            </div>
            <div class="txt">
              抖音嗨爆DJ！劲爆旋律萦绕双耳
            </div>
          </a>
        </li>

        <li>
          <a class="item" href="#">
            <div class="pic">
              <img src="./assets/song03.jpeg" alt="">
              <div class="cover">
                <!--van-icon name="play"/-->
                18.2w
              </div>
            </div>
            <div class="txt">
              抖音嗨爆DJ！劲爆旋律萦绕双耳
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="download">
    <img src="@/assets/logo.png" alt="">
    <p>安装酷我音乐 发现更多好音乐</p>
    <span class="iconfont icon-right"></span>
  </div>
</template>