<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { reactive } from 'vue'
import Overview from './components/overview/index.vue'

const topList = reactive([
  {
    title: 'Words',
    data: '55',
    icon: 'icon-park-outline:english',
    iconColor: '#7966d1',
  },
  {
    title: 'Spend Time',
    data: '30min',
    icon: 'ic:baseline-access-time',
    iconColor: '#66d1cf',
  },
  {
    title: 'Average time',
    data: '25s/1',
    icon: 'ph:chart-line',
    iconColor: '#d166c3',
  },
  {
    title: 'Current Book',
    data: 'CET-4',
    icon: 'ion:book-sharp',
    iconColor: '#7966d1',
  },
])
</script>

<template>
  <div class="record">
    <div class="title">
      TODAY
    </div>
    <div class="top">
      <div v-for="item in topList" :key="item.data" class="top-box">
        <div class="icon-container">
          <Icon class="icon" :style="{ color: item.iconColor }" :icon="item.icon" />
        </div>
        <div class="box-info">
          <div class="info-title">
            {{ item.title }}
          </div>
          <div class="info-data">
            {{ item.data }}
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      OVERVIEW
    </div>
    <div class="overview">
      <Overview />
    </div>
  </div>
</template>

<style scoped lang="less">
.record {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  user-select: none;

  .title {
    padding-left: 20px;
    font-weight: bold;
  }

  .top {
    display: flex;
    width: 100%;
    height: 160px;
    margin-top: 20px;
    margin-bottom: 40px;
    padding-left: 20px;

    .top-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      border-radius: 15px;
      background-color: var(--background-color-box);

      .icon-container {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;

        .icon {
          width: 30px;
          height: 30px;
        }
      }

      .box-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        .info-title {
          margin: 5px 0;
          color: rgb(128, 128, 128);
          font-size: 12px;
        }
        .info-data {
          font-size: 22px;
        }
      }
    }
  }

  .overview {
    padding: 10px;
  }
}
</style>
