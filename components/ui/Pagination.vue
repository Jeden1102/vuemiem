<template>
  <div
    v-if="totalPages > 1"
    class="mt-6 flex items-center justify-center gap-4"
  >
    <UiButton @click="goToPage(1)" :disabled="currentPage === 1">
      <Icon
        class="text-2xl"
        name="material-symbols:keyboard-double-arrow-left"
      />
    </UiButton>

    <UiButton @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
      <Icon class="text-2xl" name="material-symbols:chevron-left-rounded" />
    </UiButton>

    <span class="text-zinc-100">{{ currentPage }} / {{ totalPages }}</span>

    <UiButton
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      <Icon class="text-2xl" name="material-symbols:chevron-right-rounded" />
    </UiButton>

    <UiButton
      @click="goToPage(totalPages)"
      :disabled="currentPage === totalPages"
    >
      <Icon
        class="text-2xl"
        name="material-symbols:keyboard-double-arrow-right"
      />
    </UiButton>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();

const emit = defineEmits<{
  (e: "pageChanged", newPage: number): void;
}>();

function goToPage(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit("pageChanged", page);
  }
}
</script>
