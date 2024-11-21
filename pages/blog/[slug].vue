<template>
  <div v-if="blog">
    <UiHero :title="blog?.title" :description="blog.lead" />
    <div
      class="container mx-auto flex max-w-[1200px] flex-col gap-12 py-12 lg:flex-row-reverse"
    >
      <div>
        <div
          class="sticky top-32 flex flex-col gap-8 lg:w-[300px] lg:min-w-[300px]"
        >
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
              <UiButton size="small" v-for="network in networks">
                <SocialShare :network="network" :url="currentURI">
                  <template #label>Udostępnij</template>
                </SocialShare>
              </UiButton>
            </ClientOnly>
          </div>
          <div class="flex flex-col gap-4">
            <p>Table of Contents</p>
            <ul
              class="flex list-disc flex-col gap-4 rounded-md bg-zinc-900 p-6 pl-8"
            >
              <li v-for="item in tableOfContents" :key="item.id">
                <a :href="`#${item.id}`">{{ item.text }}</a>
              </li>
            </ul>
          </div>
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

const tableOfContents = ref<{ id: string; text: string }[]>([]);

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
  generateTableOfContents();
  useCopyButton();
  Prism.highlightAll();
});

function generateTableOfContents() {
  const container = document.createElement("div");
  container.innerHTML = blog.value?.content || "";

  const headers = container.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const toc: { id: string; text: string }[] = [];

  headers.forEach((header, index) => {
    const id = `header-${index + 1}`;
    header.id = id;
    toc.push({
      id,
      text: header.textContent || "",
    });
  });

  tableOfContents.value = toc;

  const blogContent = document.querySelector(".blog-page");
  if (blogContent) {
    blogContent.innerHTML = container.innerHTML;
  }
}

useSeoMeta({
  title: blog.value?.title,
  ogTitle: blog.value?.title,
  description: blog.value?.lead,
  ogDescription: blog.value?.lead,
  ogImage: config.public.APP_BASE_URI + "/vue-logo.webp",
});
</script>
