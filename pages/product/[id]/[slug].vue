<script lang="ts" setup>
import {type Product} from '@/repository/modules/product';

const { $api } = useNuxtApp();
const product = ref<Product>();

const response = await $api.product.show(1)
product.value = response;
</script>

<template>
  <Title>Product Page</Title>

  Product Page 
  <Icon name="mdi:home" />
  {{ product }}
</template>
