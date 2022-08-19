<script setup lang="ts">
import Calendar from 'primevue/calendar';
import { ref } from 'vue';
import TaskSummaryDash from '../components/TaskSummaryDash.vue';
import MilestonesDash from '../components/MilestonesDash.vue';
import TasksDash from '../components/TasksDash.vue';

const dateOfDashboard = ref(new Date());
</script>

<template>
  <div class="flex-1 flex">
    <div
      class="mainP overflow-y-scroll w-[70%] flex flex-col bg-grey items-center border-r-2 border-gray-300"
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
            <div class="dropdown dropdown-left dropdown-end">
              <label tabindex="0" class="btn btn-outline btn-md m-1 lowercase"
                ><i class="pi pi-calendar"></i>Today
                <i class="pi pi-angle-down"></i
              ></label>
              <div
                tabindex="0"
                class="dropdown-content w-64 p-2 shadow text-primary-content rounded-lg"
              >
                <Calendar
                  id="icon"
                  v-model="dateOfDashboard"
                  :show-icon="true"
                  input-class="bg-grey px-3 py-2 w-20 h-10"
                  class="bg-prime h-10 rounded-lg border-none"
                />

                <!-- <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dashLow flex flex-col px-6 w-full h-full">
        <div class="flex pt-8 gap-4 mb-4">
          <MilestonesDash /><TaskSummaryDash />
        </div>
        <TasksDash />
      </div>
    </div>
    <div class="secP w-[30%] bg-lightgrey">
      <div class="user-panel flex w-full p-6 justify-between">
        <i class="p-3 pi pi-bell font-bold flex items-center"></i>
        <div class="flex items-center gap-2">
          <div class="avatar flex items-center">
            <div class="w-8 mask mask-circle">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-sm btn-ghost rounded-btn p-0"
              ><i class="pi pi-angle-down"></i
            ></label>
            <ul
              tabindex="0"
              class="menu dropdown-content p-2 shadow bg-white rounded-box w-max mt-4"
            >
              <li>
                <a class="flex justify-between"
                  >Profile <i class="pi pi-angle-right"></i>
                </a>
              </li>
              <li>
                <a class="flex justify-between"
                  >Feeback and Reports <i class="pi pi-angle-right"></i>
                </a>
              </li>
              <li>
                <a class="flex justify-between"
                  >Settings <i class="pi pi-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex-1 h-fit">
        <img
          src="../assets/images/dashsideimage.png"
          alt=""
          class="aspect-square"
        />
      </div>
    </div>
  </div>
</template>
