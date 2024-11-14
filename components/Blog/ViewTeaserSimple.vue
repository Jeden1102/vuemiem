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

      <div
        v-if="isPaginated && totalPages > 1"
        class="mt-6 flex justify-center gap-4"
      >
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="rounded bg-zinc-700 px-4 py-2 text-white"
        >
          Previous
        </button>
        <span class="text-white">{{ currentPage }} / {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="rounded bg-zinc-700 px-4 py-2 text-white"
        >
          Next
        </button>
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
import { defineProps } from "vue";

const props = defineProps<{
  perPage: number;
  isPaginated: boolean;
}>();

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

const pagination = ref({
  pageSize: props.perPage,
  page: 1,
});

const blogs = ref<Blog[]>([]);
const totalPages = ref(1);
const currentPage = ref(1);

async function fetchBlogs() {
  const { data, error } = await useAsyncQuery<BlogsResponse>(
    GET_BLOGS_BY_CATEGORIES,
    {
      filters: filters.value,
      pagination: pagination.value,
    },
  );

  if (data.value) {
    blogs.value = data.value.blogs;
    console.log(data.value);
    // @todo -> dynamic total sum.
    totalPages.value = Math.ceil(6 / pagination.value.pageSize);
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    pagination.value.page = currentPage.value;
    fetchBlogs();
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    pagination.value.page = currentPage.value;
    fetchBlogs();
  }
}

watch([activeCategory, currentPage], () => {
  fetchBlogs();
});

fetchBlogs();
</script>
