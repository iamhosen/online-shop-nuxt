<script lang="ts" setup>
const search = defineModel();

const searchInput = ref("");

const clear = () => {
  searchInput.value = "";
  search.value = "";
};
</script>

<template>
  <div class="card">
    <div class="card__title">
      <h3>Search & Filter</h3>
    </div>
    <form @submit.prevent="search = searchInput" class="card__body">
      <div class="relative mb-4">
        <div
          class="pointer-events-none absolute inset-y-0 start-0 my-3 flex items-center border-r-2 border-gray-400 pe-2 ps-3"
        >
          <Icon name="mdi:magnify" class="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="search"
          v-model="searchInput"
          id="default-search"
          class="block w-full rounded-lg border border-gray-400 bg-gray-50 px-4 py-3 ps-14 text-sm text-gray-900 outline-none focus:border-primary-500 focus:ring-primary-500"
          required
        />
        <div
          type="submit"
          class="absolute bottom-1 end-2 rounded-lg py-2 text-sm font-medium text-gray-500"
          @click="clear"
        >
          <Icon name="mdi:close" class="h-5 w-5" />
        </div>
      </div>
      <button
        type="submit"
        class="w-full rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300"
      >
        Search
      </button>
    </form>
  </div>
</template>
