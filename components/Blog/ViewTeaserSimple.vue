<template>
  <div class="bg-zinc-900 py-20">
    <div class="container mx-auto flex flex-col gap-8">
      <p class="text-2xl">{{ title }}</p>
      <BlogViewCategories
        v-if="categories && !baseCategory"
        :categories="allBlogCategories"
        v-model="activeCategory"
      />
      <div class="flex flex-col gap-6 divide-y divide-zinc-600">
        <BlogTeaser
          v-if="blogs && !isLoading"
          v-for="blog in blogs"
          :blog="blog"
          :key="blog.slug"
        />
        <BlogLoader v-else v-for="i in 5" :key="i" />
      </div>

      <UiPagination
        v-if="isPaginated"
        :totalPages="totalPages"
        :currentPage="pagination.page"
        @pageChanged="(num: number) => handlePageChange(num)"
      />
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
import { defineProps } from "vue";

const props = defineProps<{
  perPage: number;
  isPaginated: boolean;
  title?: string;
  baseCategory?: string;
}>();

const { data: categories } =
  await useAsyncQuery<BlogCategoriesResponse>(GET_BLOG_CATEGORIES);

const activeCategory = ref(props.baseCategory || "all");

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

const pagination = ref({
  pageSize: props.perPage,
  page: 1,
});

const blogs = ref<Blog[]>([]);
const isLoading = ref(true);
const totalPages = ref(1);

async function fetchBlogs() {
  isLoading.value = true;
  const { data, error } = await useAsyncQuery<BlogsResponse>(
    GET_BLOGS_BY_CATEGORIES,
    {
      filters: filters.value,
      pagination: pagination.value,
    },
  );

  if (data.value) {
    blogs.value = data.value.blogs_connection.nodes;
    totalPages.value = Math.ceil(
      data.value.blogs_connection.pageInfo.total / pagination.value.pageSize,
    );
  }
  isLoading.value = false;
}

function handlePageChange(num: number) {
  pagination.value.page = num;
  fetchBlogs();
}

watch(activeCategory, () => {
  pagination.value.page = 1;
  fetchBlogs();
});

fetchBlogs();
</script>
