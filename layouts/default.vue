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
  <header>
    header
  </header>
  <main>
    <slot />
  </main>
</template>
