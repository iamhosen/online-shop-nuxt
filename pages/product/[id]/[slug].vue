<script lang="ts" setup>
import { type Product } from "@/repository/modules/product";
const { formatCurrency } = useUtils();

const { $api } = useNuxtApp();
const product = ref<Product>();

const { id } = useRoute().params;

const response = await $api.product.show(+id);
product.value = response;
</script>

<template>
  <Title>{{ product?.title || "Product Page" }} </Title>

  <nav class="mb-4 flex" aria-label="Breadcrumb">
    <ol
      class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
    >
      <li class="inline-flex items-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
        >
          <Icon name="mdi:home" class="h-5 w-5" />
        </NuxtLink>
      </li>
      <li>
        <div class="flex items-center">
          <Icon
            name="mdi:chevron-right"
            class="h-6 w-6 text-gray-500 rtl:rotate-180"
          />
          <NuxtLink
            to="/"
            class="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ms-2"
            >Products
          </NuxtLink>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <Icon
            name="mdi:chevron-right"
            class="h-6 w-6 text-gray-500 rtl:rotate-180"
          />
          <span class="ms-1 text-sm font-medium text-gray-600 md:ms-2">{{
            product?.title
          }}</span>
        </div>
      </li>
    </ol>
  </nav>

  <div class="card mb-4">
    <h1 class="mb-4 text-2xl font-semibold text-gray-800">
      {{ product?.title }}
    </h1>
    <img
      :src="product?.image"
      :alt="product?.title"
      class="h-96 w-full object-cover"
    />
  </div>

  <div class="card">
    <h1 class="mb-4 text-lg font-semibold text-gray-800">Details</h1>

    <div class="flex flex-col gap-4 sm:gap-2">
      <div class="flex flex-col gap-2 sm:flex-row">
        <div class="rounded-2xl bg-gray-300 p-4 sm:w-1/4 sm:rounded-l-2xl">
          Price
        </div>
        <div
          v-if="product?.price"
          class="w-full rounded-2xl bg-gray-300 p-4 text-gray-900 sm:rounded-r-2xl"
        >
          {{ formatCurrency(product?.price) }}
        </div>
      </div>
      <div class="flex flex-col gap-2 sm:flex-row">
        <div class="rounded-2xl bg-gray-300 p-4 sm:w-1/4 sm:rounded-l-2xl">
          Description
        </div>
        <div
          class="w-full rounded-2xl bg-gray-300 p-4 text-gray-900 sm:rounded-r-2xl"
        >
          {{ product?.description }}
        </div>
      </div>
      <div class="flex flex-col gap-2 sm:flex-row">
        <div class="rounded-2xl bg-gray-300 p-4 sm:w-1/4 sm:rounded-l-2xl">
          Category
        </div>
        <div
          class="w-full rounded-2xl bg-gray-300 p-4 text-gray-900 sm:rounded-r-2xl"
        >
          {{ product?.category }}
        </div>
      </div>
      <div class="flex flex-col gap-2 sm:flex-row">
        <div class="rounded-2xl bg-gray-300 p-4 sm:w-1/4 sm:rounded-l-2xl">
          Star
        </div>
        <div
          class="w-full rounded-2xl bg-gray-300 p-4 text-gray-900 sm:rounded-r-2xl"
        >
          <div class="mb-1 flex items-center gap-1">
            <Icon name="mdi:star" class="h-6 w-6 text-yellow-500" />
            <span>{{ product?.rating.rate }}</span>
            <span class="text-sm">({{ product?.rating.count }})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
