<template>
  <div></div>
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
console.log(data.value);
</script>
