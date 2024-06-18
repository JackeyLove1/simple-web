<script setup>
import {computed} from "vue";

const props = defineProps(
    {
      good_id: [String, Number],
      goods_image: String,
      goods_name: String,
      goods_sales: [String, Number],
      goods_price_min: [String, Number],
      goods_price_max: [String, Number],
    }
)

const desc = computed(() => {
  return `已售${props.goods_sales}件`
})

</script>

<template>

  <van-card
      :price="goods_price_min"
      :origin-price="goods_price_max"
      :title="goods_name"
      :thumb="goods_image"
      :desc="desc"
  />

</template>

<style scoped lang="less">
.van-card {
  :deep(.van-card__thumb) {
    width: 120px;
    height: 120px;
  }

  :deep(.van-card__title) {
    font-size: 13px;
    line-height: 1.3;
    color: #484848;
    font-weight: 400;
  }

  :deep(.van-card__desc) {
    margin-top: 5px;
    font-size: 14px;
    color: #999;
  }

  :deep(.van-card__price),
  :deep(.van-card__price-currency),
  :deep(.van-card__price-integer),
  :deep(.van-card__price-integer),
  :deep(.van-card__price-decimal) {
    font-size: 18px;
    color: #f03c3c;
  }

  :deep(.van-card__origin-price) {
    font-size: 12px;
  }
}
</style>