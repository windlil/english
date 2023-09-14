<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const isShowCn = ref('')

function showCn() {
  isShowCn.value = 'isShow'
}
</script>

<template>
  <div class="word-card">
    <div class="pre controlsIcon">
      <Icon class="icon" icon="bxs:left-arrow" />
    </div>
    <div class="word-detail">
      <div class="word">
        <p class="en">
          cancel
        </p>
        <p class="listen">
          <Icon class="icon" icon="wpf:speaker" />
          <span class="symbols">
            [kænsl]
          </span>
        </p>
        <div class="cn-container">
          <p :class="isShowCn" class="cn">
            取消， 撤销； 删去
          </p>
        </div>
      </div>
      <div class="btn-group">
        <div class="btn primary">
          Konw
        </div>
        <div class="btn danger" @click="showCn">
          Unkonw
        </div>
      </div>
    </div>
    <div class="next controlsIcon">
      <Icon class="icon" icon="bxs:right-arrow" />
    </div>
  </div>
</template>

<style scoped lang="less">
@keyframes run {
  to {
    opacity: 1;
  }
}
.word-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  opacity: 0;
  animation: run 0.4s ease-out forwards;

  .icon {
    font-size: 35px;
    cursor: pointer;
  }

  .word-detail {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    height: 80%;

    .word {
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .en {
        font-size: 45px;
        margin-bottom: 15px;
      }

      .listen {
        display: flex;
        align-items: center;

        .icon {
          font-size: 20px;
          color: #8872ed;
        }

        .symbols {
          margin-left: 12px;
          font-size: 18px;
          color: #696969;
        }
      }

      .cn-container {
        margin-top: 40px;
        flex: 1;

        .cn {
          font-size: 20px;
          opacity: 0;
          transition: all 0.2s ease-in-out;
          color: #919191;
        }
      }
    }

    .btn-group {
      display: flex;
      justify-content: space-between;
      width: 220px;
      margin-top: 40px;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        color: #fff;
        cursor: pointer;
        transition: all 0.1s ease-in-out;

        &.danger {
          background-color: #525252;

          &:hover {
            background-color: #525252d7;
          }

          &:active {
            background-color: #525252ac;
          }
        }

        &.primary {
          background-color: #8872ed;

          &:hover {
            background-color: #7360c8;
          }

          &:active {
            background-color: #6351b3;
          }
        }
      }
    }
  }
}

.isShow {
  opacity: 1 !important;
}

.controlsIcon {
  &:hover {
    color: #656565 !important;
  }
}
</style>
