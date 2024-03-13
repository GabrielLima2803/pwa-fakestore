<script setup>
import { useMonitor } from '@/composables/monitor';

const {menu, footer} = useMonitor()

</script>

<template>
  <component :is="menu" />
  <RouterView />
  <component class="footer" :is="footer" />
</template>

<style scoped>
.footer{
  z-index: 999;
}
</style>
