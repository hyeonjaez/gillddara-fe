<!-- src/components/common/Footer.vue -->
<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto text-center">
      <p>&copy; 2024 GillDDara. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// 현재 푸터에는 별도의 로직이 필요 없으므로 비워둡니다.
</script>

<style scoped>
.bg-gray-800 {
  background-color: #2d3748;
}

.text-white {
  color: white;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}
</style>
