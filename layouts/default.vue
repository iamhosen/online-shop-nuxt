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
  <NuxtLoadingIndicator color="#E20054"/>

  <div class="bg-gray-100 min-h-screen">
    <AppHeader />
    
    <main class="container mt-6 pb-12">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
