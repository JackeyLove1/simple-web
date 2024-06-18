<script setup>
import {useRouter} from "vue-router";
import {computed, onBeforeMount, onMounted, ref} from 'vue'
import {getCategoryData} from "@/api/api.js";

const active = ref(0)
const activeIndex = ref(0)

const router = useRouter()

const categoryList = ref([])

onMounted(async () => {
  const {data: {list}} = await getCategoryData()
  console.log("list: ", list)
  categoryList.value = list
})

const navList = computed(() => {
  return categoryList.value[activeIndex.value]?.children
})

</script>

<template>
  <div class="cart">
    <header>
      <van-nav-bar title="全部分类" fixed border class="header-bar" safe-area-inset-top/>
    </header>

    <!-- search -->
    <div class="search-bar">
      <van-search
          @clickInput="router.push('/search')"
          background="#fff"
          shape="round"
          placeholder="搜索你要找的商品"/>
    </div>

    <main>
      <div class="left">
        <ul>
          <li
              v-for="(item, index) in categoryList"
              :key="index"
              @click="activeIndex = index"
              :class="{active: activeIndex === index}"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="right">
        <van-grid square :border="false" :column-num="3" :icon-size="60">
          <van-grid-item
              v-for="(item, index) in navList"
              :key="index"
              :text="item.name"
              :icon="item.image?.external_url"
              @click="router.push(`/searchlist?categoryId=${item.category_id}`)"
          >
          </van-grid-item>
        </van-grid>
      </div>
    </main>
  </div>
</template>

<style scoped lang="less">
.van-search {
  z-index: 999;
  position: fixed;
  top: 46px;
  width: 100%;
}

main {
  width: 100%;
  padding-top: 100px;

  display: flex;
  flex-direction: row;

  .left {
    width: 96px;
    height: 100%;

    ul {
      margin-top: 0;

      li {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 3px;
        padding-bottom: 3px;
        background-color: #F7F7F7;
      }
    }

    .active {
      color: #ee0a24;
      background-color: #fff;
    }
  }

  .right {
    flex: 1;
    height: 100%;
  }
}


</style>