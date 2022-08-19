<template>
  <div class="flex-1 flex flex-col gap-6 relative">
    <div class="grid absolute bottom-8 right-8">
      <div
        class="bg-primary px-5 py-3 rounded-full text-white font-bold tet-3xl hover:outline-4 hover:outline-secondary outline hover:scale-105 transition-all duration-100 cursor-pointer ease-in"
      >
        <i class="pi pi-plus"></i> Create Task
      </div>
    </div>
    <div class="flex justify-between">
      <div class="stack page_title">
        <div class="text-center shadow-md w-36 card bg-primary">
          <div class="card-body py-2 px-3 text-white font-bold text-4xl">
            Tasks
          </div>
        </div>
        <div class="text-center shadow w-36 card bg-primary">
          <div class="card-body py-2 px-3 text-white font-bold text-4xl">B</div>
        </div>
        <div class="text-center shadow-sm w-36 card bg-primary">
          <div class="card-body py-2 px-3 text-white font-bold text-4xl">C</div>
        </div>
      </div>
    </div>

    <div class="taskslist">
      <TasksList :tasks_data="tasks" />
      <!-- <TasksList v-if="tasks.length > 0" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TasksList from '../components/TasksList.vue';

const tasks = ref(null);
</script>
