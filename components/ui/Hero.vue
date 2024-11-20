<template>
  <div
    class="bg-gradient-to-r from-blue-500 to-green-500 py-8 text-white md:py-20"
  >
    <div class="container mx-auto flex flex-col gap-4 md:flex-row md:items-end">
      <div class="mr-6 flex min-w-[200px] max-w-[40%] flex-col">
        <h1
          class="font-dmSerifText mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl"
        >
          {{ title }}
        </h1>
      </div>
      <ClientOnly>
        <p class="flex-1 text-lg leading-relaxed" v-html="description"></p>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  description: string;
}>();
</script>

<style scoped></style>
