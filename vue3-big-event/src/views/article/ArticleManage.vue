<script setup>
import PageContainer from "@/components/PageContainer.vue";
import {ref, onBeforeMount, watchEffect, watch} from "vue";
import ChannelSelect from "@/views/article/components/ChannelSelect.vue";
import {artGetListService} from "@/api/article.js";
import {Delete, Edit} from '@element-plus/icons-vue'
import {ElMessageBox, ElMessage} from 'element-plus'
import {formatTime} from "@/utils/format.js";

const articleList = ref([])
const total = ref(0)
const loading = ref(false)

const params = ref({
  pagenum: 1,
  pagesize: 10,
  cate_id: '',
  state: '',
})

const getArticleList = async () => {
  loading.value = true
  const res = await artGetListService(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
  console.log("articleList:", articleList.value)
}

onBeforeMount(async () => {
  await getArticleList()
})

async function handleAddArticle() {
  console.log("添加文章")
}

function handleSearch() {
  console.log("搜索")
}

function handleReset() {
  params.value = {
    pagenum: 1,
    pagesize: 10,
    cate_id: '',
    state: '',
  }
}

watch(params, () => {
  console.log("params change: ", params.value)
})

function onEditArticle(row) {
  console.log("edit article: ", row)
}

function onDeleteArticle(row) {
  console.log("delete article: ", row)
}

</script>

<template>
  <page-container title="文章管理">
    <template #extra>
      <el-button type="primary" @click="handleAddArticle">添加文章</el-button>
    </template>
    <template #body>
      <el-form inline>
        <el-form-item label="文章分类">
          <channel-select v-model="params.cate_id"></channel-select>
        </el-form-item>

        <el-form-item label="发布状态: ">
          <el-select
              v-model="params.state"
              style="width: 240px"
              clearable
              placeholder="请选择"
          >
            <el-option label="全部" value="全部"></el-option>
            <el-option label="已发布" value="已发布"></el-option>
            <el-option label="草稿箱" value="草稿箱"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSearch"> 搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格区域 -->
      <el-table :data="articleList" v-loading="loading">
        <el-table-column label="文章标题" prop="title">
          <template #default="{ row }">
            <!--router-link :to="'/article/edit/' + scope.row.id">
              {{ scope.row.title }}
            </router-link-->
            <el-link type="primary" :underline="false">{{ row.title }}</el-link>
          </template>
        </el-table-column>

        <el-table-column label="发表时间" prop="pub_date">
          <template #default="{ row }">
            {{ formatTime(row.pub_date) }}
          </template>
        </el-table-column>

        <el-table-column label="状态" prop="state"></el-table-column>

        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button
                plain
                type="primary"
                :icon="Edit"
                @click="onEditArticle(row)"
            >编辑
            </el-button>
            <el-button
                plain
                type="danger"
                :icon="Delete"
                @click="onDeleteArticle(row)"
            >删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </template>
  </page-container>
</template>

<style scoped>

</style>