<template>
  <header
    class="fixed left-0 top-0 z-10 w-full border-y border-zinc-700 bg-zinc-900 px-4 py-5"
  >
    <div class="container mx-auto flex items-center justify-between">
      <UiLogo />
      <button
        title="Toggle side menu"
        @click="toggleMenu"
        class="z-20 md:hidden"
      >
        <Icon
          v-if="!isMenuToggled"
          name="fluent:navigation-20-filled"
          size="24"
        />
        <Icon v-else name="material-symbols:close-rounded" size="24" />
      </button>
      <nav
        :class="
          cn(
            `fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-zinc-800 transition-all md:static md:w-fit md:flex-row md:bg-transparent lg:gap-12`,
            { '-top-full md:left-0': !isMenuToggled },
          )
        "
      >
        <NuxtLink
          @click="toggleMenu"
          href="/"
          class="text-2xl md:text-base md:font-light"
          >Strona główna</NuxtLink
        >
        <NuxtLink
          @click="toggleMenu"
          href="/blog"
          class="text-2xl md:text-base md:font-light"
          >Blog</NuxtLink
        >
        <NuxtLink
          @click="toggleMenu"
          href="/zasoby"
          class="text-2xl md:text-base md:font-light"
          >Materiały</NuxtLink
        >

        <NuxtLink
          @click="toggleMenu"
          href="kontakt"
          class="text-2xl md:text-base md:font-light"
        >
          <UiButton class="mt-2 md:ml-20 md:mt-0">Kontakt</UiButton>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuToggled = ref(false);

const toggleMenu = () => {
  isMenuToggled.value = !isMenuToggled.value;
};
</script>
