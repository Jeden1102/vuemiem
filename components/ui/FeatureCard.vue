<template>
  <div
    :class="
      cn(
        `flex items-center justify-between gap-8 rounded-sm border border-gray-800 p-10`,
      )
    "
    v-bind="attrs"
  >
    <div>
      <Icon v-if="iconTop" :name="iconTop" size="24" class="text-primary" />
      <p class="text-lg lg:text-2xl">{{ title }}</p>
      <p class="text-sm font-extralight text-gray-400 lg:text-base">
        {{ subtitle }}
      </p>
      <p class="mt-6">{{ description }}</p>
    </div>
    <span class="h-8 w-8 rounded-full bg-primary text-black">
      <Icon v-if="iconRight" :name="iconRight" size="32" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, useAttrs } from "vue";

const attrs = useAttrs();

const props = defineProps<{
  title: string;
  subtitle: string;
  iconTop?: string;
  iconRight?: string;
  description: string;
}>();
</script>
