<script setup>
import Menu from './Menu.vue'
</script>

<template>
  <el-container class="h-full">
    <el-header class="bg-cyan-900 text-white flex items-center">乾坤演示</el-header>
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <el-button type="primary">按钮</el-button>
      </el-main>
    </el-container>
  </el-container>
</template>
