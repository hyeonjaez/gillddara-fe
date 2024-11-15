<!-- src/components/user/UserLogin.vue -->
<template>
  <div class="signin-background">
    <div class="signin-container">
      <img src="/src/assets/img/navlog.png" alt="logo" class="logo" />
      <h2>로그인</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">이메일 *</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">비밀번호 *</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">로그인</button>
        <div class="links">
          <router-link to="/user/signup">회원가입</router-link> |
          <router-link to="/user/findpassword">비밀번호 찾기</router-link>
        </div>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = () => {
  // 여기서 실제 로그인 로직을 추가할 수 있습니다.
  // 현재는 단순히 폼을 제출하면 알림을 표시합니다.
  if (email.value && password.value) {
    alert("로그인에 성공했습니다.");
    // 예: router.push({ name: 'main' });
  } else {
    errorMessage.value = "이메일과 비밀번호를 모두 입력해주세요.";
  }
};
</script>

<style scoped>
.signin-background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/src/assets/background.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

.signin-container {
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 110px;
  margin-bottom: 1.5rem;
}

h2 {
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 36px;
}

form {
  width: 100%;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
}

button[type="submit"] {
  width: 100%;
  padding: 0.75rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
}

button[type="submit"]:hover {
  background-color: #444;
}

.links {
  margin-top: 1.5rem;
}

.links a {
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none;
  margin: 0 0.5rem;
  font-weight: bold;
  font-size: 16px;
}

.links a:hover {
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
}

.error {
  color: red;
  font-weight: bold;
  margin-top: 0.5rem;
}
</style>
