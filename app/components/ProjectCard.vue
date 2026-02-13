<script setup lang="ts">
defineProps<{
  title: string
  description: string
  url?: string
  tags?: string[]
}>()
</script>

<template>
  <div class="pl-5 py-3 border-l-4" style="border-color: var(--accent);">
    <component
      :is="url ? 'a' : 'div'"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="font-semibold transition-colors"
      style="color: var(--heading);"
    >
      {{ title }}
    </component>
    <p class="text-sm font-light mt-1" style="color: var(--text);">{{ description }}</p>
    <div v-if="tags?.length" class="flex flex-wrap gap-2 mt-2">
      <TagBadge v-for="tag in tags" :key="tag" :label="tag" />
    </div>
  </div>
</template>
