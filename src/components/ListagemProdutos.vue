<script setup>
import { ref, onMounted } from 'vue';
import { useScreen } from '@/composables/screen';

import api from '@/plugins/axios'
const produtos = ref([]);

onMounted(async () => {
  const response = await api.get('/products');
  produtos.value = response.data;
});
const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

const {browserWidth, deviceWidth, isMobile} = useScreen()

</script>

<template>
  <div>
    <h1>
      Produtos - {{browserWidth }} - {{deviceWidth }} - {{ isMobile }}
    </h1>
    <div class="container" >
      <div class="card" v-for="produto in produtos" :key="produto.id" >
        <h1 class="card--title" :class="isMobile ? 'card-mobile' : ''">{{ produto.title }}</h1>        
        <p>{{ formatPrice(produto.price) }}</p>
        <img class="card--avatar" :src="produto.image" :alt="produto.title" />
        <div class="container-button">
          <button class="btn" >Adicionar ao Carrino</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem 0;
}
.card-mobile{
  background-color: #b9392b;
}
.btn{
  width: 100%;
    padding: 8px;
    border: none;
    border-radius: 8px;
    margin-top: 15px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: #fdfdfd;
    background: #e74c3c;
    box-shadow: 0px 10px 40px -12px #b9392b;;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 15rem;
  height: 25rem;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin: auto;
  overflow: hidden;
}
.card--avatar {
  width: 100%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}
.card--title {
  color: #222;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.container-button{
}

@media (max-width: 768px) {
  .container {
    gap: 0.5rem;
  }
  .card {
    width: 92%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card {
    width: 22rem;
  }
}
</style>