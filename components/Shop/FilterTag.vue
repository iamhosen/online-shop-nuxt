<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="text-secondary font-normal flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-sm"
  >
    <Icon name="mdi:close" class="h-4 w-4" />
    <span>{{ title }}</span>
    <Icon name="mdi:sort" class="h-4 w-4" />
  </div>
</template>
