<template>
  <footer class="bg-zinc-950 px-4 py-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        <div>
          <p class="mb-4 font-bold">Navigation</p>
          <ul class="flex flex-col gap-3 text-zinc-300">
            <li>
              <NuxtLink href="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Resources</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Contact</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="mb-4 font-bold">Blog</p>
          <ul class="flex flex-col gap-3 text-zinc-300">
            <li>
              <NuxtLink href="/">Vue</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Nuxt</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Tips</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Others</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="mb-4 font-bold">Resources</p>
          <ul class="flex flex-col gap-3 text-zinc-300">
            <li>
              <NuxtLink href="/">Articles</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Videos</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Files</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Others</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mt-6 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-zinc-300 md:mt-20 md:flex-row"
      >
        <NuxtLink
          title="Show my linkedin profile"
          class="md:order-2"
          href="https://www.linkedin.com/in/dominik-raducki/"
        >
          <Icon name="mdi:linkedin" size="24" />
        </NuxtLink>
        <div class="flex gap-4 md:order-1">
          <NuxtLink href="/">Terms&Conditions</NuxtLink>
          <NuxtLink href="/">Privacy Policy</NuxtLink>
        </div>
        <p class="md:order-3">
          &copy {{ currentYear }} vuemiem. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
