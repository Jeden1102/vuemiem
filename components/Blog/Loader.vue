<template>
  <div
    class="flex animate-pulse flex-col gap-4 py-8 shadow md:flex-row md:gap-8 lg:gap-32"
  >
    <div class="flex w-52 min-w-52 gap-4">
      <div
        class="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-zinc-800"
      ></div>
      <div class="flex flex-col gap-2">
        <p class="h-4 w-3/4 bg-zinc-600 md:w-40"></p>
        <div class="h-8 w-3/4 bg-zinc-600 md:w-40"></div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <p class="h-4 w-3/4 bg-zinc-600 md:mb-4 md:w-40"></p>
      <div class="h-8 w-72 bg-zinc-600"></div>
      <p class="h-12 w-72 bg-zinc-600"></p>
    </div>
    <div class="md:ml-auto">
      <UiButton variant="dark" class="h-12 w-52 bg-zinc-600"> </UiButton>
    </div>
  </div>
</template>
