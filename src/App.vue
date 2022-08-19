<script setup lang="ts">
import Authorize from './views/Authorize.vue';
import Navbar from './components/Navbar.vue';
import ViewBox from './views/viewBox.vue';
</script>

<template>
  <div class="antialiased w-full h-screen flex bg-grey">
    <!-- <Authorize /> -->
    <Navbar />
    <ViewBox>
      <template #body>
        <router-view />
      </template>
    </ViewBox>
  </div>
</template>
