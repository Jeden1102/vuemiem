<template>
  <div class="bg-zinc-900 py-20">
    <div class="container mx-auto flex flex-col gap-8">
      <BlogViewCategories
        v-if="categories"
        :categories="allBlogCategories"
        v-model="activeCategory"
      />
      <div class="flex flex-col gap-6 divide-y divide-zinc-600">
        <BlogTeaser
          v-if="blogs"
          v-for="blog in blogs"
          :blog="blog"
          :key="blog.slug"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GET_BLOG_CATEGORIES, GET_BLOGS_BY_CATEGORIES } from "~/queries/blogs";
import type {
  BlogCategory,
  BlogCategoriesResponse,
  Blog,
  BlogsResponse,
} from "./types";
import { watch, computed, ref } from "vue";

const { data: categories } =
  await useAsyncQuery<BlogCategoriesResponse>(GET_BLOG_CATEGORIES);

const activeCategory = ref("all");

const allBlogCategories = computed(() => {
  if (!categories.value) {
    return [];
  }
  return [
    {
      name: "All",
      slug: "all",
    },
    ...categories.value?.blogCategories,
  ] as BlogCategory[];
});

const filters = computed(() => {
  const _filters = {
    blog_categories: {
      slug: {},
    },
  };

  if (activeCategory.value !== "all") {
    _filters.blog_categories.slug = {
      eq: activeCategory.value,
    };
  }

  return _filters;
});

const pagination = {
  pageSize: 3,
};

const blogs = ref<Blog[]>([]);

async function fetchBlogs() {
  console.log(filters.value);
  const { data, error } = await useAsyncQuery<BlogsResponse>(
    GET_BLOGS_BY_CATEGORIES,
    {
      filters: filters.value,
      pagination,
    },
  );
  if (data.value) {
    blogs.value = data.value.blogs;
  } else {
  }
}

watch(activeCategory, () => {
  fetchBlogs();
});

fetchBlogs();
</script>
