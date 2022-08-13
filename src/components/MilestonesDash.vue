<template>
  <div class="milestones h-48 w-[30%] flex flex-col">
    <h2 class="">Milestones</h2>
    <Card
      class="bg-prime text-white flex flex-col items-center justify-between py-4 px-2"
    >
      <template #body>
        <div class="">icon</div>
        <span class="text-center flex-wrap"
          >There are no milestones today!</span
        >
        <Button
          class="bg-light text-prime rounded-full"
          label="Create Milestone"
          icon="pi pi-plus"
      /></template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import Button from 'primevue/button';
</script>
