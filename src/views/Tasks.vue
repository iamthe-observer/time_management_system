<template>
  <main class="w-full h-full flex relative gap-2 p-3">
    <div class="flex-1 flex flex-col gap-6 w-[70%]">
      <div class="create_task__button gap-3 grid absolute bottom-8 right-8">
        <div
          @click="display_create_folder = true"
          class="bg-primary px-5 py-3 rounded-full text-white font-bold tet-3xl hover:outline-4 hover:outline-secondary outline hover:scale-105 transition-all duration-100 cursor-pointer ease-in shadow-2xl w-fit place-self-end z-10"
        >
          <i class="pi pi-plus"></i> <i class="pi pi-folder-open"></i>
        </div>

        <div
          @click="display_create_todo = true"
          class="bg-primary px-5 py-3 rounded-full text-white font-bold tet-3xl hover:outline-4 hover:outline-secondary outline hover:scale-105 transition-all duration-100 cursor-pointer ease-in shadow-2xl z-10"
        >
          <i class="pi pi-plus"></i> Create Task
        </div>

        <teleport to="body"
          ><Dialog
            :maximizable="true"
            header="New Task"
            :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
            :style="{ width: '50vw' }"
            :modal="true"
            :dismissable-mask="true"
            v-model:visible="display_create_todo"
          >
            <div class="field col-12 md:col-4 mt-10">
              <span class="p-float-label">
                <InputText
                  v-model="create_task.body"
                  class="input-text w-full"
                />
                <label for="textarea">Enter new Task here...</label>
              </span>
            </div>

            <div class="flex justify-between w-full mt-10 gap-10">
              <div class="w-full">
                <span class="block">Due Date: </span>
                <Calendar
                  inputId="range"
                  class="input-text w-full"
                  v-model="create_task.date"
                  selectionMode="range"
                  :manualInput="false"
                />
              </div>

              <div class="w-full">
                <span class="block">Folder: </span>
                <Dropdown
                  class="input-text w-full"
                  v-model="selected_user_folder"
                  :options="computed_user_folders"
                  optionLabel="name"
                  placeholder="Select a Folder"
                ></Dropdown>
              </div>
            </div>

            <div class="mt-6">
              <label>Urgency</label>
              <SelectButton
                v-model="create_task.urgency"
                :options="urgency_type"
                aria-labelledby="single"
              />
            </div>

            <template #footer>
              <Button
                label="Create New Folder"
                icon="pi pi-folder"
                @click="display_create_folder = true"
                class="p-button-info"
              />
              <Button
                label="Cancel"
                icon="pi pi-times"
                @click="display_create_todo = false"
                class="p-button-text"
              />
              <Button
                label="Save"
                icon="pi pi-check"
                @click="handleSave"
                autofocus
                class="p-button-help"
              />
            </template>
          </Dialog>

          <Dialog
            :maximizable="true"
            header="Create Folder"
            :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
            :style="{ width: '50vw' }"
            :modal="true"
            :dismissable-mask="true"
            v-model:visible="display_create_folder"
          >
            <div class="field col-12 md:col-4 mt-10">
              <span class="p-float-label">
                <InputText
                  v-model="create_folder.title"
                  class="input-text w-full"
                />
                <label for="textarea">Enter new Folder name here...</label>
              </span>
            </div>

            <template #footer>
              <Button
                label="Cancel"
                icon="pi pi-times"
                @click="display_create_folder = false"
                class="p-button-text"
              />
              <Button
                label="Save"
                icon="pi pi-check"
                @click="handleSaveFolder"
                autofocus
                class="p-button-help"
              />
            </template>
          </Dialog>

          <!-- error alert -->
          <div
            v-if="if_error"
            class="alert alert-error shadow-lg absolute bottom-3 w-[90%] mx-auto left-"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{{ error_msg }}</span>
            </div>
          </div>
        </teleport>
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
          v-else-if="selected_folder.includes(TaskType.Completed)"
          v-for="(task, i) in checked_tasks"
          :task="task"
          :key="i"
        />
        <TasksList
          v-else-if="selected_folder.includes(TaskType.Important)"
          v-for="(task, I) in important_tasks"
          :task="task"
          :key="I"
        />
        <TasksList
          v-else-if="selected_folder.includes(TaskType.Starred)"
          v-for="(task, s) in starred_tasks"
          :task="task"
          :key="s"
        />
        <TasksList
          v-else-if="selected_folder.includes(TaskType.Planned)"
          v-for="(task, p) in planned_tasks"
          :task="task"
          :key="p"
        />
        <TasksList
          v-else-if="selected_folder.includes(TaskType.MyDay)"
          v-for="(task, u) in unchecked_tasks"
          :task="task"
          :key="u"
        />
        <!-- @ticked="$event => handleTicking($event)" -->
      </main>
    </div>
    <div class="taskstype__list w-[30%] flex flex-col overflow-y-scroll pr-2">
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
      <Listbox
        class="my-8"
        v-model="selected_folder"
        :key="key1"
        :options="folders"
      />
      <div class="divider"></div>
      <Listbox
        class="mt-8"
        v-model="selected_folder"
        :key="key3"
        :options="folders"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import Listbox from 'primevue/listbox'
