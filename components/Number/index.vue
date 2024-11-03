<template>
  <div class="flex flex-col gap-2 p-3" v-bind="attrs">
    <p class="text-lg font-semibold md:text-2xl lg:text-3xl">
      {{ number }}<span class="text-primary">+</span>
    </p>
    <span>{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, useAttrs } from "vue";

const attrs = useAttrs();

const props = defineProps<{
  number: string;
  description: string;
}>();
</script>
