<template>
  <section class="flex min-h-[calc(100vh-90px)] flex-col">
    <div
      class="container mx-auto flex flex-col gap-4 py-4 md:min-h-[60vh] md:flex-row md:py-0 lg:gap-16"
    >
      <div class="my-auto flex flex-col gap-4 pt-8 lg:max-w-[720px]">
        <h1
          class="font-kumbh text-3xl font-normal md:text-5xl lg:text-6xl"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Odkrywaj nowinki z zakresu Vue, Nuxt i technologii frontendowych
        </h1>
        <p class="text-sm md:text-base" data-aos="fade-up" data-aos-delay="300">
          Witamy w centrum wiedzy na temat Vue, Nuxt i frontendowego ekosystemu.
          Na naszym blogu znajdziesz artykuły, tutoriale i nowinki, które pomogą
          Ci rozwijać się w świecie nowoczesnego web developmentu.
        </p>
        <div class="grid grid-cols-3 border-t border-slate-800 md:mt-20">
          <Number
            number="50"
            description="Artykułów w temacie Vue i Nuxt"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Number
            class="border-x border-slate-800"
            number="5k"
            description="Wizyt miesięcznie"
            data-aos="fade-up"
            data-aos-delay="350"
          />
          <Number
            number="1k"
            description="Zadowolonych użytkowników"
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
        <div class="mt-auto pb-20" data-aos="fade-up" data-aos-delay="300">
          <p class="mb-2 text-lg font-normal">Przeglądaj artykuły</p>
          <p>
            Więcej niż 1,000 artykułów na temat Vue, Nuxt i trendów w web
            developmentzie.
          </p>
          <NuxtLink href="/blog">
            <UiButton variant="dark" class="mt-6 w-full md:w-fit">
              Przejdź do bloga
              <Icon
                size="24"
                name="material-symbols:arrow-outward"
                class="text-primary"
              />
            </UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mt-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <UiFeatureCard
        title="Tutoriale o Vue i Nuxt"
        subtitle="Nauka poprzez praktykę"
        description="Krok po kroku przewodniki dotyczące Vue, Nuxt i innych technologii frontendowych."
        iconTop="material-symbols:library-books"
        iconRight="material-symbols-light:check"
        data-aos="fade-up"
        data-aos-delay="300"
      />
      <UiFeatureCard
        title="Aktualności w ekosystemie Vue"
        subtitle="Bądź na bieżąco"
        description="Śledź najnowsze aktualizacje i nowości w świecie Vue.js, Nuxt i innych frameworków."
        iconTop="material-symbols:news"
        iconRight="material-symbols-light:check"
        data-aos="fade-up"
        data-aos-delay="400"
      />
      <UiFeatureCard
        title="Społeczność deweloperów"
        subtitle="Połącz się z innymi"
        description="Dołącz do społeczności, dyskutuj, wymieniaj doświadczenia i ucz się razem z innymi."
        iconTop="material-symbols:groups"
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
