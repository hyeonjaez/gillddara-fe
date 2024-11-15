<!-- src/components/common/Header.vue -->
<template>
  <header class="header-white">
    <router-link to="/" id="nav-logo">
      <img src="/src/assets/img/navlog.png" alt="GillDDara 로고" />
    </router-link>
    <div class="flex items-center">
      <div id="trip-menu-container">
        <!-- 아직 구현되지 않은 라우트는 메인 페이지로 연결하거나 주석 처리 -->
        <router-link to="/travel-info" class="menu-white trip-menu">
          여행 정보
        </router-link>
        <router-link to="/" class="menu-white trip-menu">
          지역 채팅방
        </router-link>
        <router-link to="/" class="menu-white trip-menu">
          친화력
        </router-link>
        <router-link to="/" class="menu-white trip-menu">
          예정
        </router-link>
      </div>
      <!-- 프로필 관련 메뉴는 주석 처리하거나 간소화 -->

      <div id="profile">
        <router-link to="/user/signup" class="profile-link">회원가입</router-link>
        <router-link to="/user/login" class="profile-link">로그인</router-link>
      </div>

    </div>
  </header>
</template>

<script setup>
// 필요한 경우, 간단한 로직만 유지하거나 주석 처리
// import { ref, computed } from 'vue'
// import { useRouter } from 'vue-router'
// import { useAuthStore } from '@/stores/auth'

// const router = useRouter()
// const authStore = useAuthStore()
// const isActive = ref(false)
// const profileImage = ref(authStore.getProfileImage)

// const memberOption = () => {
//   isActive.value = !isActive.value
// }

// const signout = async () => {
//   try {
//     authStore.signout()
//     // await http.post('/member/signout')
//     isActive.value = false
//     alert('로그아웃이 완료되었습니다.')
//     router.push('/')
//     profileImage.value = '/src/assets/img/profileDefault.png'
//   } catch (error) {
//     console.error(error)
//     isActive.value = false
//     alert('로그아웃에 실패하였습니다. 다시 시도해주세요.')
//   }
// }
</script>

<style scoped>
#nav-logo {
  width: 150px;
  margin-left: 150px;
}

#nav-logo img {
  width: 100%;
  height: 100%;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: fixed;
  z-index: 100000;
}

.header-white {
  background-color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.19);
}

#trip-menu-container {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.trip-menu {
  text-decoration: none;
  font-weight: bold;
  color: #444444;
  padding: 15px;
  position: relative;
  font-size: 18px;
}

.menu-white {
  text-decoration: none;
  font-weight: bold;
  color: #444444;
}

.trip-menu::after {
  position: absolute;
  content: "";
  width: 0;
  height: 3px;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: black;
  transition: all 0.3s ease;
  border-radius: 7px;
}

.trip-menu:hover::after {
  left: 0;
  width: 100%;
}

.trip-menu-selected::after {
  position: absolute;
  content: "";
  left: 0;
  width: 100%;
  height: 3px;
  bottom: 0;
  z-index: -1;
  background: black;
  transition: all 0.3s ease;
  border-radius: 7px;
}

/* 프로필 링크 스타일 추가 */
.profile-link {
  margin-left: 15px;
  text-decoration: none;
  font-weight: bold;
  color: #444444;
  font-size: 18px;
}

.profile-link:hover {
  color: #000000;
}
</style>
