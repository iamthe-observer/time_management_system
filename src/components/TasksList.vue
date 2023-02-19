<template>
  <div class="flex w-full p-3 gap-3 items-center">
    <Checkbox v-model="task.checked" :binary="true" />
    <div
      class="flex justify-between items-center w-full min-h-20 rounded-xl shadow-xl p-4 bg-white"
    >
      <div class="flex flex-col w-[100%] pr-4">
        <span class="text-2xl font-bold">{{ task.body }}</span>
        <div class="flex justify-between w-full">
          <span class="text-sm text-ellipsis">{{ task.type }}</span>
          <span
            :class="
              task.urgency == 'low'
                ? 'text-blue-700 font-bold text-sm text-ellipsis'
                : 'font-bold text-sm text-ellipsis text-red-700'
            "
            >{{ task.urgency }}</span
          >
        </div>
      </div>
      <ToggleStar
        :init_state="task.starred"
        @setStar="$event => (task.starred = $event)"
        class="w-6"
      />
      <!-- <i class="pi pi-star text-3xl aspect-square p-4"></i> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ToggleStar from '../components/ToggleStar.vue'
import useAppStore from '../store/appStore'
import { storeToRefs } from 'pinia'
import TasksData from '../interfaces/TasksData'
import Checkbox from 'primevue/checkbox'

const props = defineProps<{ task: TasksData }>()
const { $tasks } = storeToRefs(useAppStore())
const emit = defineEmits(['ticked'])

function ticked(task: TasksData) {
  if (task.checked) emit('ticked', task.task_id)
}
</script>
