<template>
  <div
    :class="cn(`w-fit rounded-sm border border-zinc-800 bg-zinc-900 p-10`)"
    v-bind="attrs"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>
