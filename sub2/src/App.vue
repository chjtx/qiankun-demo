<template>
  <div>
    <NavBar></NavBar>
    <router-view class="wrap"></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.wrap {
  padding: 20px 0;
}
</style>
