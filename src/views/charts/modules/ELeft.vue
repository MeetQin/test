<template>
  <div class="column">
    <Charts :title="'这是一个title'"/>
    <Charts />
    <Charts />
  </div>
</template>

<script setup lang="ts">
import Charts from '@/components/Charts.vue'
</script>

<style scoped lang="less">
</style>