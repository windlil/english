<script setup lang="ts">
import Setting from '../setting-icon/index.vue'
import Toggle from '../toggle/index.vue'
</script>

<template>
  <div class="top-bar">
    <Setting class="setting" />
    <Toggle />
  </div>
</template>

<style scoped lang="less">
.top-bar {
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 8px;

  .setting {
    margin-right: 10px;
  }
}
</style>
