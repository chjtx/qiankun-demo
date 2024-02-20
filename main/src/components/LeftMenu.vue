<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleSelect(key) {
  // TODO:使用push会导致切换微应用菜单也会重载整个微应用
  // router.push(key)
  router.replace(key)
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
      <el-menu-item index="/main/one">菜单1-1</el-menu-item>
      <el-menu-item index="/main/two">菜单1-2</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <span>子应用1</span>
      </template>
      <el-menu-item index="/app/sub1/#page1">子菜单1-1</el-menu-item>
      <el-menu-item index="/app/sub1/#page2">子菜单1-2</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/app/sub2">子应用2</el-menu-item>
  </el-menu>
</template>
