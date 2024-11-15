<!-- src/components/user/UserSignup.vue -->
<template>
  <div class="signup-background">
    <div class="signup-container">
      <img src="/src/assets/img/navlog.png" alt="logo" class="logo" />
      <h2>회원가입</h2>
      <form class="form-container" @submit.prevent="register">
        <div class="form-group">
          <label for="name">이름 *</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">이메일 *</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">비밀번호 *</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">비밀번호 확인 *</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>
        <button type="submit">회원가입</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");

const register = () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "비밀번호가 일치하지 않습니다.";
    return;
  }

  // 여기서 실제 회원가입 로직을 추가할 수 있습니다.
  alert("회원가입이 완료되었습니다.");
  // 예: router.push({ name: 'user-signin' });
};
</script>

<style scoped>
.signup-background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url("/src/assets/background.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

.signup-container {
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
  margin-top: 5%;
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

.form-container {
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

.error {
  color: red;
  font-weight: bold;
  margin-top: 0.5rem;
}
</style>
