<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Authorize from './views/Authorize.vue';
import { useRouter } from 'vue-router';
</script>

<template>
  <div class="antialiased w-full h-screen flex p-2">
    <router-view></router-view>
  </div>
</template>
