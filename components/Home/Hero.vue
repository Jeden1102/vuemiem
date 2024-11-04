<template>
  <section class="flex min-h-[calc(100vh-90px)] flex-col">
    <div
      class="container mx-auto flex flex-col gap-4 py-4 md:min-h-[60vh] md:flex-row md:py-0 lg:gap-16"
    >
      <div class="my-auto flex flex-col gap-4 lg:max-w-[720px]">
        <p class="font-kumbh text-lg" data-aos="fade-up" data-aos-delay="200">
          Your Journey to Tomorrow Begins Here
        </p>
        <h1
          class="font-kumbh text-3xl font-normal md:text-5xl lg:text-6xl"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Explore the Frontiers of Artificial Intelligence
        </h1>
        <p class="text-sm md:text-base" data-aos="fade-up" data-aos-delay="300">
          Welcome to the epicenter of AI innovation. FutureTech AI News is your
          passport to a world where machines think, learn, and reshape the
          future.
        </p>
        <div class="grid grid-cols-3 border-t border-slate-800 md:mt-20">
          <Number
            number="300"
            description="Resources available"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Number
            class="border-x border-slate-800"
            number="12k"
            description="Blogs already posted"
            data-aos="fade-up"
            data-aos-delay="350"
          />
          <Number
            number="10k"
            description="Active users now"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>
      </div>
      <div class="relative flex flex-col overflow-hidden pt-52 md:pt-0">
        <client-only>
          <div class="absolute -left-24 -top-24">
            <Vue3Lottie
              animationLink="/lottie/home-hero.json"
              :height="300"
              :width="300"
            />
          </div>
        </client-only>
        <div class="mt-auto" data-aos="fade-up" data-aos-delay="300">
          <p class="mb-2 text-lg font-normal">Explore Articles</p>
          <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
          <UiButton variant="dark" class="mt-6 w-full md:w-fit">
            Explore blogs
            <Icon
              size="24"
              name="material-symbols:arrow-outward"
              class="text-primary"
            />
          </UiButton>
        </div>
      </div>
    </div>
    <div class="mt-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <UiFeatureCard
        title="Latest News Updates"
        subtitle="Stay Current"
        description="Over 1,000 articles published monthly"
        iconTop="material-symbols:breaking-news-alt-1"
        iconRight="material-symbols-light:check"
        data-aos="fade-up"
        data-aos-delay="300"
      />
      <UiFeatureCard
        title="Latest News Updates"
        subtitle="Stay Current"
        description="Over 1,000 articles published monthly"
        iconTop="material-symbols:breaking-news-alt-1"
        iconRight="material-symbols-light:check"
        data-aos="fade-up"
        data-aos-delay="400"
      />
      <UiFeatureCard
        title="Latest News Updates"
        subtitle="Stay Current"
        description="Over 1,000 articles published monthly"
        iconTop="material-symbols:breaking-news-alt-1"
        iconRight="material-symbols-light:check"
        data-aos="fade-up"
        data-aos-delay="500"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
</script>

<style scoped></style>
