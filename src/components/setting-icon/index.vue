<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <Icon class="icon" icon="ic:outline-settings" />
  </div>
</template>

<style scoped lang="less">
.icon {
  font-size: 25px;
  color: var(--color-icon-toggle);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
}
</style>
