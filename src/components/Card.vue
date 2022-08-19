<template>
  <div class="flex-1 rounded-2xl bg-white">
    <div :class="colorHeader">
      <slot name="title" />
      <slot name="actions" />
    </div>
    <div class="flex flex-col flex-1 gap-3 bg-white rounded-xl p-3">
      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  headerColor: Boolean,
});

const colorHeader = computed(() => {
  if (!props.headerColor) {
    return 'flex justify-between items-center gap-3 w-full px-2 pt-2 rounded-2xl';
  } else {
    return 'flex justify-between items-center gap-3 w-full bg-primary p-3 text-white rounded-2xl';
  }
});
</script>
