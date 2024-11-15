// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import UserLogin from "@/components/user/UserLogin.vue";
import UserSignUp from "@/components/user/UserSignUp.vue";
import UserFindPassword from "@/components/user/UserFindPassword.vue";
import UserResetPassword from "@/components/user/UserResetPassword.vue";
import TravelInfo from "@/views/TravelInfo.vue";

// Placeholder 컴포넌트 (추후 구현 시 주석 해제)
const Placeholder = {
  template: `<div class="container mx-auto my-8">
               <h1 class="text-3xl font-bold mb-4">준비 중인 페이지입니다.</h1>
               <p>추후 업데이트될 예정입니다.</p>
             </div>`,
};

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/user/signup",
    name: "user-signup",
    component: UserSignUp,
  },
  {
    path: "/user/login",
    name: "user-login",
    component: UserLogin,
  },
  {
    path: "/user/findpassword",
    name: "user-findpassword",
    component: UserFindPassword,
  },
  {
    path: "/user/resetpassword",
    name: "user-resetpassword",
    component: UserResetPassword,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: Placeholder,
  },
  {
    path: "/travel-info",
    name: "travel-info",
    component: TravelInfo,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
