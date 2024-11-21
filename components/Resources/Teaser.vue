<template>
  <div class="flex flex-col gap-4 py-8 md:flex-row md:gap-8 lg:gap-32">
    <div class="flex flex-col gap-4">
      <p class="text-xl font-semibold">
        {{ resource.title }}
      </p>
      <p class="font-thin" v-html="resource.lead"></p>
    </div>
    <NuxtLink :href="resource.url" class="md:ml-auto">
      <UiButton variant="dark" class="mt-6 w-full min-w-52 md:w-fit">
        Read Blog
        <Icon
          size="24"
          name="material-symbols:arrow-outward"
          class="text-primary"
        />
      </UiButton>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Resource } from "./types";

const props = defineProps<{
  resource: Resource;
}>();
</script>
