<template>
  <div v-if="blog">
    <UiHero :title="blog?.title" :description="blog.lead" />
    <div
      class="container mx-auto flex max-w-[1200px] flex-col gap-12 py-12 lg:flex-row-reverse"
    >
      <div class="flex flex-col gap-8 lg:w-[300px]">
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <p class="font-thin">Publication Date</p>
            <p>{{ useFormattedDate(blog.publishedAt) }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-thin">Category</p>
            <p v-for="blogCategory in blog.blog_categories">
              {{ blogCategory.name }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-thin">Reading time</p>
            <p>{{ blog.reading_time }} min.</p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-thin">Author</p>
            <p>{{ blog.author.name }} {{ blog.author.surname }}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-x-4 gap-y-2">
          <p class="mb-2 w-full">Share this blog!</p>
          <ClientOnly>
            <UiButton v-for="network in networks">
              <SocialShare :network="network" :url="currentURI">
                <template #label>Udostępnij</template>
              </SocialShare>
            </UiButton>
          </ClientOnly>
        </div>
      </div>

      <div class="blog-page w-full flex-1" v-html="blog.content"></div>
    </div>
    <BlogViewTeaserSimple
      title="Similiar news"
      :perPage="3"
      :isPaginated="false"
      :baseCategory="blog.blog_categories[0].slug"
    />
  </div>
</template>

<script setup lang="ts">
import { GET_BLOG_BY_SLUG } from "~/queries/blogs";
import type { BlogResponse, Blog } from "~/components/Blog/types";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const route = useRoute();
const blog = ref<null | Blog>(null);
const config = useRuntimeConfig();

const currentURI = computed(() => {
  return window.location.href;
});

const networks = ["facebook", "x", "linkedin"];

const { data } = await useAsyncQuery<BlogResponse>(GET_BLOG_BY_SLUG, {
  filters: {
    slug: {
      eq: route.params.slug,
    },
  },
});

if (data.value?.blogs[0]) {
  blog.value = data.value?.blogs[0];
} else {
  showError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}

onMounted(() => {
  Prism.highlightAll();

  document.querySelectorAll("pre").forEach((pre) => {
    const button = document.createElement("button");
    button.textContent = "Copy";
    button.className = "copy-btn";
    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText;
      try {
        await navigator.clipboard.writeText(code || "");
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
    pre.style.position = "relative";
    pre.appendChild(button);
  });
});

useSeoMeta({
  title: blog.value?.title,
  ogTitle: blog.value?.title,
  description: blog.value?.lead,
  ogDescription: blog.value?.lead,
  ogImage: config.public.APP_BASE_URI + "/vue-logo.webp",
});
</script>
