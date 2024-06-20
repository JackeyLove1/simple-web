<script setup>
import {artGetChannelsService} from "@/api/article.js";
import {onBeforeMount, ref} from "vue";

defineProps({
  options: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: [String, Number],
  },
  width: {
    type: String,
    default: '240px'
  }
})
const emit = defineEmits(['update:modelValue'])

const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
}

onBeforeMount(async () => {
  await getChannelList()
})


</script>

<template>
  <el-select
      :modelValue="modelValue"
      @update:modelValue="emit('update:modelValue', $event)"
      clearable
      placeholder="请选择"
      :style="{ width }"
  >
    <el-option
        v-for="item in channelList"
        :key="item.id"
        :label="item.cate_name"
        :value="item.id"
    />
  </el-select>
</template>

<style scoped>

</style>