<script setup lang="ts">
let navItems = ['login', 'about', 'home', 'notes', 'user'];
</script>

<template>
  <div class="w-20 h-full flex flex-col justify-center relative bg-grey">
    <div class="absolute top-0 w-full h-20 grid place-items-center">
      <img src="" alt="logo" class="" />
    </div>
    <ul class="min-h-[50%] w-full flex flex-col justify-evenly items-center">
      <li v-for="(item, i) in navItems" :key="i" class="uppercase">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
