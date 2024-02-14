<script setup>
import LeftMenu from './LeftMenu.vue'
</script>

<template>
  <el-container class="h-full">
    <el-header class="bg-cyan-900 text-white flex items-center">乾坤演示</el-header>
    <el-container>
      <el-aside width="200px">
        <LeftMenu></LeftMenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
