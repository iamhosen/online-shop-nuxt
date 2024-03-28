<script lang="ts" setup>
import {type Product} from '@/repository/modules/product';

const { $api } = useNuxtApp();
const products = ref<Product[]>([]);

const response = await $api.product.index()
products.value = response;
</script>

<template>
  <Title>Home</Title>

  Home Page <Icon name="mdi:home" />
  {{ products }}
</template>
