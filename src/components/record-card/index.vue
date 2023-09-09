<script setup lang="ts">

</script>

<template>
  <div class="record-card">
    <div class="card-item">
      <span class="span1">
        Konw:
      </span>
      <span class="span2">
        50
      </span>
    </div>
    <div class="card-item">
      <span class="span1">
        Unknow:
      </span>
      <span class="span2">
        5
      </span>
    </div>
    <div class="card-item">
      <span class="span1">
        Spent:
      </span>
      <span class="span2">
        50min
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.record-card {
  display: flex;
  justify-content: center;
  padding: 0 20px;
  font-size: 12px;
  background-color: var(--background-color-record-card);
  border-radius: 20px;
  user-select: none;

  .card-item {
    margin: 10px;

    .span1 {
      color: var(--color-record-span);
    }

    .span2 {
      margin-left: 4px;
      color: var(--color-record-span);
    }
  }
}
</style>
