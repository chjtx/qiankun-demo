<template>
  <div>
    <button @click="to('page1')">页面一</button>
    <button @click="to('page2')">页面二</button>
  </div>
</template>

<script setup>
import { addPrefix } from '../routes.js'
import { useRouter } from 'vue-router'
const router = useRouter()

function to(path) {
  router.push(addPrefix(path))
}
</script>
