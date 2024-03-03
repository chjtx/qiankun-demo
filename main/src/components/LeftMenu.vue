<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleSelect(key) {
  router.push(key)
}
</script>

<template>
  <el-menu
    default-active="1"
    class="h-full"
    @select="handleSelect"
  >
    <el-sub-menu index="1">
      <template #title>
        <span>主应用</span>
      </template>
      <el-menu-item index="/main/views/MainOne">普通页面</el-menu-item>
      <el-menu-item index="/main/views/MainTwo">调用子应用组件</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <span>子应用1-主应用管理菜单</span>
      </template>
      <el-menu-item index="/app/sub1/views/Page1">子菜单1-1</el-menu-item>
      <el-menu-item index="/app/sub1/views/Page2">子菜单1-2</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/app/sub2/views/Page1">子应用2-自行管理子菜单</el-menu-item>
  </el-menu>
</template>
