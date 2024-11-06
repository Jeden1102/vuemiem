<template>
  <div class="bg-zinc-800 pb-20">
    <div class="container mx-auto">
      <div>
        <UiSectionTitle
          title="Be Part of the Future Tech Revolution"
          badge="Learn, Connect, and Innovate"
          icon="carbon:software-resource-cluster"
          description="Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers."
        />
      </div>
      <div
        class="grid grid-cols-1 gap-4 rounded-sm bg-zinc-950 p-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <UiFeatureCard
          title="Resource Access"
          description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports."
          iconRight="material-symbols-light:check"
          data-aos="fade-up"
          data-aos-delay="100"
          class="rounded-md border-none bg-zinc-900"
        />
        <UiFeatureCard
          title="Community Forum"
          description="Join our active community forum to discuss industry trends, share insights, and collaborate with peers."
          iconRight="material-symbols-light:check"
          data-aos="fade-up"
          data-aos-delay="200"
          class="rounded-md border-none bg-zinc-900"
        />
        <UiFeatureCard
          title="Tech Events"
          description="Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge."
          iconRight="material-symbols-light:check"
          data-aos="fade-up"
          data-aos-delay="300"
          class="rounded-md border-none bg-zinc-900"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
