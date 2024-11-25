<template>
  <div class="flex flex-col gap-4 rounded-md bg-zinc-800 p-4 md:gap-8">
    <NuxtImg
      :src="imgUri"
      height="200"
      width="470"
      class="h-40 object-cover"
      alt="Zdjęcie bloga"
    />
    <div class="flex flex-col gap-4">
      <p class="text-xl font-semibold">
        {{ blog.title }}
      </p>
      <ClientOnly>
        <p class="font-thin" v-html="blog.lead"></p>
      </ClientOnly>
    </div>
    <NuxtLink :href="`/blog/${blog.slug}`" class="mt-auto">
      <UiButton variant="dark" class="w-full min-w-52">
        Sprawdź
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
const config = useRuntimeConfig();

const props = defineProps<{
  blog: Blog;
}>();

const imgUri = props.blog.image?.url
  ? config.public.APP_BACKEND_BASE_URI + props.blog.image?.url
  : config.public.APP_BASE_URI + "/vue-logo.webp";
</script>
