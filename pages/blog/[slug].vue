<template>
  <div v-if="blog">
    <UiHero :title="blog?.title" :description="blog.lead" />
    <div class="container mx-auto flex flex-col gap-12 py-12">
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <p class="font-thin">Publication Date</p>
          <p>{{ useFormattedDate(blog.publishedAt) }}</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-thin">Category</p>
          <div v-if="Array.isArray(blog.blog_categories)">
            <p v-for="blogCategory in blog.blog_categories">
              {{ blogCategory.name }}
            </p>
          </div>
          <p v-else>{{ blog.blog_categories.name }}</p>
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
      <div class="blog-page" v-html="blog.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GET_BLOG_BY_SLUG } from "~/queries/blogs";
import type { BlogResponse, Blog } from "~/components/Blog/types";
const route = useRoute();

const blog = ref<null | Blog>(null);

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
</script>
