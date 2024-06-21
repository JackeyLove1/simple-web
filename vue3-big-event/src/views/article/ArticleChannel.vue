<script setup>
import {ref, onMounted, onBeforeMount, nextTick} from "vue";
import PageContainer from "@/components/PageContainer.vue";
import {
  artAddChannelService,
  artDelChannelService,
  artEditChannelService,
  artGetChannelsService
} from "@/api/article.js";
import {Edit, Delete} from '@element-plus/icons-vue'
import ChannelEdit from "@/views/article/components/ChannelEdit.vue";
import {ElMessage, ElMessageBox} from "element-plus";

const channelList = ref([]);
const loading = ref(false);
const dialog = ref(null)
const addDialogVisible = ref(false)
const updateDialogVisible = ref(false)
const defaultFormModel = {
  cate_name: '',
  cate_alias: ''
}
const formRef = ref()
const addFormRef = ref()
const updateFormRef = ref()
const addFormModel = ref({
  ...defaultFormModel
})
const updateFormModel = ref({
  ...defaultFormModel
})

async function getChannelList() {
  loading.value = true
  const res = await artGetChannelsService();
  channelList.value = res.data.data;
  loading.value = false
}

onMounted(async () => {
  await getChannelList()
})

const rules = {
  cate_name: [
    {required: true, message: '请输入分类名称', trigger: 'blur'},
    {
      pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{2,10}$/,
      message: '分类名称必须为2-10位字母、数字、中文',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    {required: true, message: '请输入分类别名', trigger: 'blur'},
    {
      pattern: /^[a-zA-Z0-9]{2,10}$/,
      message: '分类别名必须为2-10位字母、数字',
      trigger: 'blur'
    }
  ]
}


async function handleAddChannel() {
  console.log("handleAddChannel");
  addDialogVisible.value = true
}

async function handleDeleteChannel(row, index) {
  console.log("handleDeleteChannel")
  await ElMessageBox.confirm('你确认要删除该分类么', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })

  await artDelChannelService(row.id)
  ElMessage.success('删除成功')
  await getChannelList()
}

async function handleEditChannel(row, index) {
  console.log(`row: ${row}, index: ${index}`)
  updateDialogVisible.value = true
  await nextTick(() => {
    updateFormModel.value = {
      ...row
    }
  })
}

async function onSuccess() {
  await getChannelList()
}

const handleAddFormModel = async () => {
  await addFormRef.value.validate()
  console.log(addFormRef.value)
  await artAddChannelService({
    ...addFormModel.value
  })
  addDialogVisible.value = false
  ElMessage.success('新增成功')
  await onSuccess()
}

const handleUpdateFormModel = async () => {
  await updateFormRef.value.validate()
  console.log(updateFormRef.value)
  await artEditChannelService({
    ...updateFormModel.value
  })
  updateDialogVisible.value = false
  ElMessage.success('修改成功')
  await onSuccess()
}

</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="handleAddChannel">新增分类</el-button>
    </template>

    <template #body>
      <el-table v-loading="loading" :data="channelList" class="w-full h-full bg-amber-400">
        <el-table-column type="index" label="序号" width="100"></el-table-column>
        <el-table-column prop="cate_name" label="分类名称"></el-table-column>
        <el-table-column prop="cate_alias" label="别名"></el-table-column>
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

  <el-dialog
      title="新增分类"
      v-model="addDialogVisible"
      width="30%"
  >
    <el-form
        ref="addFormRef"
        :model="addFormModel"
        :rules="rules"
        label-width="100px"
        style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="addFormModel.cate_name" placeholder="请输入分类名称"/>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="addFormModel.cate_alias" placeholder="请输入分类别名"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddFormModel">确 定</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog
      title="修改分类"
      v-model="updateDialogVisible"
      width="30%"
  >
    <el-form
        ref="updateFormRef"
        :model="updateFormModel"
        :rules="rules"
        label-width="100px"
        style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="updateFormModel.cate_name" placeholder="请输入分类名称"/>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="updateFormModel.cate_alias" placeholder="请输入分类别名"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="updateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdateFormModel">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>