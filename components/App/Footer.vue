<template>
  <footer class="bg-white py-8 shadow-sm">
    <div class="container grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <NuxtLink
          to="/"
          class="mb-4 flex items-center gap-2"
        >
          <img src="@/assets/images/logo.svg" alt="Online Shop" class="w-6" />
          <h1 class="text-2xl font-bold">Online Shop</h1>
        </NuxtLink>
        <p>We're Available Now!</p>
      </div>
      <div>
        <h3 class="mb-3 text-xl font-medium">Quick Access</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="#">Contact Us</NuxtLink></li>
          <li><NuxtLink to="#">Blog</NuxtLink></li>
          <li><NuxtLink to="#">About Us</NuxtLink></li>
          <li><NuxtLink to="#">After Sale Service</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3 class="mb-3 text-xl font-medium">Help Center</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="#">Terms of Use</NuxtLink></li>
          <li><NuxtLink to="#">Policies</NuxtLink></li>
          <li><NuxtLink to="#">Suggestions</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3 class="mb-3 text-xl font-medium">Social Media</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="#">Telegram</NuxtLink></li>
          <li><NuxtLink to="#">Instagram</NuxtLink></li>
          <li><NuxtLink to="#">Linkedin</NuxtLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
