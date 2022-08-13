<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <div class="w-full h-full flex justify-center gap-2 items-center">
    <button class="" @click="$router.push('/dashboard')">Dashboard</button>
    <button class="" @click="$router.push('/authorize')">Authorize</button>
  </div>
</template>
