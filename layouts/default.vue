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
  <div class="bg-gray-100 min-h-screen">
    <AppHeader />
    
    <main class="container mt-8 pb-16">
      <slot />
    </main>
  </div>
</template>
