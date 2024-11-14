<template>
  <div class="flex flex-col gap-4 py-8 md:flex-row md:gap-8 lg:gap-32">
    <div class="flex w-60 gap-4" v-if="blog.author">
      <NuxtLink
        title="Show my linkedin profile"
        target="_blank"
        :href="blog.author.linkedin"
        class="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-zinc-800"
      >
        <Icon name="mdi:linkedin" size="24" />
      </NuxtLink>
      <div class="flex flex-col gap-2">
        <p class="font-semibold">
          {{ blog.author.name }} {{ blog.author.surname }}
        </p>
        <div v-html="blog.author.position"></div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <p class="md:mb-4">
        {{ useFormattedDate(blog.publishedAt) }}
      </p>
      <NuxtLink :href="`/blog/${blog.slug}`" class="text-xl font-semibold">
        {{ blog.title }}</NuxtLink
      >
      <p class="font-thin" v-html="blog.lead"></p>
    </div>
    <NuxtLink :href="`/blog/${blog.slug}`" class="md:ml-auto">
      <UiButton variant="dark" class="mt-6 w-full md:w-fit">
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
import type { Blog } from "./types";

const props = defineProps<{
  blog: Blog;
}>();

console.log(props.blog.author.position, props.blog.author);
</script>
