<script setup lang="ts">
import Authorize from './views/Authorize.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="antialiased w-full h-screen flex bg-light">
    <!-- <Authorize /> -->
    <Navbar />

    <router-view />
  </div>
</template>
