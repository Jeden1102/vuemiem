<template>
  <div>
    <HomeHero />
    <UiSectionTitle
      badge="Odkryj możliwości"
      title="Najlepsze funkcje w Vue i Nuxt"
    />
    <HomeFeaturesSection />
    <UiSectionTitle
      badge="Twoja biblioteka wiedzy"
      title="Zanurz się w artykułach o Vue, Nuxt i web dev"
      cta-title="Przeglądaj wszystkie artykuły"
      cta-url="/blog"
    />
    <BlogViewTeaserSimple :perPage="3" :isPaginated="false" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Vue & Nuxt Blog - Poradniki i Nowości",
  description:
    "Poznaj najnowsze artykuły o Vue.js, Nuxt, JavaScript i technologiach frontendowych. Poradniki, nowości i praktyczne rozwiązania dla developerów.",
});
</script>
