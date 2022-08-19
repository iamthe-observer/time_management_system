<template>
  <label>
    <slot name="label"></slot>
    <input
      :value="modelValue"
      :placeholder="holder"
      :type="type"
      :class="style"
      @input="onInput"
    />
  </label>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

type StringNull = string | null;

const MAINCLASS: string = `bg-white text-gray-900 px-3 py-2 border border-gray-300 w-full h-10`;
// type StringNull = string | null;
interface Props {
  type: string | undefined;
  styling: StringNull;
  modelValue: StringNull;
  holder: string | undefined;
  iconClass: StringNull;
}

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string): void;
}>();
// const emit = defineEmits(['update:modelValue']);
const props = defineProps<Props>();

let onInput = (e: Event): void => {
  let event = (e.target as HTMLInputElement).value;
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
