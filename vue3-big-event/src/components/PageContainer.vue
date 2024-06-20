<script setup>
defineProps({
  title: {
    type: String,
    default: '标题',
    required: true,
  }
})

</script>

<template>
  <el-card class="w-full h-full page-container">
    <template #header>
      <div class="card-header flex justify-between items-center">
        <span>{{ title }}</span>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </template>
    <slot name="body"></slot>
  </el-card>
</template>

<style scoped>

</style>