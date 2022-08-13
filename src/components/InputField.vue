<template>
  <label :class="labelClass">
    <slot name="label"></slot>
    <input
      :value="modelValue"
      :placeholder="holder"
      :type="type"
      :class="style"
      @input="onInput"
  /></label>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const MAINCLASS: string = `bg-white text-gray-900 px-3 py-2 border border-gray-300 w-full h-10 rounded-full`;

const emit = defineEmits(['update:modelValue']);
const props = defineProps([
  'type',
  'styling',
  'modelValue',
  'labelClass',
  'holder',
]);

let onInput = (e: any) => {
  let event = e.target.value!;
  emit('update:modelValue', event);
};

const style = computed(() => {
  if (!props.styling) {
    return MAINCLASS;
  } else {
    return `${MAINCLASS} ${props.styling}`;
  }
});
</script>
