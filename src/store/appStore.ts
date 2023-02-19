import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
import TasksData, { TaskType } from '../interfaces/TasksData'

const useAppStore = defineStore('app', () => {
  const $tasks = ref<TasksData[]>([])
  const $folders = ref(TaskType)

  const unchecked_tasks = computed(() =>
    $tasks?.value!.filter(task => !task.checked)
  )
  const checked_tasks = computed(() =>
    $tasks?.value!.filter(task => task.checked)
  )
  const starred_tasks = computed(() =>
    $tasks?.value!.filter(task => task.starred && !task.checked)
  )
  const important_tasks = computed(() =>
    $tasks?.value!.filter(task => task.urgency == 'high' && !task.checked)
  )
  const planned_tasks = computed(() =>
    $tasks?.value!.filter(task => task.done_date !== undefined && !task.checked)
  )

  const folder_tasks = computed(() => {
    return {
      'My Day': unchecked_tasks.value,
      Completed: checked_tasks.value,
      Starred: starred_tasks.value,
      Important: important_tasks.value,
      Planned: planned_tasks.value,
    }
  })

  function addToTasks(new_task: TasksData) {
    $tasks.value?.push(new_task)
  }

  watchEffect(() => {
    console.log(planned_tasks.value)
  })

  return {
    $tasks,
    unchecked_tasks,
    checked_tasks,
    addToTasks,
    $folders,
    folder_tasks,
    planned_tasks,
    starred_tasks,
    important_tasks,
  }
})

export default useAppStore
