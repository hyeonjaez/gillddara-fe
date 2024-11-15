import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { useKakao } from "vue3-kakao-maps/@utils";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
const kakaoKey = import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY;
useKakao(kakaoKey);

app.mount("#app");
