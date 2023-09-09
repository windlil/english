<script setup lang="ts">
import WordCard from '@/components/word-card/index.vue'
import RecordCard from '@/components/record-card/index.vue'
</script>

<template>
  <div class="home">
    <WordCard />
    <RecordCard class="record-card" />
  </div>
</template>

<style scoped lang="less">
.home {
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;

  .record-card {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
</style>
