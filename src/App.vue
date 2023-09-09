<script setup lang="ts">
import Layout from '@/components/layout/index.vue'
</script>

<template>
  <div class="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<style scoped lang="less">
.app {
  position: relative;
  width: 90%;
  height: 92%;
  border-radius: 14px;
  border: 1px solid var(--border-color-app);
  box-shadow: 0 2px 15px var(--box-shadow-color-app);
  background-color: var(--background-color-app);
}
</style>
