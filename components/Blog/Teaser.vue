<template>
  <div class="flex gap-4">
    <div class="flex gap-4">
      <NuxtLink
        title="Show my linkedin profile"
        href="https://www.linkedin.com/in/dominik-raducki/"
      >
        <Icon name="mdi:linkedin" size="24" />
      </NuxtLink>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">{{ blog.author?.name }}</p>
        <p v-html="blog.author?.position"></p>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <p>
        {{ useFormattedDate(blog.publishedAt) }}
      </p>
      <p>{{ blog.title }}</p>
      <p v-html="blog.lead"></p>
    </div>
    <NuxtLink :href="`/blog/${blog.slug}`">
      <UiButton variant="dark" class="mt-6 w-full md:w-fit">
        See more
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
import type { Blog } from "./types";

const props = defineProps<{
  blog: Blog;
}>();
</script>
