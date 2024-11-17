<template>
  <NuxtLayout>
    <div class="container mx-auto flex flex-col items-center gap-4 py-20">
      <p class="text-2xl">Ooopsss...</p>
      <h1
        class="inline-block bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-8xl font-bold text-transparent"
      >
        {{ error?.statusCode }}
      </h1>
      <p class="text-2xl">{{ error?.message }}</p>
      <UiButton @click="handleError">Take me home</UiButton>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>
