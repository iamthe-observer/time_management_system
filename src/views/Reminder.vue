<template>
  <main
    class="w-full relative overflow-y-scroll bg-white mx-5 my-8 outline outline-4 outline-lightgrey rounded-2xl scrollbar-hidden"
  >
    <header
      class="p-6 pt-5 mb-3 flex justify-between items-center rounded-2xl shadow-lg text-black font-bold text-4xl sticky top-0 bg-white"
    >
      <span>Reminders</span>
      <i
        @click="open_modal = true"
        class="pi pi-plus hover:bg-prime bg-grey transition-all duration-150 ease-out hover:text-white text-black font-bold w-fit h-fit p-4 rounded-full"
      ></i>
    </header>

    <section class="py-10 px-5">
      <h1 class="pl-3 py-2">Upcoming</h1>
      <div class="grid-container">
        <div
          v-for="(rem, i) in reminders"
          :key="i"
          class="w-full h-fit bg-lightgrey shadow-sm px-5 py-4 rounded-2xl hover:bg-grey cursor-pointer transition-all duration-500 ease-in rem_container"
          @click="handleEditReminder(rem, i)"
        >
          <div class="">{{ rem.title }}</div>
          <div class="">{{ rem.body }}</div>
          <div class="">{{ showDate(rem.end!) }}</div>
        </div>
      </div>
    </section>
  </main>

  <teleport to="body">
    <!-- @todo new reminder -->
    <Dialog
      header="New Reminder"
      :style="{ width: '65vw' }"
      :modal="true"
      v-model:visible="open_modal"
    >
      <div class="field col-12 md:col-4 mt-10">
        <span class="p-float-label">
          <InputText v-model="title" class="input-text w-full" />
          <label for="textarea">Title...</label>
        </span>
      </div>

      <div class="flex gap-3 relative">
        <div class="field col-12 md:col-4 mt-10 w-1/2">
          <span class="absolute top-5">End Date</span>
          <span class="p-float-label">
            <!-- inputId="range" -->
            <!-- selectionMode="single" -->
            <!-- :manualInput="false" -->
            <Calendar
              class="input-text w-full"
              showIcon
              v-model="end"
              dateFormat="DD dd, M, yy"
              showTime
              hourFormat="12"
            />
          </span>
        </div>

        <div class="field col-12 md:col-4 mt-10 flex-1">
          <span class="p-float-label">
            <Textarea v-model="body" class="input-text w-full h-full" />
            <label for="textarea">Extra info about the reminder...</label>
          </span>
        </div>
      </div>

      <template #footer>
        <Button
          label="Cancel"
          class="bg-transparent text-prime rounded-md"
          @click="resetReminder"
        />
        <Button
          label="Save"
          class="bg-prime rounded-md"
          @click="saveReminder"
        />
        <!-- @click="saveReminder" -->
      </template>
    </Dialog>

    <!-- edit reminder -->
    <Dialog
      header="Edit Reminder"
      :style="{ width: '65vw' }"
      :modal="true"
      v-model:visible="open_edit_modal"
    >
      <div class="field col-12 md:col-4 mt-10">
        <span class="p-float-label">
          <InputText
            v-model="selected_reminder!.title"
            class="input-text w-full"
          />
          <label for="textarea">Title...</label>
        </span>
      </div>

      <div class="flex gap-3 relative">
        <div class="field col-12 md:col-4 mt-10">
          <span class="absolute top-5">End Date</span>
          <span class="p-float-label">
            <!-- inputId="range" -->
            <!-- selectionMode="single" -->
            <!-- :manualInput="false" -->
            <Calendar
              class="input-text w-full"
              showIcon
              v-model="selected_rem_endDate"
              dateFormat="DD dd, M, yy"
              showTime
              hourFormat="12"
            />
          </span>
        </div>

        <div class="field col-12 md:col-4 mt-10 flex-1">
          <span class="p-float-label">
            <Textarea
              v-model="selected_reminder!.body"
              class="input-text w-full h-full"
            />
            <label for="textarea">Extra info about the reminder...</label>
          </span>
        </div>
      </div>

      <template #footer>
        <Button
          label="Cancel"
          class="bg-transparent text-prime rounded-md"
          @click="resetReminder"
        />
        <Button
          label="Save"
          class="bg-prime rounded-md"
          @click="saveEditedReminder"
        />
        <!-- @click="saveReminder" -->
      </template>
    </Dialog>
  </teleport>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>

<script setup lang="ts">
import Calendar from 'primevue/calendar'
import Textarea from 'primevue/textarea'
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'
import Dialog from 'primevue/dialog'
import { v4 as uuidv4 } from 'uuid'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import REMINDER from '../interfaces/Reminders'
import { supabase } from '../lib/supabase'

