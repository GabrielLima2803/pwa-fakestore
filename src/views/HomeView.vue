<script setup>
import ListagemProdutos from '@/components/ListagemProdutos.vue'
import MenuSuperior from '@/components/MenuSuperior.vue';
import RodaPe from '@/components/RodaPe.vue';
import RodaPeMobile from '@/components/RodaPeMobile.vue';
import { useScreen } from '@/composables/screen';

const {isMobile} = useScreen()
</script>

<template>
  <div class="content-wrapper">
    <MenuSuperior />
    <ListagemProdutos />
    <RodaPe v-if="!isMobile"/> 
    <RodaPeMobile v-else class="mobile"/>
  </div>
</template>

<style scoped>
.content-wrapper {
  margin-bottom: 60px; 
  position: relative;
  z-index: 1; 
}
</style>