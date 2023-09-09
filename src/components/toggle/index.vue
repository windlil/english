<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import useStorage from '@/utils/storage'

const htmlEl = document.documentElement
const toggleRef = ref()

const isDark = ref(useStorage.get('isDark') ?? true)

function initTheme() {
  if (isDark.value) {
    htmlEl.setAttribute('data-theme', 'dark')
  } else {
    htmlEl.removeAttribute('data-theme')
  }
  useStorage.set('isDark', isDark.value)
}

onMounted(() => {
  initTheme()
  toggleRef.value.addEventListener('click', () => {
    const dataTheme = htmlEl.getAttribute('data-theme')
    if (dataTheme) {
      htmlEl.removeAttribute('data-theme')
    } else {
      htmlEl.setAttribute('data-theme', 'dark')
    }
    isDark.value = !isDark.value
    useStorage.set('isDark', isDark.value)
  })
})
</script>

<template>
  <div ref="toggleRef" class="toggle">
    <Icon v-if="isDark" class="toggleIcon" icon="eva:sun-outline" />
    <Icon v-else class="toggleIcon" icon="eva:moon-outline" />
  </div>
</template>

<style scoped lang="less">
.toggleIcon {
  font-size: 25px;
  color: var(--color-icon-toggle);
  cursor: pointer;
}
</style>
