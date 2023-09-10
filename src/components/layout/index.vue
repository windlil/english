<script setup lang="ts">
import { ref } from 'vue'
import Sider from './sider.vue'
import TopBar from './top-bar.vue'

const siderRef = ref<InstanceType<typeof Sider>>()

function foldOrOpen(isFold: boolean) {
  if (isFold) {
    siderRef.value?.fold()
  } else {
    siderRef.value?.open()
  }
}
</script>

<template>
  <div class="layout">
    <Sider ref="siderRef" class="sider" />
    <div class="container">
      <TopBar @fold-emit="foldOrOpen" />
      <div class="main">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.layout {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    .main {
      flex: 1;
    }
  }
}
</style>
