<template>
  <div :class="cn(`bg-zinc-800 py-10 md:py-20`)" v-bind="attrs">
    <div
      class="container mx-auto flex flex-col justify-between gap-8 sm:flex-row sm:items-center"
    >
      <div>
        <UiBadge variant="dark" data-aos="fade-up">{{ badge }}</UiBadge>
        <p
          class="mt-3 font-kumbh text-2xl font-normal lg:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ title }}
        </p>
      </div>
      <NuxtLink
        v-if="ctaTitle && ctaUrl"
        :href="ctaUrl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <UiButton variant="dark" class="mt-6 w-full md:w-fit">
          {{ ctaTitle }}
          <Icon
            size="24"
            name="material-symbols:arrow-outward"
            class="text-primary"
          />
        </UiButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, useAttrs } from "vue";

const attrs = useAttrs();

const props = defineProps<{
  title: string;
  badge: string;
  ctaUrl?: string;
  ctaTitle?: string;
}>();
</script>
