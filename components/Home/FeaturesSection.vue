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
    icon: "streamline:ai-technology-spark",
    title: "Future Technology Blog",
    subtitle:
      "Stay informed with our blog section dedicated to future technology.",
    features: [
      {
        title: "Future Technology Blog",
        description:
          "Stay informed with our blog section dedicated to future technology.",
      },
      {
        title: "Future Technology Blog",
        description:
          "Stay informed with our blog section dedicated to future technology.",
      },
      {
        title: "Future Technology Blog",
        description:
          "Stay informed with our blog section dedicated to future technology.",
      },
      {
        title: "Future Technology Blog",
        description:
          "Stay informed with our blog section dedicated to future technology.",
      },
    ],
  },
  {
    icon: "hugeicons:resources-add",
    title: "Research insights resources",
    subtitle:
      "Stay informed with our blog section dedicated to future technology.",
    features: [
      {
        title: "Future Technology Blog",
        description:
          "Stay informed with our blog section dedicated to future technology.",
      },
      {
        title: "Future Technology Blog",
        description:
          "Stay informed with our blog section dedicated to future technology.",
      },
      {
        title: "Future Technology Blog",
        description:
          "Stay informed with our blog section dedicated to future technology.",
      },
      {
        title: "Future Technology Blog",
        description:
          "Stay informed with our blog section dedicated to future technology.",
      },
    ],
  },
];
</script>

<style scoped></style>
