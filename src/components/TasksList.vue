<template>
  <div class="flex w-full p-3 gap-3 items-center">
    <input
      type="checkbox"
      class="checkbox checkbox-lg checkbox-secondary border-2"
      v-model="tasks.checked"
    />
    <div
      class="flex justify-between items-center w-full h-20 rounded-xl shadow-xl p-4 bg-white"
    >
      <div class="flex flex-col">
        <span class="text-2xl font-semibold">{{ tasks.body }}</span>
        <span class="text-sm text-ellipsis">{{ tasktype[tasks.type] }}</span>
      </div>
      <ToggleStar class="w-6" />
      <!-- <i class="pi pi-star text-3xl aspect-square p-4"></i> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TasksData from '../interfaces/TasksData';
import ToggleStar from '../components/ToggleStar.vue';
import { v4 as uuidv4 } from 'uuid';

enum TaskType {
  MyDay,
  Important,
  Planned,
  Completed,
}
interface Props {
  tasks_data: TasksData[] | null;
}
let props = defineProps<Props>();

let tasktype: string[] = ['My Day', 'Important', 'Planned', 'Completed'];

const tasks = ref<TasksData>({
  task_id: uuidv4(),
  body: 'dry clean clothes before noon',
  status: true,
  done_date: new Date(),
  init_date: new Date(),
  urgency: 'high',
  type: TaskType.MyDay,
  checked: false,
});
</script>
