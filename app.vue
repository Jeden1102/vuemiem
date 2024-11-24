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

import { setLocale } from "@vee-validate/i18n";
import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import pl from "@vee-validate/i18n/dist/locale/pl.json";
configure({
  generateMessage: localize({
    en,
    pl,
  }),
});

setLocale("pl");

localize({ pl });
</script>
