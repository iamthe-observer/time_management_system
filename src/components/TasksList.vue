<template>
  <div class="flex flex-col w-full p-3 gap-3">
    <div class="flex w-full rouned-lg bg-white"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TasksData from '../interfaces/TasksData';
interface Props {
  tasks_data: TasksData[] | null;
}

let body = ref(
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, placeat.'
);
let title = ref('dry clean clothes before noon');
let status = ref(true);
let init_date = ref(new Date());
let done_date = ref(new Date().setUTCHours(12));
let urgency = ref('high');
// FIXME
let task_id = ref();

// TODO import uuid

let props = defineProps<Props>();
</script>

<style scoped></style>
