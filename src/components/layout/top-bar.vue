<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import Setting from '../setting-icon/index.vue'
import Toggle from '../toggle/index.vue'

const emits = defineEmits(['foldEmit'])
const route = useRoute()
const isFold = ref(false)

function foldOrOpen() {
  emits('foldEmit', !isFold.value)
  isFold.value = !isFold.value
}
</script>

<template>
  <div class="top-bar">
    <div class="left">
      <div v-if="route.path === '/'" class="fold" @click="foldOrOpen">
        <Icon v-if="!isFold" class="icon" icon="ant-design:menu-fold-outlined" />
        <Icon v-else class="icon" icon="ant-design:menu-unfold-outlined" />
      </div>
    </div>
    <div class="right">
      <Setting class="setting" />
      <Toggle />
    </div>
  </div>
</template>

<style scoped lang="less">
.top-bar {
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 8px;

  .left {
    display: flex;
    .fold {
      cursor: pointer;

      .icon {
        font-size: 20px;
        color: var(--color-icon-toggle);
      }
    }

    .selection {
      margin-left: 20px;
    }
  }

  .right {
    display: flex;
    .setting {
      margin-right: 10px;
    }
  }
}
</style>
