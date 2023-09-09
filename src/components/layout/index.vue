<script setup lang="ts">
import Sider from './sider.vue'
import TopBar from './top-bar.vue'
</script>

<template>
  <div class="layout">
    <Sider />
    <div class="container">
      <TopBar />
      <slot />
    </div>
  </div>
</template>

<style scoped lang="less">
.layout {
  display: flex;
  width: 100%;
  height: 100%;

  .container {
    flex: 1;
  }
}
</style>
