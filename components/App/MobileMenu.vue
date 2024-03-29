<script lang="ts" setup>
import { headerMenu } from "@/constants/index";

const isMobileMenuOpen = defineModel();
</script>

<template>
  <div
    class="fixed inset-0 z-[9999] flex w-full flex-col gap-8 bg-gray-200 p-12 transition-all duration-700 ease-in-out"
    :class="
      isMobileMenuOpen
        ? 'visible h-screen opacity-100'
        : 'invisible h-0 opacity-0'
    "
    @click="isMobileMenuOpen = false"
  >
    <NuxtLink
      v-for="menu in headerMenu"
      :key="menu.id"
      :to="menu.to"
      class="w-fit px-3 text-2xl flex items-center gap-4"
      :class="
        useRoute().path === menu.to ? 'font-black text-primary' : 'font-medium'
      "
    >
      <Icon :name="menu.icon" class="h-8 w-8" />
      <span>{{ menu.name }}</span>
    </NuxtLink>
  </div>
</template>
