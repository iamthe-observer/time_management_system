<template>
  <div class="flex w-full p-3 gap-3 items-center">
    <Checkbox v-model="task.checked" :binary="true" />
    <div
      class="flex justify-between items-center w-full min-h-20 rounded-xl shadow-xl p-4 bg-white"
    >
      <div class="flex flex-col w-[100%] pr-4">
        <span class="text-2xl font-bold">{{ task.body }}</span>
        <div class="flex justify-between w-full">
          <span class="text-sm">{{ formatDate }}</span>
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
import { computed } from 'vue'

const props = defineProps<{ task: TasksData }>()
const { $tasks } = storeToRefs(useAppStore())
const emit = defineEmits(['ticked', 'water'])

function ticked(task: TasksData) {
  if (task.checked) emit('ticked', task.task_id)
}

const formatDate = computed(() => {
  if (props.task.date?.length) {
    let begin_date = new Date(props.task.date![0])
    let due_date = new Date(props.task.date![1])

    if (begin_date.toJSON() == null) return ''

    if (props.task.date[1] == null)
      return `Due: ${begin_date.getDay()}/${
        begin_date.getMonth() + 1
      }/${begin_date.getFullYear()}`

    return `Begins: ${begin_date.getDay()}/${
      begin_date.getMonth() + 1
    }/${begin_date.getFullYear()} || Due: ${due_date.getDay()}/${
      due_date.getMonth() + 1
    }/${due_date.getFullYear()}`
  }
  // let options = {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // }
})
</script>
