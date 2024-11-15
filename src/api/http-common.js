// src/api/http-common.js
import axios from "axios";

const { VITE_API_URL, VITE_PUBLIC_DATA_API_KEY } = import.meta.env;

// 서비스 키 URL 인코딩 (한 번만 인코딩)
const encodedServiceKey = encodeURIComponent(VITE_PUBLIC_DATA_API_KEY);

const axiosInstance = axios.create({
  baseURL: "/B551011/KorService1", // 프록시 경로로 설정
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 요청 인터셉터를 통해 기본 파라미터 추가
axiosInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      serviceKey: encodedServiceKey, // 인코딩된 서비스 키 사용
      numOfRows: 10, // 필요에 따라 조정
      pageNo: 1,
      MobileOS: "ETC",
      MobileApp: "AppTest",
      _type: "json", // 응답 형식 지정
      arrange: "A", // 정렬 기준 (필요 시 조정)
      // 기타 필요한 파라미터 추가
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance; // default export 사용
