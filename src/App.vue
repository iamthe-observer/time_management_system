<script setup lang="ts">
import Authorize from './views/Authorize.vue'
import Navbar from './components/Navbar.vue'
import ViewBox from './views/viewBox.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import useAppStore from './store/appStore'

const { $tasks } = storeToRefs(useAppStore())
</script>

<template>
  <div class="antialiased w-full h-screen flex bg-grey">
    <!-- <Authorize /> -->
    <Navbar />
    <ViewBox>
      <router-view />
    </ViewBox>
  </div>
</template>
