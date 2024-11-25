<template>
  <div class="flex flex-col gap-4 rounded-md bg-zinc-800 p-4 md:gap-8">
    <NuxtImg
      :src="imgUri"
      height="200"
      width="470"
      class="h-40 object-cover"
      alt="Zdjęcie materiału"
    />
    <div class="flex flex-col gap-4">
      <p class="text-xl font-semibold">
        {{ resource.title }}
      </p>
      <ClientOnly>
        <p class="line-clamp-3 font-thin" v-html="resource.lead"></p>
      </ClientOnly>
    </div>
    <div>
      <NuxtLink
        target="_blank"
        :href="resource.author_uri"
        class="font-normal text-primary"
        >{{ resource.author }}</NuxtLink
      >
    </div>
    <NuxtLink :href="fileUri ? fileUri : resource.url" class="mt-auto">
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
import type { Resource } from "./types";
const config = useRuntimeConfig();

const props = defineProps<{
  resource: Resource;
}>();

const imgUri = config.public.APP_BACKEND_BASE_URI + props.resource.image.url;
const fileUri = props.resource.file?.url
  ? config.public.APP_BACKEND_BASE_URI + props.resource.file?.url
  : null;
</script>
