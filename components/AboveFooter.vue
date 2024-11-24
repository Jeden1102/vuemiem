<template>
  <div class="bg-zinc-800 pb-20">
    <div class="container mx-auto">
      <div>
        <UiSectionTitle
          title="Dołącz do społeczności Vue i Nuxt"
          badge="Ucz się, dziel się wiedzą i rozwijaj"
          icon="carbon:software-resource-cluster"
          description="Zanurz się w świecie nowoczesnych technologii webowych. Odkrywaj nasze zasoby, współpracuj z innymi entuzjastami technologii i twórz innowacje. Stań się częścią dynamicznej społeczności miłośników frontendu."
        />
      </div>
      <div
        class="grid grid-cols-1 gap-4 rounded-sm bg-zinc-950 p-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <UiFeatureCard
          title="Zasoby edukacyjne"
          description="Uzyskaj dostęp do szerokiej gamy materiałów, takich jak ebooki, poradniki czy raporty branżowe."
          iconRight="material-symbols-light:check"
          data-aos="fade-up"
          data-aos-delay="100"
          class="rounded-md border-none bg-zinc-900"
        />
        <UiFeatureCard
          title="Forum społeczności"
          description="Dołącz do naszego aktywnego forum, aby dyskutować o trendach w branży, wymieniać się doświadczeniami i współpracować."
          iconRight="material-symbols-light:check"
          data-aos="fade-up"
          data-aos-delay="200"
          class="rounded-md border-none bg-zinc-900"
        />
        <UiFeatureCard
          title="Wydarzenia technologiczne"
          description="Bądź na bieżąco z nadchodzącymi wydarzeniami, webinarami i konferencjami, które poszerzą Twoją wiedzę."
          iconRight="material-symbols-light:check"
          data-aos="fade-up"
          data-aos-delay="300"
          class="rounded-md border-none bg-zinc-900"
        />
      </div>
    </div>
  </div>
</template>
