<template>
  <main>
    <ELeft />
    <ECenter />
    <ERight />
  </main>
</template>

<script setup lang="ts">
import ELeft from './ELeft.vue'
import ECenter from './ECenter.vue'
import ERight from './ERight.vue'
</script>

<style scoped lang="less">
main{
  padding: 0.125rem 0.125rem 0.25rem 0.125rem;
  height: calc(100% - 1.25rem);
  display: flex;
  .column{
    flex: 3;

    &:nth-child(2){
      flex: 5;
    }
    &:nth-child(odd){
      display: flex;
      flex-direction: column;
    }
  }
}
</style>