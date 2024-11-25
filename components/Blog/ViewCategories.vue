<template>
  <div class="flex flex-wrap gap-4">
    <UiButton
      :variant="activeCategory === category.slug ? 'primary' : 'gray'"
      size="large"
      v-for="category in categories"
      @click="setActiveCategory(category.slug)"
    >
      {{ category.name }}
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { BlogCategory } from "./types";

const activeCategory = defineModel();

defineProps<{
  categories: BlogCategory[];
}>();

const setActiveCategory = (slug: string) => {
  activeCategory.value = slug;
};
</script>
