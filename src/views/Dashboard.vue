<script setup lang="ts">
import Calendar from 'primevue/calendar';
import { ref } from 'vue';
import TaskSummaryDash from '../components/TaskSummaryDash.vue';
import MilestonesDash from '../components/MilestonesDash.vue';

const dateOfDashboard = ref(new Date());
</script>

<template>
  <div class="flex w-full h-full">
    <div class="flex-1 flex">
      <div
        class="mainP w-[70%] flex flex-col bg-gray-300 items-center border-r-1 border-grey"
      >
        <div
          class="dashTop h-44 flex flex-col p-6 justify-center w-full bg-lightgrey"
        >
          <div
            class="w-full mx-auto h-[45%] py-2 border-b-2 border-gray-200 flex justify-between"
          >
            <div class="flex min-w-max items-center">
              Pending Tasks
              <div class="bubbletext w-20 h-full"></div>
            </div>

            <div class="searchbar flex items-center">
              <input
                type="text"
                placeholder="search anything ..."
                class="h-full rounded-l-lg px-3 py-1 bg-grey"
              /><i
                class="pi pi-search h-full w-full bg-grey rounded-r-lg flex items-center px-3"
              ></i>
            </div>
          </div>

          <div
            class="w-full mx-auto h-[55%] py-2 flex justify-between items-center"
          >
            <div class="flex flex-col">
              <span class="text-2xl font-bold">Aktive Tasks</span
              ><span class="text-xs"
                >You can edit all this stuff as you wish.</span
              >
            </div>

            <div class="flex gap-3">
              <Calendar
                id="icon"
                v-model="dateOfDashboard"
                :show-icon="true"
                input-class="bg-grey px-3 py-2"
                class="bg-prime h-10 rounded-lg border-none"
              />
            </div>
          </div>
        </div>

        <div class="dashLow flex flex-col px-6 w-full h-full">
          <div class="flex pt-8 gap-4">
            <MilestonesDash /><TaskSummaryDash />
          </div>
        </div>
      </div>
      <div class="secP w-[30%]"></div>
    </div>
  </div>
</template>
