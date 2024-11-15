<!-- src/components/common/KakaoMapComponent.vue -->
<template>
  <div id="map"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Axios } from "@/api/http-common";

const map = ref(null);
const markers = ref([]);
const attractions = ref([]); // 공공데이터 포털에서 가져온 관광지 데이터

const fetchAttractions = async () => {
  try {
    // 공공데이터 포털 API 호출 (실제 엔드포인트로 변경 필요)
    const response = await Axios().get('/public-data/attractions'); // 예시 엔드포인트
    attractions.value = response.data.attractions; // 데이터 구조에 맞게 수정
    addMarkers();
  } catch (error) {
    console.error("공공데이터 포털에서 관광지 정보를 가져오는 데 실패했습니다.", error);
  }
};

const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(37.5665, 126.9780), // 기본 위치 (서울)
    level: 5,
  };
  map.value = new kakao.maps.Map(container, options);
};

const addMarkers = () => {
  markers.value = [];
  attractions.value.forEach((attraction, index) => {
    const position = new kakao.maps.LatLng(attraction.latitude, attraction.longitude);
    const marker = new kakao.maps.Marker({
      map: map.value,
      position: position,
      title: attraction.name,
    });

    // InfoWindow 콘텐츠 설정
    const iwContent = `
      <div style="padding:5px;">
        <h4>${attraction.name}</h4>
        <p>${attraction.address}</p>
      </div>
    `;

    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map.value, marker);
    });

    markers.value.push(marker);
  });

  // 모든 마커를 포함하도록 지도 범위 조정
  const bounds = new kakao.maps.LatLngBounds();
  attractions.value.forEach((attraction) => {
    const latlng = new kakao.maps.LatLng(attraction.latitude, attraction.longitude);
    bounds.extend(latlng);
  });
  map.value.setBounds(bounds);
};

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap();
    fetchAttractions();
  } else {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY
      }&libraries=services,clusterer`;
    /* global kakao */
    script.onload = () => kakao.maps.load(() => {
      initMap();
      fetchAttractions();
    });
    document.head.appendChild(script);
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 700px;
}
</style>
