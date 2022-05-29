<template>
  <header>
    <h1>数据可视化Demo</h1>
    <div class="time"></div>
  </header>
</template>

<script setup lang="ts">
import {formatTime} from '@/utils/time'
import {onMounted} from "vue";

const getTimeMsg = () => {
  const element: HTMLElement = document.querySelector('.time') as HTMLElement
  formatTime(element)
}
onMounted(() => {
  getTimeMsg()
})

</script>

<style scoped lang="less">
header {
  background: url("../../../assets/charts/head_bg.png") 100% 100%;
  height: 1.25rem;
  color: #fff;
  line-height: 1rem;
  position: relative;

  h1 {
    text-align: center;
    font-size: 0.475rem;
  }

  .time {
    position: absolute;
    right: 0.4375rem;
    top: 0;
    font-size: 0.25rem;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>