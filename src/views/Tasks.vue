<template>
  <main class="w-full h-full flex relative gap-2 p-3">
    <div class="flex-1 flex flex-col gap-6 w-[70%]">
      <div class="create_task__button grid absolute bottom-8 right-8">
        <div
          @click="display = true"
          class="bg-primary px-5 py-3 rounded-full text-white font-bold tet-3xl hover:outline-4 hover:outline-secondary outline hover:scale-105 transition-all duration-100 cursor-pointer ease-in shadow-2xl"
        >
          <i class="pi pi-plus"></i> Create Task
        </div>

        <teleport to="body"
          ><Dialog
            header="New Task"
            :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
            :style="{ width: '50vw' }"
            :modal="true"
            v-model:visible="display"
          >
            <div class="field col-12 md:col-4 mt-10">
              <span class="p-float-label">
                <InputText v-model="task_data.body" class="w-full" />
                <label for="textarea">Enter new Task here...</label>
              </span>
            </div>

            <div class="field col-12 md:col-4 mt-10">
              <span class="p-float-label">
                <Calendar id="calendar" v-model="date_done" />
              </span>
            </div>

            <div class="mt-6">
              <label for="calendar">Urgency</label>
              <SelectButton
                v-model="urgency_state"
                :options="urgency_type"
                aria-labelledby="single"
              />
            </div>

            <template #footer>
              <Button
                label="Cancel"
                icon="pi pi-times"
                @click="display = false"
                class="p-button-text"
              />
              <Button
                label="Save"
                icon="pi pi-check"
                @click="handleSave"
                autofocus
                class="p-button-help"
              />
            </template> </Dialog
        ></teleport>
      </div>

      <header class="flex items-center gap-8 title__bar">
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

      <main
        :class="
          $tasks.length == 0
            ? 'taskslist w-full mt-6 overflow-hidden h-full flex flex-col'
            : 'taskslist w-full mt-6 overflow-y-scroll h-full flex flex-col'
        "
      >
        <div
          v-if="$tasks.length === 0"
          class="w-full h-full grid place-items-center"
        >
          <span>No Pending Tasks Yet...</span>
        </div>
        <TasksList
          v-else-if="selected_folder === TaskType.Completed"
          v-for="(task, i) in checked_tasks"
          :task="task"
          :key="i"
        />
        <TasksList
          v-else-if="selected_folder === TaskType.Important"
          v-for="(task, I) in important_tasks"
          :task="task"
          :key="I"
        />
        <TasksList
          v-else-if="selected_folder === TaskType.Starred"
          v-for="(task, s) in starred_tasks"
          :task="task"
          :key="s"
        />
        <TasksList
          v-else-if="selected_folder === TaskType.Planned"
          v-for="(task, p) in planned_tasks"
          :task="task"
          :key="p"
        />
        <TasksList
          v-else-if="selected_folder === TaskType.MyDay"
          v-for="(task, u) in unchecked_tasks"
          :task="task"
          :key="u"
        />
        <!-- @ticked="$event => handleTicking($event)" -->
      </main>
    </div>
    <div class="taskstype__list w-[30%] flex flex-col">
      <div class="stack page__title">
        <div class="text-center shadow-md w-full card bg-primary">
          <div class="card-body py-2 px-3 text-white font-bold text-4xl">
            Folders
          </div>
        </div>
        <div class="text-center shadow w-full card bg-primary">
          <div class="card-body py-2 px-3 text-white font-bold text-4xl">B</div>
        </div>
        <div class="text-center shadow-sm w-full card bg-primary">
          <div class="card-body py-2 px-3 text-white font-bold text-4xl">C</div>
        </div>
      </div>
      <Listbox class="mt-8" v-model="selected_folder" :options="folders" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Listbox from 'primevue/listbox'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import TasksList from '../components/TasksList.vue'
import useAppStore from '../store/appStore'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/InputText'
import TasksData from '../interfaces/TasksData'
import { v4 as uuidv4 } from 'uuid'
import { TaskType } from '../interfaces/TasksData'
import Calendar from 'primevue/calendar'
import SelectButton from 'primevue/selectbutton'

onMounted(() => {
  // console.log(task_data)
})

const {
  $tasks,
  unchecked_tasks,
  checked_tasks,
  $folders,
  planned_tasks,
  starred_tasks,
  important_tasks,
} = storeToRefs(useAppStore())
const folders = ref<TaskType[]>([
  $folders.value.MyDay,
  $folders.value.Important,
  $folders.value.Planned,
  $folders.value.Starred,
  $folders.value.Completed,
])
const selected_folder = ref<string>(folders.value[0])
const urgency_state = ref<'low' | 'high'>('low')
const urgency_type = ref(['low', 'high'])
const date_done = ref<Date>()
const display = ref(false)
let key1 = ref(0)
let key2 = ref(0)
const task_data = ref<TasksData>({
  body: '',
  init_date: null,
  done_date: undefined,
  urgency: 'low',
  status: false,
  checked: false,
  starred: false,
  type: TaskType.MyDay,
  task_id: uuidv4(),
})

function resetTask() {
  urgency_state.value = 'low'
  date_done.value = undefined
  task_data.value = {
    body: '',
    init_date: null,
    done_date: null,
    urgency: 'low',
    status: false,
    checked: false,
    starred: false,
    type: TaskType.MyDay,
    task_id: uuidv4(),
  }
}

function handleSave() {
  task_data.value.urgency = urgency_state.value
  task_data.value.init_date = new Date()
  task_data.value.done_date = date_done.value
  useAppStore().addToTasks(task_data.value)
  resetTask()
  key1.value += 1
  key2.value += 1

  // display.value = false
}

function handleTicking(id: string) {}
</script>
