import { FOLDER } from './../interfaces/TasksData'
import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
import TasksData, { TaskType } from '../interfaces/TasksData'

const useAppStore = defineStore('app', () => {
  const $tasks = ref<TasksData[]>([])
  const $folders = ref(TaskType)
  const user$folders = ref<FOLDER[]>([])

  const computed_user_folders = computed(() => {
    const computed = []
    // converting the class folders into options for the dropdown
    for (let ii = 0; ii < user$folders.value.length; ii++) {
      const folder = user$folders.value[ii]
      const compute = {
        name: folder.title,
        code: folder.id,
      }
      computed.push(compute)
    }
    return computed
  })
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
    $tasks?.value!.filter(task => task.date !== undefined && !task.checked)
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
  function addToFolders(new_folder: FOLDER) {
    user$folders.value?.push(new_folder)
  }

  watchEffect(() => {
    // console.log(planned_tasks.value)
  })

  return {
    $tasks,
    unchecked_tasks,
    checked_tasks,
    addToTasks,
    addToFolders,
    $folders,
    folder_tasks,
    planned_tasks,
    starred_tasks,
    important_tasks,
    user$folders,
    computed_user_folders,
  }
})

export default useAppStore
