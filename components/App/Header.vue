<script lang="ts" setup>
import { headerMenu } from "@/constants/index";

const isMobileMenuOpen = ref(false);

const route = useRoute();
</script>

<template>
  <header class="text-secondary rounded-b-2xl bg-white shadow-sm">
    <div class="container flex items-center py-6 lg:py-8">
      <div class="flex w-1/4 items-center gap-2 lg:hidden">
        <button @click="isMobileMenuOpen = true" class="lg:hidden">
          <Icon name="heroicons-solid:menu" class="h-6 w-6" />
        </button>
      </div>
      <NuxtLink to="/" class="flex w-1/2 items-center gap-2 max-lg:justify-center lg:w-1/4">
        <img src="@/assets/images/logo.svg" alt="Online Shop" class="w-6" />
        <h1 class="text-xl font-bold">Online Shop</h1>
      </NuxtLink>
      <nav class="hidden w-1/2 items-center justify-center lg:flex">
        <ul class="flex items-center gap-12">
          <li v-for="menu in headerMenu" :key="menu.id" class="relative">
            <NuxtLink
              :to="menu.to"
              class="link flex items-center gap-2"
              :class="route.path === menu.to ? 'link--active' : ''"
            >
              <Icon :name="menu.icon" class="h-5 w-5" />
              <span>{{ menu.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex w-1/4 justify-end">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 rounded-xl bg-primary px-2 lg:px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-primary-600"
        >
          <Icon name="mage:phone-call" class="h-5 w-5" />
          <span class="max-lg:hidden">Call Us</span>
        </NuxtLink>
      </div>
    </div>
  </header>

  <AppMobileMenu v-model="isMobileMenuOpen" />
</template>
