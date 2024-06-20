<script setup>
import {ref, watch} from "vue";
import {artAddChannelService, artEditChannelService} from "@/api/article.js";
import {ElMessage} from "element-plus";

const dialogVisible = ref(false);
const formRef = ref()
const formModel = ref({
  cate_name: '',
  cate_alias: '',
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

const emit = defineEmits(['success'])
const handleSubmit = async () => {
  await formRef.value.validate()
  const isEdit = formModel.value.id
  if (isEdit) {
    await artEditChannelService()
    ElMessage.success('修改成功')
  } else {
    await artAddChannelService()
    ElMessage.success('新增成功')
  }
  dialogVisible.value = false
  emit('success')
}

const open = (row) => {
  dialogVisible.value = true
  formModel.value = {...row}
}

defineExpose({
  open
})

</script>

<template>
  <el-dialog
      :title="formModel.id ? '编辑分类' : '添加分类'"
      v-model="dialogVisible"
      width="30%"
  >
    <el-form
        ref="formRef"
        :model="formModel"
        :rules="rules"
        label-width="100px"
        style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="formModel.cate_name" placeholder="请输入分类名称"/>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="formModel.cate_alias" placeholder="请输入分类别名"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>