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
  <div>
    <h1>Produtos</h1>
    <div v-for="produto in produtos" :key="produto.id">
      <h2>{{ produto.title }}</h2>
      <p>{{ produto.description }}</p>
      <p>{{ produto.price }}</p>
      <img :src="produto.image" :alt="produto.title" width="150"/>
    </div>
  </div>
</template>