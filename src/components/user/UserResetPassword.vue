<!-- src/components/user/UserResetPassword.vue -->
<template>
  <div class="update-password-background">
    <div class="update-password-container">
      <img src="/src/assets/img/navlog.png" alt="logo" class="logo" />
      <h2>비밀번호 업데이트</h2>
      <form @submit.prevent="updatePassword">
        <div class="form-group">
          <label for="newPassword">새 비밀번호</label>
          <input type="password" id="newPassword" v-model="newPassword" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">새 비밀번호 확인</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" @blur="validatePassword" required />
          <div v-if="passwordError" class="error">{{ passwordError }}</div>
        </div>
        <button type="submit">비밀번호 업데이트</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newPassword = ref("");
const confirmPassword = ref("");
const passwordError = ref("");
const errorMessage = ref("");

const updatePassword = () => {
  if (newPassword.value !== confirmPassword.value) {
    passwordError.value = "비밀번호가 일치하지 않습니다.";
    return;
  }

  // 여기서 실제 비밀번호 업데이트 로직을 추가할 수 있습니다.
  alert("비밀번호가 성공적으로 업데이트되었습니다.");
  // 예: router.push({ name: 'user-signin' });
};

const validatePassword = () => {
  if (newPassword.value !== confirmPassword.value) {
    passwordError.value = "비밀번호가 일치하지 않습니다.";
  } else {
    passwordError.value = "";
  }
};
</script>

<style scoped>
.update-password-background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/src/assets/background.jpg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

.update-password-container {
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
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

.error {
  color: red;
  font-weight: bold;
  margin-top: 0.5rem;
}
</style>
