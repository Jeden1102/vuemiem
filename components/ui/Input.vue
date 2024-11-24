<template>
  <div class="flex flex-col gap-2">
    <label :for="name" class="text-zinc-200">
      {{ label }}
      <span v-if="required">*</span>
    </label>
    <textarea
      v-if="type === 'textarea'"
      :class="classes"
      :placeholder="placeholder || label"
      v-model="value"
      rows="7"
    ></textarea>
    <input
      v-else
      :class="classes"
      :placeholder="placeholder || label"
      v-model="value"
      :type="type || 'text'"
    />
    <span class="text-red-400">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import clsx from "clsx";
import { useField } from "vee-validate";

const classes = clsx(
  "rounded-md border border-zinc-600 bg-zinc-700 px-2 py-2 outline-none placeholder:text-zinc-500 focus:border-zinc-500",
);

const props = defineProps({
  name: String,
  type: String,
  label: String,
  placeholder: String,
  required: Boolean,
});

const { value, errorMessage } = useField(() => props.name);
</script>
