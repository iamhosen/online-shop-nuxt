<script setup>
const title = ref("Online Shop");
useHead({
  titleTemplate: (titleChunk) => {
    if (titleChunk) {
      title.value = titleChunk;
      return `${titleChunk} | Online Shop`;
    }
    return title.value;
  },
});
</script>

<template>
  <div class="bg-gray-100">
    <AppHeader />
    <slot />
  </div>
</template>
