<template>
  <div class="bg-zinc-900 py-20"></div>
</template>

<script lang="ts" setup>
import { GET_BLOG_CATEGORIES, GET_BLOGS_BY_CATEGORIES } from "~/queries/blogs";

// const { data } = await useAsyncQuery(GET_BLOG_CATEGORIES);
// console.log(data, data.value);

const filters = {
  blog_categories: {
    name: {
      eq: "Vue",
    },
  },
};

const pagination = {
  pageSize: 3,
};

const { data, error } = await useAsyncQuery(GET_BLOGS_BY_CATEGORIES, {
  filters,
  pagination,
});

console.log(data.value);
</script>

<style scoped></style>
