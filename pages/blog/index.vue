<template>
  <div>
    <UiHero
      title="Zanurz się w świecie frontendu"
      description="Odkryj nasze artykuły o Vue, Nuxt i technologiach webowych. Poznaj najnowsze trendy, praktyczne poradniki i nowinki ze świata frontend developmentu. Bez względu na Twój poziom zaawansowania, znajdziesz tu inspirację i wiedzę, która przyspieszy Twój rozwój."
    />
    <BlogViewTeaserSimple :perPage="5" :isPaginated="true" :grid="true" />
  </div>
</template>
