<template>
  <div
    v-bind="attrs"
    class="container mx-auto flex flex-col justify-between gap-8 lg:flex-row lg:items-center"
  >
    <div class="flex-1">
      <Icon :name="icon" size="24" class="text-primary" data-aos="fade-up" />
      <p
        class="my-4 mt-7 font-kumbh text-2xl font-normal lg:text-3xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {{ title }}
      </p>
      <p data-aos="fade-up" data-aos-delay="150">
        {{ subtitle }}
      </p>
    </div>
    <div class="grid flex-1 gap-3 md:grid-cols-2 md:gap-8">
      <UiCard
        v-for="(feature, idx) in features"
        data-aos="zoom-in"
        :data-aos-delay="idx * 100"
      >
        <p class="text-lg font-normal">{{ title }}</p>
        <p class="mt-6 font-extralight">{{ subtitle }}</p>
      </UiCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, useAttrs } from "vue";

const attrs = useAttrs();

type Feature = {
  title: string;
  description: string;
};

const props = defineProps<{
  title: string;
  subtitle: string;
  icon: string;
  features: Feature[];
}>();
</script>
