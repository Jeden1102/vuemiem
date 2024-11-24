<template>
  <div class="flex flex-col gap-10 py-10 md:gap-20">
    <template v-for="feature in features">
      <HomeFeatures
        :title="feature.title"
        :icon="feature.icon"
        :subtitle="feature.subtitle"
        :features="feature.features"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: "mdi:vuejs",
    title: "Blog o Vue, Nuxt i frontendzie",
    subtitle:
      "Poznaj najnowsze artykuły o Vue, Nuxt i technologiach frontendowych. Od praktycznych tutoriali po najświeższe aktualności.",
    features: [
      {
        title: "Porady i tutoriale",
        description:
          "Dowiedz się, jak efektywnie korzystać z Vue i Nuxt w codziennej pracy dzięki praktycznym wskazówkom.",
      },
      {
        title: "Nowości w ekosystemie",
        description:
          "Bądź na bieżąco z aktualizacjami, nowymi wersjami frameworków i trendami w frontendzie.",
      },
      {
        title: "Przykłady użycia",
        description:
          "Zobacz, jak rozwiązywać rzeczywiste problemy dzięki przykładom kodu i gotowym rozwiązaniom.",
      },
      {
        title: "Przemyślenia eksperta",
        description:
          "Poznaj moje doświadczenia, refleksje i najlepsze praktyki w pracy z technologiami webowymi.",
      },
    ],
  },
  {
    icon: "heroicons-solid:document-text",
    title: "Materiały i zasoby",
    subtitle:
      "Zasoby do nauki, w tym tutoriale, cheetsheety i inne pliki wspierające Twoją naukę Vue i Nuxt.",
    features: [
      {
        title: "Szczegółowe tutoriale",
        description:
          "Krok po kroku przeprowadź swoje projekty dzięki naszym dokładnym instrukcjom.",
      },
      {
        title: "Cheatsheety",
        description:
          "Pobierz użyteczne ściągi dla Vue, Nuxt i innych narzędzi frontendowych, które usprawnią Twoją pracę.",
      },
      {
        title: "Darmowe pliki",
        description:
          "Skorzystaj z gotowych komponentów, szablonów i zasobów, które możesz użyć w swoich projektach.",
      },
      {
        title: "Materiały do pobrania",
        description:
          "Raporty, e-booki i inne wartościowe pliki, które wzbogacą Twoją wiedzę.",
      },
    ],
  },
];
</script>
