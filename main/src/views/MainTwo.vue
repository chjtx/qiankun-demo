<template>
  <el-table :data="tableData" border>
    <el-table-column prop="name" label="任务名称" />
    <el-table-column prop="typeName" label="任务类型" />
    <el-table-column prop="operation" label="操作">
      <template v-slot="{ row }">
        <el-link type="primary" @click="onClick(row)">处理</el-link>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog
    v-model="dialogVisible"
    title="弹窗展示任务"
  >
    <component :is="dialogComponent" @close="dialogVisible = false"></component>
  </el-dialog>

  <el-drawer
    v-model="drawerVisible"
    title="抽屉展示任务"
  >
    <component :is="drawerComponent" @close="drawerVisible = false"></component>
  </el-drawer>
</template>

<script setup>
import { ref, shallowRef, defineAsyncComponent } from 'vue'
const Task1 = defineAsyncComponent(() => import('sub1/Task.vue'))
const Task2 = defineAsyncComponent(() => import('sub2/Task.vue'))

const dialogVisible = ref(false)
const dialogComponent = shallowRef(null)
const drawerVisible = ref(false)
const drawerComponent = shallowRef(null)

const tableData = [
  {
    name: '调用子应用1的共享组件',
    type: 1,
    typeName: '弹窗'
  },
  {
    name: '调用子应用2的共享组件',
    type: 2,
    typeName: '抽屉'
  },
]

function onClick(row) {
  switch (row.type) {
    case 1:
      dialogVisible.value = true
      dialogComponent.value = Task1
      break
    case 2:
      drawerVisible.value = true
      drawerComponent.value = Task2
      break
  }
}
</script>
