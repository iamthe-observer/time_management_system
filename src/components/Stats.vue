<template>
  <div class="flex w-full">
    <div
      class="flex-1 hover:bg-lightgrey rounded-lg flex flex-col gap-2 items-center"
    >
      <slot name="title1"></slot>
      <slot name="body1"></slot>
    </div>
    <hr class="w-1 mx-1 h-16 bg-lightgrey rounded-full" />
    <div
      class="flex-1 hover:bg-lightgrey rounded-lg flex flex-col gap-2 items-center"
    >
      <slot name="title2"></slot>
      <slot name="body2"></slot>
    </div>
    <hr class="w-1 mx-1 h-16 bg-lightgrey rounded-full" />
    <div
      class="flex-1 hover:bg-lightgrey rounded-lg flex flex-col gap-2 items-center"
    >
      <slot name="title3"></slot>
      <slot name="body3"></slot>
    </div>
  </div>
</template>
