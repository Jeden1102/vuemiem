<template>
  <button
    :class="
      cn(
        `flex w-fit items-center justify-center gap-2 rounded-md px-4 py-3 font-normal transition-all hover:-translate-y-0.5 disabled:opacity-50`,
        {
          'bg-primary text-black': variant === 'primary',
          'border border-gray-600 bg-black text-gray-200': variant === 'dark',
          'border border-zinc-700 bg-zinc-900 text-gray-200':
            variant === 'gray',
          'px-6 py-5': size === 'large',
          'px-3 py-2': size === 'small',
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
  gray = "gray",
}

enum Size {
  large = "large",
  small = "small",
}

withDefaults(
  defineProps<{
    variant?: keyof typeof Variants;
    size?: keyof typeof Size;
  }>(),
  {
    variant: "primary",
  },
);

const attrs = useAttrs();
</script>
