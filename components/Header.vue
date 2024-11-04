<template>
  <header class="border-y border-zinc-700 bg-zinc-900 px-4 py-5">
    <div class="container mx-auto flex items-center justify-between">
      <UiLogo />
      <button @click="toggleMenu" class="z-20 md:hidden">
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
            `absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-zinc-800 transition-all md:static md:w-fit md:flex-row md:bg-transparent lg:gap-12`,
            { 'left-full md:left-0': !isMenuToggled },
          )
        "
      >
        <NuxtLink
          @click="toggleMenu"
          href="/"
          class="text-2xl md:text-base md:font-light"
          >Home</NuxtLink
        >
        <NuxtLink
          @click="toggleMenu"
          href="/blog"
          class="text-2xl md:text-base md:font-light"
          >Blog</NuxtLink
        >
        <NuxtLink
          @click="toggleMenu"
          href="/resources"
          class="text-2xl md:text-base md:font-light"
          >Resources</NuxtLink
        >
        <UiButton class="mt-2 md:ml-20 md:mt-0">
          <NuxtLink
            @click="toggleMenu"
            href="/contact"
            class="text-2xl md:text-base md:font-light"
            >Contact</NuxtLink
          >
        </UiButton>
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
