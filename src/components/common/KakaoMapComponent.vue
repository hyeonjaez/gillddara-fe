<template>
  <div class="map-wrapper">
    <div v-if="loading" class="spinner">
      <div class="spinner-icon"></div>
      <p>Loading...</p>
    </div>
    <KakaoMap :lat="mapCenter.lat" :lng="mapCenter.lng" width="100%" height="100vh" level="4"
      @onLoadKakaoMap="onLoadKakaoMap">
      <!-- 공공데이터 포털에서 가져온 마커 -->
      <template v-for="attraction in attractionSearchResults" :key="attraction.contentId">
        <KakaoMapMarker :lat="parseFloat(attraction.mapy)" :lng="parseFloat(attraction.mapx)" :clickable="true"
          @click="markerToggle(attraction)">
          <template v-slot:infoWindow v-if="toggledAttraction === attraction.contentId">
            <VMarkerInfo :attraction="attraction" />
          </template>
        </KakaoMapMarker>
      </template>
    </KakaoMap>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import { useTripStore } from "@/stores/trip";
import VMarkerInfo from "@/components/common/VMarkerInfo.vue"; // 정확한 경로 및 파일명 확인
import { storeToRefs } from 'pinia'; // storeToRefs 임포트

const tripStore = useTripStore();

// storeToRefs를 사용하여 상태를 참조
const { mapCenter, loading, attractionSearchResults, toggledAttraction } = storeToRefs(tripStore);

const onLoadKakaoMap = (mapRef) => {
  tripStore.setCenter(mapCenter.value.lat, mapCenter.value.lng);
};

const markerToggle = (attraction) => {
  tripStore.markerToggle(attraction);
};

// 컴포넌트가 마운트될 때 관광지 데이터를 가져옵니다.
onMounted(() => {
  tripStore.fetchAttractions();
});
</script>

<style scoped>
.map-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}

.spinner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.8);
  z-index: 1000;
}

.spinner-icon {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin-bottom: 20px;
}

.spinner p {
  font-size: 18px;
  color: #555;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .map-wrapper {
    height: 500px;
  }

  .spinner {
    height: 500px;
  }
}

@media (max-width: 480px) {
  .map-wrapper {
    height: 300px;
  }

  .spinner {
    height: 300px;
  }
}
</style>
