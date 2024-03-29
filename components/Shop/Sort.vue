<script lang="ts" setup>
const isOpen = ref(true);

const sort = defineModel();

const sorts = [
  {
    name: "Ascending",
    value: "asc",
  },
  {
    name: "Descending",
    value: "desc",
  },
];
</script>

<template>
  <div class="card">
    <div class="card__title">
      <h3>Sort</h3>
      <Icon
        name="mdi:chevron-down"
        class="h-6 w-6"
        :class="{ 'rotate-180': isOpen }"
        @click="() => (isOpen = !isOpen)"
      />
    </div>
    <div v-show="isOpen" class="card__body">
      <div v-for="{ name, value } in sorts" class="mb-4 flex items-center">
        <input
          v-model="sort"
          name="sort"
          :id="value"
          type="radio"
          :value="{name, value}"
          class="h-4 w-4 border-gray-300"
        />
        <label
          :for="value"
          class="ms-2 block text-sm font-medium text-gray-900"
        >
          {{ name }}
        </label>
      </div>
    </div>
  </div>
</template>
