<template>
  <footer class="bg-zinc-950 px-4 py-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        <div>
          <p class="mb-4 font-bold">Nawigacja</p>
          <ul class="flex flex-col gap-3 text-zinc-300">
            <li>
              <NuxtLink href="/">Strona główna</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/blog">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/zasoby">Materiały</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/kontakt">Kontakt</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mt-6 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-zinc-300 md:mt-20 md:flex-row"
      >
        <NuxtLink
          title="Zobacz mój profil na LinkedIn"
          class="md:order-2"
          href="https://www.linkedin.com/in/dominik-raducki/"
        >
          <Icon name="mdi:linkedin" size="24" />
        </NuxtLink>
        <div class="flex gap-4 md:order-1">
          <NuxtLink href="/">Regulamin</NuxtLink>
          <NuxtLink href="/">Polityka prywatności</NuxtLink>
        </div>
        <p class="md:order-3">
          &copy {{ currentYear }} vuemiem. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
