<!-- src/components/common/VMarkerInfo.vue -->
<template>
  <div class="marker-info">
    <h4>{{ attraction.title }}</h4>
    <p>{{ attraction.addr1 }} {{ attraction.addr2 }}</p>
    <a :href="attraction.homepage" target="_blank" rel="noopener" v-if="attraction.homepage">홈페이지 방문</a>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  attraction: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.marker-info {
  width: 200px;
}

.marker-info h4 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.marker-info p {
  margin: 5px 0;
  font-size: 14px;
  color: #555;
}

.marker-info a {
  text-decoration: none;
  color: #1e90ff;
  font-size: 14px;
}

.marker-info a:hover {
  text-decoration: underline;
}
</style>
