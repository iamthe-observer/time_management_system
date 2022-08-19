<script setup lang="ts">
import { Ref, ref } from 'vue';
import MainDash from '../components/MainDash.vue';
import SideDash from '../components/SideDash.vue';

const searchVal: Ref<string | null> = ref(null);
</script>

<template>
  <div class="w-full flex gap-6">
    <MainDash :search-val="searchVal" />
    <SideDash />
  </div>
</template>
