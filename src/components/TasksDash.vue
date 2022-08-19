<template>
  <div class="flex flex-col w-full flex-1">
    <header class="flex justify-between py-4">
      <span class="text-lg font-bold">Tasks</span>
      <router-link to="/tasks"
        >View all tasks <i class="pi pi-angle-right"></i
      ></router-link>
    </header>
    <div class="tasks flex flex-col w-full">
      <!-- <div v-for="" class=""></div> -->
      <div class="flex w-full h-20 bg-lightgrey rounded-xl">
        <div
          class="taskhead w-[20%] flex items-center bg-grey p-2 rounded-l-xl"
        >
          <i
            class="pi pi-play bg-prime p-2 pl-3 rounded-full shadow-xl shadow-primeTrans text-white"
          ></i>

          <div class="flex flex-col justify-between h-full flex-1 text-center">
            <span class="font-bold text-slate-600">Starts from</span>
            <span class="font-bold text-slate-400"
              ><i class="pi pi-clock"></i> 00:00 pm</span
            >
          </div>
        </div>
        <div
          class="taskbody flex gap-6 justify-between items-center py-2 px-4 flex-1"
        >
          <div class="taskdetails h-full flex flex-col flex-1">
            <span class="">Search Inspiration for Project</span>
            <div class="chip w-full h-full bg-sec"></div>
          </div>

          <div class="taskprogress flex flex-col h-full justify-evenly">
            <span class="">24% complete</span>
            <progress
              class="progress progress-info w-56"
              value="24"
              max="100"
            ></progress>
          </div>

          <button class="btn btn-secondary rounded-xl text-white setReminder">
            <i class="pi pi-clock pr-2"></i>Reminder
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
