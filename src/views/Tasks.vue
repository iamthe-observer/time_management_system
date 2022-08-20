<template>
  <main class="w-full h-full flex relative gap-2">
    <div class="flex-1 flex flex-col gap-6 w-[70%]">
      <div class="create_task__button grid absolute bottom-8 right-8">
        <div
          class="bg-primary px-5 py-3 rounded-full text-white font-bold tet-3xl hover:outline-4 hover:outline-secondary outline hover:scale-105 transition-all duration-100 cursor-pointer ease-in"
        >
          <i class="pi pi-plus"></i> Create Task
        </div>
      </div>

      <header class="flex justify-between title__bar">
        <div class="stack page__title">
          <div class="text-center shadow-md w-36 card bg-primary">
            <div class="card-body py-2 px-3 text-white font-bold text-4xl">
              Tasks
            </div>
          </div>
          <div class="text-center shadow w-36 card bg-primary">
            <div class="card-body py-2 px-3 text-white font-bold text-4xl">
              B
            </div>
          </div>
          <div class="text-center shadow-sm w-36 card bg-primary">
            <div class="card-body py-2 px-3 text-white font-bold text-4xl">
              C
            </div>
          </div>
        </div>
      </header>

      <div
        class="taskslist w-full mt-6 overflow-y-scroll overflow-hidden h-full"
      >
        <TasksList :tasks_data="tasks" />
      </div>
    </div>
    <div class="taskstype__list w-[30%]"></div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TasksList from '../components/TasksList.vue';
import { tasks } from './testdata';
</script>
