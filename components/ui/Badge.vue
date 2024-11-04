<template>
  <div
    :class="
      cn(`w-fit rounded-sm px-2 py-1 text-sm font-normal`, {
        'bg-primary text-black': variant === 'primary',
        'bg-gray-600 text-gray-200': variant === 'dark',
      })
    "
    v-bind="attrs"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, useAttrs, withDefaults } from "vue";

enum Variants {
  primary = "primary",
  dark = "dark",
}

const props = withDefaults(
  defineProps<{
    variant?: keyof typeof Variants;
  }>(),
  {
    variant: "primary",
  },
);

const attrs = useAttrs();
</script>
