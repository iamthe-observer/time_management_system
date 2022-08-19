<script setup lang="ts">
import Card from './Card.vue';

const props = defineProps(['searchVal']);
const emit = defineEmits(['update:modelValue']);
let onInput = (e: any): void => {
  let event = e.target.value!;
  emit('update:modelValue', event);
};
</script>

<template>
  <div
    class="mainP w-[70%] flex flex-col bg-grey gap-6 overflow-y-scroll overflow-x-hidden pr-2"
  >
    <div class="searchTop w-full flex justify-between">
      <label class="flex gap-3 bg-white rounded-xl">
        <input
          v-model="searchVal"
          placeholder="search here..."
          type="text"
          @input="onInput"
          class="bg-white text-gray-900 px-3 py-2 w-full h-10 focus:outline-none rounded-xl"
        />
        <i class="pi pi-search p-3 font-bold text-primary cursor-pointer"></i>
      </label>

      <div class="flex gap-2 items-center translate-x-[-20px]">
        <div
          class="p-2 rounded-xl bg-white h-full grid place-items-center aspect-square font-bold text-prime hover:bg-primeTrans hover:text-white  transition-all duration-200 ease-in cursor-pointer"
        >
          <i class="pi pi-bell"></i>
        </div>
        <div
          class="p-2 rounded-xl bg-white h-full grid place-items-center aspect-square font-bold text-prime hover:bg-primeTrans hover:text-white transition-all duration-200 ease-in cursor-pointer"
        >
          <i class="pi pi-sliders-v"></i>
        </div>
      </div>
    </div>

    <div
      class="relative flex justify-end items-center bg-prime rounded-xl w-full h-40 overflow-clip"
    >
      <div
        class="absolute top-2 left-2 text-sm bg-[rgb(255,255,255,.7)] text-white rounded-lg px-2 py-1 shadow-0 hover:shadow-lg cursor-none transition-all duration-100 flex gap-2"
      >
        <i class="pi pi-calendar"></i>
        time and date inforamtion
      </div>

      <div class="absolute bottom-2 left-2 text-white">
        <p class="text-3xl font-semibold">Good Day, User!</p>
        <span class="text-sm text-[rgb(255,255,255,.7)]">have a nice day!</span>
      </div>

      <img
        src="../assets/images/dashsideimage.png"
        alt=""
        class="w-[200px] h-[200px] aspect-square mr-6"
      />
    </div>

    <div class="flex w-full gap-6">
      <Card :header-color="false" class="w-full">
        <template #title>
          <h3 class="">Offline Tasks</h3>
        </template>
        <template #actions>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="group cursor-pointer"
              ><i
                class="pi pi-bolt group-hover:bg-none transition-all duration-200 ease-linear group-hover:bg-grey text-black group-hover:text-primary rounded-lg p-2"
              ></i
            ></label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-secondary text-black rounded-box w-52 font-bold"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          maxime.</template
        >
      </Card>
      <Card :header-color="false" class="w-full">
        <template #title>
          <h3 class="">Offline Tasks</h3>
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
              class="dropdown-content menu p-2 shadow bg-secondary text-black rounded-box w-52 font-bold"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          maxime.</template
        >
      </Card>
      <Card :header-color="false" class="w-full">
        <template #title>
          <h3 class="">Offline Tasks</h3>
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
              class="dropdown-content menu p-2 shadow bg-secondary text-black rounded-box w-52 font-bold"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          maxime.</template
        >
      </Card>
    </div>

    <div class="w-full flex gap-6">
      <Card :header-color="false" class="w-full">
        <template #title>
          <h3 class="">Scheduled Events</h3>
        </template>
        <template #actions>
          <div class="dropdown dropdown-down">
            <label tabindex="0" class="group cursor-pointer"
              ><i
                class="pi pi-bolt group-hover:bg-none transition-all duration-200 ease-linear group-hover:bg-grey group-hover:text-primary rounded-lg p-2"
              ></i
            ></label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-secondary text-black rounded-box w-52 font-bold"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          maxime. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Sapiente ipsam omnis quas explicabo quaerat quam fugiat necessitatibus
          magnam dignissimos?</template
        >
      </Card>
      <Card :header-color="false" class="w-full">
        <template #title>
          <h3 class="">My Plans Done</h3>
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
              class="dropdown-content menu p-2 shadow bg-secondary text-black rounded-box w-52 font-bold"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          maxime. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Sapiente ipsam omnis quas explicabo quaerat quam fugiat necessitatibus
          magnam dignissimos?</template
        >
      </Card>
    </div>
  </div>
</template>
