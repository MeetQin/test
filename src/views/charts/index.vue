<template>
  <div class="wrap">
    <EHeader/>
    <EMain />
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import EHeader from './modules/eHeader.vue'
import EMain from './modules/EMain.vue'

onMounted(() => {
  document.title = '数据可视化Demo'
})
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100vh;
  background: url("../../assets/charts/bg.jpg") no-repeat center;
}
</style>