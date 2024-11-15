<!-- src/views/TravelInfo.vue -->
<template>
  <div class="travel-info-page">
    <KakaoMapComponent />
  </div>
</template>

<script setup>
import KakaoMapComponent from "@/components/common/KakaoMapComponent.vue";
</script>

<style scoped>
.travel-info-page {
  padding-top: 80px;
  /* 고정 헤더 높이만큼 패딩 추가 */
}
</style>
