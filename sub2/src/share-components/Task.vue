<template>
  <div>
    <div>子应用2任务</div>
    <div class="footer">
      <el-button type="primary" @click="$emit('close')">同意</el-button>
      <el-button type="danger" @click="$emit('close')">拒绝</el-button>
    </div>
  </div>
</template>

<style scoped>
.footer {
  text-align: center;
  margin-top: 100px;
}
</style>
