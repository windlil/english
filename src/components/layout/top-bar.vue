<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Setting from '../setting-icon/index.vue'
import Toggle from '../toggle/index.vue'

const emits = defineEmits(['foldEmit'])

function fold() {
  emits('foldEmit')
}
</script>

<template>
  <div class="top-bar">
    <div class="fold" @click="fold">
      <Icon class="icon" icon="ant-design:menu-fold-outlined" />
    </div>
    <Setting class="setting" />
    <Toggle />
  </div>
</template>

<style scoped lang="less">
.top-bar {
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 8px;

  .fold {
    position: absolute;
    left: 5px;
    cursor: pointer;

    .icon {
      font-size: 20px;
    }
  }

  .setting {
    margin-right: 10px;
  }
}
</style>
