<script setup>
import { useRoute } from 'vue-router'
import LeftMenu from './LeftMenu.vue'

const route = useRoute()
</script>

<template>
  <el-container class="h-full">
    <el-header class="bg-cyan-900 text-white flex items-center">乾坤演示</el-header>
    <el-container>
      <el-aside>
        <LeftMenu></LeftMenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <div id="container" ></div>
      </el-main>
    </el-container>
  </el-container>
</template>
