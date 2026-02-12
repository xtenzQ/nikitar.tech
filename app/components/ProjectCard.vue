<script setup lang="ts">
defineProps<{
  title: string
  description: string
  url?: string
  tags?: string[]
}>()
</script>

<template>
  <div class="border-l-4 border-blue-400 pl-5 py-3">
    <component :is="url ? 'a' : 'div'" :href="url" target="_blank" rel="noopener noreferrer"
      class="font-semibold text-slate-900" :class="url && 'hover:text-blue-600 transition-colors'">
      {{ title }}
    </component>
    <p class="text-sm text-slate-600 mt-1">{{ description }}</p>
    <div v-if="tags?.length" class="flex flex-wrap gap-2 mt-2">
      <TagBadge v-for="tag in tags" :key="tag" :label="tag" />
    </div>
  </div>
</template>
