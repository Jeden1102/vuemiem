<template>
  <div>
    <HomeHero />
    <UiSectionTitle badge="Unlock the Power of" title="FutureTech Features" />
    <HomeFeaturesSection />
    <UiSectionTitle
      badge="A Knowledge Treasure Trove"
      title="Explore FutureTech's In-Depth Blog Posts"
      cta-title="View all blogs"
      cta-url="/blog"
    />
    <BlogViewTeaserSimple :perPage="3" :isPaginated="false" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Home",
  description: "Vue&Nuxt blog",
});
</script>

<style scoped></style>
