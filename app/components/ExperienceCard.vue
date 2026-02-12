<script setup lang="ts">
defineProps<{
  title: string
  company: string
  period: string
  description: string
}>()
</script>

<template>
  <div class="border-l-4 border-slate-300 pl-5 py-3">
    <h3 class="font-semibold text-slate-900">{{ title }}</h3>
    <p class="text-sm text-slate-500">{{ company }} &middot; {{ period }}</p>
    <p class="text-sm text-slate-600 mt-1">{{ description }}</p>
  </div>
</template>
