<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    router
  >
    <el-menu-item :index="addRoutePrefix('Page1')">页面一</el-menu-item>
    <el-menu-item :index="addRoutePrefix('Page2')">页面二</el-menu-item>
  </el-menu>
</template>

<script setup>
import { addRoutePrefix } from '../utils.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeIndex = computed(() => route.path)
</script>
