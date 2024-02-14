<script setup>
import MainLayout from './components/MainLayout.vue'
import { ElConfigProvider } from 'element-plus'

const size = 'small'
const zIndex = 3000
</script>

<template>
  <ElConfigProvider :size="size" :z-index="zIndex">
    <MainLayout />
  </ElConfigProvider>
</template>