let timer: any
const title = ref('')
const body = ref('')
const start = ref<Date | undefined>(new Date())
const end = ref<Date | undefined>()
// const calendar = ref()
const open_modal = ref(false)
const open_edit_modal = ref(false)
const selected_reminder = ref<REMINDER>()
let selected_rem_idx = ref<number>()
let selected_rem_endDate = ref<Date>()
const reminders = ref<REMINDER[]>()
// const reminders = ref<REMINDER[]>([
//   {
//     id: uuidv4(),
//     body: 'lorem404040404040404',
//     title: 'Lunch',
//     end: '2023-02-12',
//   },
//   {
//     id: uuidv4(),
//     body: 'lorem404040404040404',
//     title: 'Meeting',
//     end: '2023-02-12',
//   },
//   {
//     id: uuidv4(),
//     body: 'lorem404040404040404',
//     title: 'Happy Hour',
//     end: '2023-02-12',
//   },
//   {
//     id: uuidv4(),
//     body: 'lorem404040404040404',
//     title: 'Dinner',
//     end: '2023-02-12',
//   },
//   {
//     id: uuidv4(),
//     body: 'lorem404040404040404',
//     title: 'Birthday Party',
//     end: '2023-05-13',
//   },
//   {
//     id: uuidv4(),
//     body: 'God is good all the time and all the time God is good',
//     title: 'Click for Google',
//     url: 'https://www.google.com/',
//     end: '2023-2-28',
//   },
// ])

async function getReminders() {
  const { data, error } = await supabase.from('reminders').select('*')
  try {
    if (error) throw error
  } catch (error) {}
}

onBeforeUnmount(() => {
  clearInterval(timer)
})

onBeforeMount(() => {})

onMounted(() => {
  // checks to see if time is up
  const date = () => {
    const data = Date.now()
    return data
  }

  timer = setInterval(() => {
    // console.log(new Date().getUTCSeconds())

    sendAlert()
  }, 1000)

  function sendAlert() {
    reminders.value!.forEach((rem, i) => {
      const rem_containers = Array.from(
        document.getElementsByClassName('rem_container')
      )
      if (new Date(rem.end!).getTime() <= date()) {
        showAlert(i, rem_containers)
      } else {
        // @ts-ignore
        rem_containers[i].style.backgroundColor = 'white'

        // @ts-ignore
        rem_containers[i].style.color = 'black'
      }
    })
  }

  const showAlert = (i: number, rem_containers: Element[]) => {
    // @ts-ignore
    rem_containers[i].style.backgroundColor = 'purple'

    // @ts-ignore
    rem_containers[i].style.color = 'white'

    // console.log(rem_containers[i])
  }
})

function handleEditReminder(rem: REMINDER, i: number) {
  open_edit_modal.value = true
  selected_reminder.value = rem
  selected_rem_idx.value = i

  selected_rem_endDate.value = new Date(rem.end!)
}

// Notification.requestPermission().then(permission => {
//   if (permission === 'granted') {
//     // Create a new notification
//     const notification = new Notification('New Alert!', {
//       body: 'This is a test alert.',
//       icon: 'path/to/icon.png',
//     })

//     // Handle click event on the notification
//     notification.onclick = () => {
//       console.log('Notification clicked!')
//     }
//   }
// })

function showDate(dateString: string): string {
  const date = new Date(dateString)
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dayOfWeek = daysOfWeek[date.getDay()]
  const dayOfMonth = date.getDate()
  const month = monthsOfYear[date.getMonth()]
  const year = date.getFullYear()
  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`
}

const formatDate = (date: Date | undefined) => {
  if (date == undefined) throw new Error('date is undefined.')

  if (date.toJSON() == null) return ''

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}

function resetReminder() {
  title.value = ''
  body.value = ''
  end.value = undefined

  open_modal.value = false
  open_edit_modal.value = false
}

function saveReminder() {
  reminders.value!.push({
    id: uuidv4(),
    title: title.value,
    body: body.value,
    start: formatDate(start.value),
    end: formatDate(end.value),
  })
  resetReminder()
}

function saveEditedReminder() {
  let idx = selected_rem_idx.value!
  function replaceItemByIndex<T>(arr: T[], index: number, newItem: T): T[] {
    if (index < 0 || index >= arr.length) {
      throw new Error(
        `Index ${index} is out of range for array of length ${arr.length}`
      )
    }
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
  }

  selected_reminder.value!.end = formatDate(selected_rem_endDate.value)

  console.log(
    replaceItemByIndex(reminders.value!, idx, selected_reminder.value),
    reminders.value
  )

  resetReminder()
}
</script>
