<script setup lang="ts"></script>

<template>
  <aside class="p-3">
    <div
      class="w-20 h-full flex flex-col justify-center relative bg-prime rounded-xl"
    >
      <div class="absolute top-0 w-full h-20 grid place-items-center">
        <img
          src="../assets/icons/edit-square-svgrepo-com.svg"
          alt="logo"
          class="w-12 invert"
        />
      </div>
      <ul
        class="min-h-[50%] w-full flex flex-col justify-evenly items-center gap-3"
      >
        <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black tooltip tooltip-secondary tooltip-top cursor-pointer"
          @click="$router.push('/dashboardv2')"
          data-tip="Dashboard"
        >
          <img
            src="../assets/icons/dashboard-svgrepo-com.svg"
            class="dash navlink invert transition-all ease-in-out duration-150"
          />
        </li>
        <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black tooltip tooltip-secondary tooltip-right cursor-pointer"
          @click="$router.push('/tasks')"
          data-tip="Tasks"
        >
          <img
            src="../assets/icons/sign-in-svgrepo-com.svg"
            class="dash navlink invert transition-all ease-in-out duration-150"
          />
        </li>
        <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black tooltip tooltip-secondary tooltip-right cursor-pointer"
          @click="$router.push('/dashboard')"
          data-tip="Reminder"
        >
          <img
            src="../assets/icons/bell-svgrepo-com.svg"
            class="dash navlink invert transition-all ease-in-out duration-150"
          />
        </li>
        <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black tooltip tooltip-secondary tooltip-right cursor-pointer"
          @click="$router.push('/dashboard')"
          data-tip="Events"
        >
          <img
            src="../assets/icons/pin-alt-svgrepo-com.svg"
            class="dash navlink invert transition-all ease-in-out duration-150"
          />
        </li>
        <li
          class="group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black tooltip tooltip-secondary tooltip-right cursor-pointer"
          @click="$router.push('/dashboard')"
          data-tip="Notes"
        >
          <img
            src="../assets/icons/edit-square-svgrepo-com.svg"
            class="dash navlink invert transition-all ease-in-out duration-150"
          />
        </li>
      </ul>
      <div class="absolute bottom-4 grid place-items-center w-full">
        <div
          class="aspect-square p-2 group bg-opacity-0 hover:bg-[rgb(255,255,255,.5)] transition-all ease-in-out duration-150 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-black tooltip tooltip-secondary tooltip-right cursor-pointer"
          data-tip="Logout"
          @click="$router.push('/')"
        >
          <img
            src="../assets/icons/logout-svgrepo-com.svg"
            class="w-8 invert"
          />
        </div>
      </div>
    </div>
  </aside>
</template>
