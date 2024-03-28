<script lang="ts" setup>
import { type Product } from "@/repository/modules/product";

const { $api } = useNuxtApp();
const products = ref<Product[]>([]);

const response = await $api.product.index();
products.value = response;
</script>

<template>
  <Title>Home</Title>

  <h1 class="text-xl font-bold">Home Page</h1>
  <Icon name="mdi:home" />
  {{ products }}
</template>
