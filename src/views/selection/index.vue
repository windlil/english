<script setup lang="ts">
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'

const booksList = reactive([
  {
    id: 0,
    name: 'CET-4',
  },
  {
    id: 1,
    name: 'CET-6',
  },
])
</script>

<template>
  <div class="selection">
    <div class="current-book">
      <Icon icon="tabler:star-filled" />
      <span>
        Currently Focusing:
      </span>
      <span>
        CET-4
      </span>
    </div>
    <div class="books-list">
      <template v-for="book in booksList" :key="book.id">
        <div class="book">
          <div class="img">
            <img src="/img/reading.svg" alt="">
          </div>
          <div class="info">
            <p class="name">
              {{ book.name }}
            </p>
            <div class="progress">
              <div class="pro" />
            </div>
            <div class="progress-data">
              500/1000
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
@keyframes run {
  100% {
    transform: scaleX(0.7);
  }
}
.selection {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .current-book {
    padding: 5px;
    padding-left: 10px;
    background-color: #8872edde;
    color: #fff;
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: bold;
  }

  .books-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-left: 15px;

    .book {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 210px;
      margin-right: 20px;
      border-radius: 10px;
      background-color: var(--bacground-color-book);
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease-in-out;

      .info {
        margin-top: 10px;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .progress {
          position: relative;
          margin: 10px 0;
          width: 130px;
          height: 6px;
          border-radius: 15px;
          overflow: hidden;
          background-color: #c9c9c9;

          .pro {
            position: absolute;
            width: 100%;
            height: 100%;
            transform: scaleX(0);
            transform-origin: left center;
            background-color: #8872ed;
            animation: run 1s forwards;
          }
        }

        .progress-data {
          font-size: 12px;
        }
      }

      .img {
        width: 100px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &:hover {
        box-shadow: 0 0 5px 6px var(--box-shadow-color-book);
      }
    }
  }
}

.selected {
  box-shadow: 0 0 5px 2px #8872eda1;
  box-shadow: 0 0 8px 4px #8872eda1;
}
</style>
