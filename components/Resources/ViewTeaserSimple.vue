<template>
  <div class="bg-zinc-900 py-20">
    <div class="container mx-auto flex flex-col gap-8">
      <p class="text-2xl" ref="blogSection">{{ title }}</p>
      <ResourcesViewCategories
        v-if="categories && !baseCategory"
        :categories="allBlogCategories"
        v-model="activeCategory"
      />
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ResourcesTeaser
          v-if="resources && !isLoading"
          v-for="resource in resources"
          :resource="resource"
          :key="resource.title"
        />
        <ResourcesLoader v-else v-for="i in 6" :key="i" />
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
import {
  GET_RESOURCES_BY_CATEGORIES,
  GET_RESOURCES_CATEGORIES,
} from "~/queries/resources";
import type {
  ResourceCategory,
  ResourcesCategoriesResponse,
  Resource,
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

const { data: categories } = await useAsyncQuery<ResourcesCategoriesResponse>(
  GET_RESOURCES_CATEGORIES,
);

const activeCategory = ref(props.baseCategory || "all");

const blogSection = ref();
const isFirstFetch = ref(true);

const allBlogCategories = computed(() => {
  if (!categories.value) {
    return [];
  }
  return [
    {
      name: "All",
      slug: "all",
    },
    ...categories.value?.resourceCategories,
  ] as ResourceCategory[];
});

const filters = computed(() => {
  const _filters = {
    resource_categories: {
      slug: {},
    },
  };

  if (activeCategory.value !== "all") {
    _filters.resource_categories.slug = {
      eq: activeCategory.value,
    };
  }

  return _filters;
});

const pagination = ref({
  pageSize: props.perPage,
  page: 1,
});

const resources = ref<Resource[]>([]);
const isLoading = ref(true);
const totalPages = ref(1);

async function fetchResources() {
  isLoading.value = true;
  const { data, error } = await useAsyncQuery<BlogsResponse>(
    GET_RESOURCES_BY_CATEGORIES,
    {
      filters: filters.value,
      pagination: pagination.value,
    },
  );

  if (data.value) {
    resources.value = data.value.resources_connection.nodes;
    totalPages.value = Math.ceil(
      data.value.resources_connection.pageInfo.total /
        pagination.value.pageSize,
    );
  }
  isLoading.value = false;
  if (!isFirstFetch.value) {
    window.scroll({
      top: blogSection.value.offsetTop - 120,
      behavior: "smooth",
    });
  }

  isFirstFetch.value = false;
}

function handlePageChange(num: number) {
  pagination.value.page = num;
  fetchResources();
}

watch(activeCategory, () => {
  pagination.value.page = 1;
  fetchResources();
});

fetchResources();
</script>
