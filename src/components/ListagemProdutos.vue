<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios'
const produtos = ref([]);

onMounted(async () => {
  const response = await api.get('/products');
  produtos.value = response.data;
});
</script>

<template>
  <div class="flex">
    <h1>Produtos</h1>
    <div class="flex">
      <div v-for="produto in produtos" :key="produto.id" class="container">
        <h2>{{ produto.title }}</h2>
        <p>R$ {{ produto.price }}</p>
        <img :src="produto.image" :alt="produto.title" width="150"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
}

.container:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transform: scale(1.02);
}
.flex {
  height: 100vh;
  margin: 0 auto;
}

.container h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.container p {
  font-size: 16px;
  margin-bottom: 10px;
}

.container img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}


</style>