<script lang="ts" setup>
import { headerMenu } from "@/constants/index";

const route = useRoute();
</script>

<template>
  <header class="text-secondary rounded-b-2xl bg-white shadow-sm">
    <div class="container flex items-center py-8">
      <div class="flex w-1/4 items-center gap-2">
        <img src="@/assets/images/logo.svg" alt="Online Shop" class="w-6" />
        <h1 class="text-xl font-bold">Online Shop</h1>
      </div>
      <nav class="flex w-1/2 items-center justify-center">
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
          class="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-primary-600"
        >
          <Icon name="mage:phone-call" class="h-5 w-5" />
          <span>Call Us</span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
