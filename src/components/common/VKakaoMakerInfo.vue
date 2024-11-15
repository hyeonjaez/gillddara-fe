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
  width: 220px;
  padding: 10px;
}

.marker-info h4 {
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
}

.marker-info p {
  margin: 5px 0;
  font-size: 14px;
  color: #7f8c8d;
}

.marker-info a {
  text-decoration: none;
  color: #2980b9;
  font-size: 14px;
}

.marker-info a:hover {
  text-decoration: underline;
}
</style>
