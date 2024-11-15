import { ref } from "vue";
import { defineStore } from "pinia";
import { getAttractionSearchResults } from "@/api/trip"; // API 호출 함수
import axios from "@/api/http-common"; // Axios 인스턴스

export const useTripStore = defineStore("tripStore", () => {
  // 상태 관리
  const sido = ref("");
  const gugun = ref("");
  const keyword = ref("");
  const attractionSearchResults = ref([]);
  const toggledAttraction = ref("");
  const mapCenter = ref({
    lat: 37.5664056,
    lng: 126.9778222,
  });
  const loading = ref(false); // 로딩 상태

  // 관광지 데이터 가져오기
  const fetchAttractions = async () => {
    if (!sido.value || !gugun.value) {
      alert("시도와 구군을 선택해주세요.");
      return;
    }

    loading.value = true;

    try {
      const response = await getAttractionSearchResults(
        sido.value,
        gugun.value,
        keyword.value
      );
      console.log("API Response:", response.data); // 응답 데이터 확인

      const items = response.data.response?.body?.items?.item;

      if (Array.isArray(items)) {
        attractionSearchResults.value = items.map((item) => ({
          ...item,
          showInfo: false, // InfoWindow 표시 여부 초기화
        }));
      } else if (items) {
        attractionSearchResults.value = [
          {
            ...items,
            showInfo: false,
          },
        ];
      } else {
        attractionSearchResults.value = [];
      }

      if (attractionSearchResults.value.length > 0) {
        setCenter(
          parseFloat(attractionSearchResults.value[0].mapy),
          parseFloat(attractionSearchResults.value[0].mapx)
        );
      }

      console.log("Attractions:", attractionSearchResults.value); // 업데이트된 attractions 확인
    } catch (error) {
      console.error(
        "공공데이터 포털에서 관광지 정보를 가져오는 데 실패했습니다.",
        error
      );
      alert("관광지 정보를 가져오는 데 실패했습니다. 다시 시도해주세요.");
    } finally {
      loading.value = false;
    }
  };

  // 지도 중심 설정
  const setCenter = (lat, lng) => {
    mapCenter.value.lat = lat;
    mapCenter.value.lng = lng;
  };

  // 마커 토글 함수
  const markerToggle = (attraction) => {
    toggledAttraction.value =
      toggledAttraction.value === attraction.contentId
        ? ""
        : attraction.contentId;
    setCenter(parseFloat(attraction.mapy), parseFloat(attraction.mapx));
  };

  return {
    sido,
    gugun,
    keyword,
    attractionSearchResults,
    toggledAttraction,
    mapCenter,
    loading,
    fetchAttractions,
    setCenter,
    markerToggle,
  };
});
