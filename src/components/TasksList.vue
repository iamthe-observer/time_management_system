<template>
  <div
    class="flex w-full p-3 gap-3 items-center"
    v-for="(task, index) in tasks_data"
    :key="index"
  >
    <input
      type="checkbox"
      class="checkbox checkbox-lg checkbox-secondary border-2"
      v-model="task.checked"
      @click="getIndex(index)"
    />
    <div
      class="flex justify-between items-center w-full min-h-20 rounded-xl shadow-xl p-4 bg-white"
    >
      <div class="flex flex-col max-w-[90%]">
        <span class="text-2xl font-bold">{{ task.body }}</span>
        <span class="text-sm text-ellipsis">{{ task.type }}</span>
      </div>
      <ToggleStar class="w-6" />
      <!-- <i class="pi pi-star text-3xl aspect-square p-4"></i> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import TasksData from '../interfaces/TasksData';
import ToggleStar from '../components/ToggleStar.vue';
import { ref } from 'vue';
import { computed } from '@vue/reactivity';

interface Props {
  tasks_data: TasksData[] | null;
}
let props = defineProps<Props>();

let index = ref<number | null>(null);

function getIndex(i: number) {
  index.value = i;
  console.log(index);
}
</script>
