<script setup lang="ts">

</script>

<template>
  <div class="overview">
    <div class="left">
      <n-progress
        type="circle"
        :percentage="20"
        color="#7966d1"
        rail-color="var(--rail-color)"
        indicator-text-color="var(--text-color-default)"
        style="width: 140px;"
      />
      <div class="left-info">
        <p>
          CET-4
        </p>
        <p>
          500/2000
        </p>
      </div>
    </div>
    <div class="right">
      1
    </div>
  </div>
</template>

<style scoped lang="less">
.overview {
  display: flex;
  align-items: center;
  width: 100%;
  height: 160px;

  .left {
    display: flex;
  }
}
</style>
