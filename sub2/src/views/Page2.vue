<template>
  <div>
    <Task @close="done"></Task>
  </div>
</template>

<script setup>
import { Task } from '../share-components/index.js'
import { ElMessage } from 'element-plus'

function done() {
  ElMessage.success('已处理')
}
</script>
