<script setup lang="ts"></script>

<template>
  <aside class="px-5 py-8">
    <div
      class="w-20 h-full flex flex-col justify-center relative bg-white rounded-2xl outline outline-4 outline-lightgrey"
    >
      <div class="absolute top-0 w-full h-20 grid place-items-center">
        <img
          src="../assets/icons/edit-square-svgrepo-com.svg"
          alt="logo"
          class="w-12"
        />
      </div>
      <ul
        class="min-h-[50%] w-full flex flex-col justify-evenly items-center gap-3"
      >
        <!-- <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black tooltip tooltip-top cursor-pointer"
          @click="$router.push('/dashboardv2')"

        >
          <img
            src="../assets/icons/dashboard-svgrepo-com.svg"
            class="dash navlink transition-all ease-in-out duration-150"
          />
        </li> -->
        <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black cursor-pointer"
          @click="$router.push('/tasks')"
        >
          <img
            src="../assets/icons/sign-in-svgrepo-com.svg"
            class="dash navlink transition-all ease-in-out duration-150"
          />
        </li>
        <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black cursor-pointer"
          @click="$router.push('/alarms')"
        >
          <img
            src="../assets/icons/bell-svgrepo-com.svg"
            class="dash navlink transition-all ease-in-out duration-150"
          />
        </li>
        <!-- <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black cursor-pointer"
          @click="$router.push('/dashboard')"

        >
          <img
            src="../assets/icons/pin-alt-svgrepo-com.svg"
            class="dash navlink transition-all ease-in-out duration-150"
          />
        </li> -->
        <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black cursor-pointer"
          @click="$router.push('/reminder')"
        >
          <img
            src="../assets/icons/edit-square-svgrepo-com.svg"
            class="dash navlink transition-all ease-in-out duration-150"
          />
        </li>
      </ul>
      <div class="absolute bottom-4 grid place-items-center w-full">
        <div
          class="aspect-square p-2 group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black cursor-pointer"
          @click="$router.push('/')"
        >
          <img src="../assets/icons/logout-svgrepo-com.svg" class="w-8" />
        </div>
      </div>
    </div>
  </aside>
</template>
