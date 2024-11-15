// src/api/trip.js
import axios from "@/api/http-common"; // Axios 인스턴스

// 관광지 검색 결과 가져오기
export const getAttractionSearchResults = async (sido, gugun, keyword) => {
  try {
    const response = await axios.get("/areaBasedList", {
      params: {
        contentTypeId: 12, // 관광지 타입 ID
        areaCode: sido, // 시도 코드
        sigunguCode: gugun, // 구군 코드
        keyword: keyword, // 검색어 (옵션)
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
