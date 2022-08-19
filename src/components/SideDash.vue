<script setup lang="ts">
import Card from './Card.vue';
import Stats from './Stats.vue';
import Calendar from 'primevue/calendar';
import { ref } from 'vue';

const date = ref(new Date());
</script>

<template>
  <div
    class="secP w-[30%] bg-grey pr-2 overflow-hidden overflow-y-scroll flex flex-col items-center gap-6"
  >
    <Card :header-color="true" class="w-full flex-grow-0">
      <template #title>
        <h3 class="">Profile</h3>
      </template>
      <template #actions>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="group cursor-pointer"
            ><i
              class="pi pi-bolt group-hover:bg-none transition-all duration-200 ease-linear group-hover:bg-grey group-hover:text-primary rounded-lg p-2"
            ></i
          ></label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-secondary text-black font-bold rounded-box w-52"
          >
            <li>
              <a class="flex justify-between" href=""
                ><span>Refresh</span><i class="pi pi-refresh"></i
              ></a>
            </li>
            <li>
              <a class="flex justify-between" href=""
                ><span>Settings</span><i class="pi pi-refresh"></i
              ></a>
            </li>
          </ul>
        </div>
      </template>
      <template #body>
        <div class="flex gap-2">
          <div class="avatar">
            <div class="w-20 rounded-full">
              <img
                class="mask-hexagon-2 mask"
                src="https://placeimg.com/192/192/people"
              />
            </div>
          </div>
          <div class="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            aut.
          </div>
        </div>
        <Stats>
          <template #title1><span>hello</span></template>
          <template #body1><span>Lorem, ipsum dolor.</span></template>
          <template #title2><span>hello</span></template>
          <template #body2><span>Lorem, ipsum dolor.</span></template>
          <template #title3><span>hello</span></template>
          <template #body3><span>Lorem, ipsum dolor.</span></template>
        </Stats>
      </template>
    </Card>

    <Card :second-space="false" :header-color="true" class="w-full">
      <template #title>
        <h3 class="">My Calendar</h3>
      </template>
      <template #actions>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="group cursor-pointer"
            ><i
              class="pi pi-bolt group-hover:bg-none transition-all duration-200 ease-linear group-hover:bg-grey group-hover:text-primary rounded-lg p-2"
            ></i
          ></label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-secondary text-black font-bold rounded-box w-52"
          >
            <li>
              <a class="flex justify-between" href=""
                ><span>Refresh</span><i class="pi pi-refresh"></i
              ></a>
            </li>
            <li>
              <a class="flex justify-between" href=""
                ><span>Settings</span><i class="pi pi-refresh"></i
              ></a>
            </li>
          </ul>
        </div>
      </template>
      <template #body> </template>
    </Card>
  </div>
</template>
