<script lang="ts" setup>
import type { Product } from "~/repository/modules/product";
const { formatCurrency } = useUtils();

const props = defineProps<{
  product: Product;
}>();

const url = computed(() => {
  const title = props.product.title
    .trim()
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return `/product/${props.product.id}/${title}`;
});
</script>

<template>
  <NuxtLink :to="url" class="card flex flex-col justify-between p-2">
    <div class="mb-3">
      <img
        :src="product.image"
        :alt="product.title"
        class="mb-3 h-48 w-full rounded-xl object-cover"
      />
      <h3 class="font-medium text-gray-800">{{ product.title }}</h3>
      <p class="line-clamp-2 opacity-60">{{ product.description }}</p>
    </div>
    <div>
      <div class="mb-1 flex items-center gap-1 text-gray-600">
        <Icon name="mdi:star" class="h-4 w-4 text-yellow-500" />
        <span class="text-sm">{{ product.rating.rate }}</span>
        <span class="text-xs">({{ product.rating.count }})</span>
      </div>
      <p class="mb-3 text-gray-800">{{ formatCurrency(product.price) }}</p>

      <button
        class="flex w-full items-center justify-center gap-1 rounded-xl border border-gray-400 bg-white px-5 py-2.5 text-sm font-medium text-primary hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-primary-300"
      >
        <span>Show Details</span>
        <Icon name="mdi:chevron-right" class="h-5 w-5" />
      </button>
    </div>
  </NuxtLink>
</template>
