<script lang="ts" setup>
const { $api } = useNuxtApp();

const selectedCategories = defineModel();
const categories = ref<string[]>([]);

const response = await $api.category.index();
categories.value = response;

const isOpen = ref(true);
</script>

<template>
  <div class="card">
    <div class="card__title">
      <h3>Categories</h3>
      <Icon
        name="mdi:chevron-down"
        class="h-6 w-6"
        :class="{ 'rotate-180': isOpen }"
        @click="() => (isOpen = !isOpen)"
      />
    </div>
    <div v-show="isOpen" class="card__body">
      <div v-for="category in categories" class="mb-4 flex items-center">
        <input
          v-model="selectedCategories"
          name="category"
          :id="category"
          type="checkbox"
          :value="category"
          class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-blue-500"
        />
        <label :for="category" class="ms-2 text-sm font-medium text-gray-900">
          {{ category }}
        </label>
      </div>
    </div>
  </div>
</template>
