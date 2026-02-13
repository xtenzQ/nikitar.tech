<script setup lang="ts">
defineProps<{
  title: string
  company: string
  period: string
  description: string
}>()
</script>

<template>
  <div class="pl-5 py-3 border-l-4" style="border-color: var(--border);">
    <h3 class="font-semibold" style="color: var(--heading);">{{ title }}</h3>
    <p class="text-sm" style="color: var(--text-muted);">{{ company }} &middot; {{ period }}</p>
    <p class="text-sm font-light mt-1" style="color: var(--text);">{{ description }}</p>
  </div>
</template>
