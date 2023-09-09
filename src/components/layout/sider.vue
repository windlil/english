<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import GitHubIcon from '@/components/github-icon/index.vue'

interface SiderBarItem {
  path: string
  name: string
  icon?: any
}

const siderRef = ref()
const router = useRouter()
const route = useRoute()
const currentActiveIndex = ref()

// watch siderbar active
watchEffect(() => {
  switch (route.path) {
    case '/':
      currentActiveIndex.value = 0
      break
    case '/record':
      currentActiveIndex.value = 1
      break
  }
})

const siderBarItem = reactive<SiderBarItem[]>([
  {
    path: '/',
    name: 'Home',
    icon: 'icon-park-solid:brain',
  },
  {
    path: '/record',
    name: 'Record',
    icon: 'icon-park-outline:log',
  },
  {
    path: '/',
    name: 'Chanllenge',
    icon: 'material-symbols:trophy-outline',
  },
])

function toPath(path: string) {
  router.push(path)
}

function fold() {
  siderRef.value.style.display = 'none'
}

defineExpose({
  fold,
})
</script>

<template>
  <div ref="siderRef" class="sider">
    <div class="sider-bar">
      <template v-for="(item, index) in siderBarItem" :key="item.path">
        <div
          class="sider-bar-item"
          :class="{ active: index === currentActiveIndex }"
          @click="toPath(item.path)"
        >
          <div>
            <Icon class="icon" :icon="item.icon" />
          </div>
          <span class="name">
            {{ item.name }}
          </span>
        </div>
      </template>
    </div>
    <GitHubIcon class="github-icon" />
  </div>
</template>

<style scoped lang="less">
.sider {
  position: relative;
  box-sizing: border-box;
  position: relative;
  width: 250px;
  height: 100%;
  padding: 15px;
  border-right: 1px solid var(--border-color-sider);
  user-select: none;

  .sider-bar {
    width: 100%;

    .sider-bar-item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px;
      padding-left: 20px;
      margin: 10px 0;
      border-radius: 15px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      .icon {
        font-size: 24px;
      }

      .name {
        margin-left: 20px;
      }

      &:hover {
      background-color: var(--background-color-sider-bar-item);
      }
    }
  }

  .github-icon {
    position: absolute;
    left: 15px;
    bottom: 5px;
  }
}

.active {
  background-color: var(--background-color-sider-bar-item);
}
</style>
