<script setup>
import Layout from './components/Layout.vue'
import { ElConfigProvider } from 'element-plus'

const size = 'small'
const zIndex = 3000
</script>

<template>
  <ElConfigProvider :size="size" :z-index="zIndex">
    <Layout />
  </ElConfigProvider>
</template>
