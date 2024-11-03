<template>
  <button
    :class="
      cn(
        `flex w-fit items-center justify-center gap-2 rounded-md px-4 py-3 font-normal transition-all hover:-translate-y-0.5`,
        {
          'bg-primary text-black': variant === 'primary',
          'border border-gray-600 bg-black text-gray-200': variant === 'dark',
        },
      )
    "
    v-bind="attrs"
  >
    <slot></slot>
  </button>
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
