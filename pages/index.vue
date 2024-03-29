<script lang="ts" setup>
import { type Product } from "@/repository/modules/product";

const { $api } = useNuxtApp();
const products = ref<Product[]>([]);

const search = ref();
const sort = ref();
const categories = ref<string[]>([]);

const isLoading = ref(false);

watch([search, categories], async () => {
  await fetchProducts();

  products.value = products.value.filter((product) => {
    if (
      search.value &&
      !product.title.toLowerCase().includes(search.value.toLowerCase())
    ) {
      return false;
    }

    if (
      categories.value.length &&
      !categories.value.includes(product.category)
    ) {
      return false;
    }

    return true;
  });
});

watch(sort, async () => {
  await fetchProducts(sort.value.value);
});

const fetchProducts = async (sort: 'asc' | 'desc' = 'asc') => {
  isLoading.value = true;
  const response = await $api.product.index(sort);
  products.value = response;
  isLoading.value = false;
};

await fetchProducts();
</script>

<template>
  <Title>Home</Title>

  <div class="max-desktop:grid-cols-1 grid grid-cols-4 gap-4">
    <aside class="col-span-1 flex flex-col gap-4">
      <ShopSearch v-model="search" />

      <ShopSort v-model="sort" />

      <ShopCategory v-model="categories" />
    </aside>

    <main class="col-span-full flex flex-col gap-4 lg:col-span-3">
      <div
        v-show="search || sort || categories.length"
        class="card flex items-center justify-between text-base font-medium"
      >
        <h3 class="my-1">Applied Filters</h3>
        <div class="flex flex-wrap items-center justify-end gap-2">
          <ShopFilterTag v-if="search" @click="search = null" :title="search" />

          <ShopFilterTag v-if="sort" @click="sort = null" :title="sort.name" />

          <ShopFilterTag
            v-if="categories.length"
            v-for="category in categories"
            :key="category"
            @click="categories = categories.filter((c) => c !== category)"
            :title="category"
          />
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div
          v-if="isLoading"
          v-for="i in 6"
          role="status"
          class="max-w-sm animate-pulse rounded-xl border border-gray-400 bg-white p-4 shadow-sm md:p-6"
        >
          <div
            class="mb-4 flex h-48 items-center justify-center rounded bg-gray-400"
          ></div>
          <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-400"></div>
          <div class="mb-2.5 h-2 rounded-full bg-gray-400"></div>
          <div class="mb-2.5 h-2 rounded-full bg-gray-400"></div>
          <div class="h-2 rounded-full bg-gray-400"></div>
          <div class="mt-4 flex items-center">
            <div>
              <div class="mb-2 h-2.5 w-32 rounded-full bg-gray-400"></div>
              <div class="h-2 w-48 rounded-full bg-gray-400"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>

        <ShopProductCard
          v-else
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </main>
  </div>
</template>
