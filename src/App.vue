<script setup>
import { useMonitor } from '@/composables/monitor';

const {menu} = useMonitor()

</script>

<template>
  <component :is="menu" />
  <RouterView />
</template>

<style scoped>

</style>
