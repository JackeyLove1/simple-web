<script setup>
import {ref, onMounted, onBeforeMount} from "vue";
import PageContainer from "@/components/PageContainer.vue";
import {artGetChannelsService} from "@/api/article.js";
import {Edit, Delete} from '@element-plus/icons-vue'
import ChannelEdit from "@/views/article/components/ChannelEdit.vue";

const channelList = ref([]);
const loading = ref(false);
const dialog = ref()

async function getChannelList() {
  loading.value = true
  const res = await artGetChannelsService();
  channelList.value = res.data.data;
  loading.value = false
}

onMounted(async () => {
  await getChannelList()
})

async function handleAddChannel() {
  console.log("handleAddChannel");
  console.log(dialog.value)
  dialog.value.open({})
}

async function handleDeleteChannel(row, index) {
  console.log("handleDeleteChannel")
}

async function handleEditChannel(row, index) {
  console.log(`row: ${row}, index: ${index}`)
  dialog.value.open(row)
}

async function onSuccess() {
  await getChannelList()
}


</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="handleAddChannel">新增分类</el-button>
    </template>

    <template #body>
      <el-table :data="channelList" class="w-full h-full bg-amber-400">
        <el-table-column type="index" label="序号" width="100"></el-table-column>
        <el-table-column prop="cate_name" label="分类名称"></el-table-column>
        <el-table-column prop="cate_alias" label="别名"></el-table-column>
        "
        <el-table-column label="操作" width="200">
          <template #default="{ row, $index }">
            <el-button
                :icon="Edit"
                plain
                type="primary"
                @click="handleEditChannel(row, $index)"
            >编辑
            </el-button>
            <el-button
                :icon="Delete"
                plain
                type="danger"
                @click="handleDeleteChannel(row, $index)"
            >删除
            </el-button>
          </template>
        </el-table-column>

        <template #empty>
          <el-empty description="暂无数据"></el-empty>
        </template>
      </el-table>
    </template>

    <channel-edit ref="dialog" @success="onSuccess"/>
  </page-container>
</template>

<style scoped>

</style>