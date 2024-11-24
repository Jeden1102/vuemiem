<template>
  <div>
    <UiHero
      title="Odkryj świat wiedzy o Vue i Nuxt"
      description="Zanurz się w świecie technologii frontendowych dzięki naszej kolekcji zasobów. Poznaj najnowsze trendy, rozwiązania i poradniki związane z Vue.js, Nuxt i web developmentem. Niezależnie od tego, czy jesteś początkującym, czy doświadczonym developerem, nasze zasoby są kluczem do Twojego rozwoju."
    />
    <ResourcesViewTeaserSimple :perPage="10" :isPaginated="true" />
  </div>
</template>
