<template>
  <NuxtLoadingIndicator color="#00DC82" :height="2" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: "pl",
  },
});
</script>
