<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  path: string
  tags?: string[]
}>()
</script>

<template>
  <NuxtLink :to="path"
    class="block border-l-4 border-blue-500 pl-5 py-4 rounded-r-lg hover:shadow-md hover:bg-white transition-all">
    <time class="text-xs text-slate-400 font-medium">{{ date }}</time>
    <h3 class="text-lg font-semibold text-slate-900 mt-1">{{ title }}</h3>
    <p class="text-sm text-slate-600 mt-1 line-clamp-2">{{ description }}</p>
    <div v-if="tags?.length" class="flex flex-wrap gap-2 mt-3">
      <TagBadge v-for="tag in tags" :key="tag" :label="tag" />
    </div>
  </NuxtLink>
</template>