import { storeToRefs } from 'pinia'
import { ref, watchEffect, reactive } from 'vue'
import TasksList from '../components/TasksList.vue'
import useAppStore from '../store/appStore'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { TaskType } from '../interfaces/TasksData'
import Calendar from 'primevue/calendar'
import SelectButton from 'primevue/selectbutton'
import { TASKOBJECT } from '../classes/TASK'
import Dropdown from 'primevue/dropdown'
import FOLDER from '../classes/FOLDER'
import TASK from '../classes/TASK'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const {
  $tasks,
  unchecked_tasks,
  checked_tasks,
  $folders,
  planned_tasks,
  starred_tasks,
  important_tasks,
  user$folders,
  computed_user_folders,
} = storeToRefs(useAppStore())
const folders = ref<TaskType[]>([
  $folders.value.MyDay,
  $folders.value.Important,
  $folders.value.Planned,
  $folders.value.Starred,
  $folders.value.Completed,
])

const selected_folder = ref<string>(folders.value[0])
const selected_user_folder = ref<{ name: string; code: string } | null>(null)
const urgency_state = ref<'low' | 'high'>('low')
const urgency_type = ref(['low', 'high'])
const date_done = ref<Date>()
const display_create_todo = ref(false)
const display_create_folder = ref(false)
const if_error = ref(false)
const error_msg = ref('')
let key1 = ref(0)
let key2 = ref(0)
let key3 = ref(0)

const create_task = reactive<TASKOBJECT>({
  body: '',
  date: undefined,
  urgency: 'low',
})

const create_folder = reactive<{
  title: string
  tasks: string[]
}>({
  title: '',
  tasks: [],
})

const rules = {
  body: { required },
  date: { required },
  urgency: { required },
}

const v$ = useVuelidate(rules, create_task)

function resetTask() {
  urgency_state.value = 'low'
  date_done.value = undefined
  create_task.body = ''
  create_task.date = undefined
  create_task.urgency = 'low'
}
function resetFolder() {
  create_folder.title = ''
}

// when theres an invalid input in any of the fields the fnc captures the error and sends it back to be printed out.
function invalidInput(type: 0 | 1) {
  // using these numbers to know what fields should validate
  if (type == 0) {
    const inp_txt = document.querySelectorAll('.input-text')
    if_error.value = true
    for (let ii = 0; ii < inp_txt.length; ii++) {
      const inp_el = inp_txt[ii]
      inp_el.classList.add('p-invalid')
    }
    setTimeout(() => (if_error.value = false), 8000)
    if (create_task.body.trim() == '') {
      throw new Error('Enter A Task.')
    } else if (
      new Date() > create_task.date![0] ||
      create_task.date! == undefined
    ) {
      throw new Error(
        'Enter a valid date. Date must not precede the current date.'
      )
    }
  } else {
    const inp_txt = document.querySelectorAll('.input-text')
    if_error.value = true
    for (let ii = 0; ii < inp_txt.length; ii++) {
      const inp_el = inp_txt[ii]
      inp_el.classList.add('p-invalid')
    }

    setTimeout(() => (if_error.value = false), 8000)

    if (
      create_folder.title.trim() == '' ||
      create_folder.title.trim() == undefined ||
      create_folder.title.trim() == null
    ) {
      throw new Error('Enter A Folder Name.')
    }
  }
}

async function handleSave() {
  try {
    if (await v$.value.$validate()) {
      const new_task = new TASK(create_task)
      useAppStore().addToTasks(new_task)
      addTaskID(selected_user_folder.value?.code!, new_task.task_id)
    } else return invalidInput(0)
  } catch (error: any) {
    console.log(error)
    return (error_msg.value = error)
  }

  resetTask()

  key1.value += 1
  key2.value += 1

  // display.value = false
}

function addTaskID(folderID: string, taskID: string) {
  const filtered: typeof user$folders.value = user$folders.value.map(folder => {
    if (folder.id === folderID) {
      folder.tasks?.push(taskID)
    }
    return folder
  })
  console.log(filtered)

  user$folders.value = filtered
}

async function handleSaveFolder() {
  try {
    if (create_folder.title != '') {
      console.log(create_folder)
      const new_folder = new FOLDER(create_folder)
      useAppStore().addToFolders(new_folder)
      console.log(user$folders.value)
    } else return invalidInput(1)
  } catch (error: any) {
    return (error_msg.value = error)
  }

  resetFolder()
}
</script>
