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
  <NuxtLink
    :to="path"
    class="blog-post-card block pl-5 py-4 rounded-r-lg border-l-4 transition-all"
  >
    <time class="text-xs font-medium" style="color: var(--text-muted);">{{ date }}</time>
    <h3 class="text-lg font-semibold mt-1" style="color: var(--heading);">{{ title }}</h3>
    <p class="text-sm font-light mt-1 line-clamp-2" style="color: var(--text);">{{ description }}</p>
    <div v-if="tags?.length" class="flex flex-wrap gap-2 mt-3">
      <TagBadge v-for="tag in tags" :key="tag" :label="tag" />
    </div>
  </NuxtLink>
</template>

<style scoped>
.blog-post-card {
  border-color: var(--accent);
}

.blog-post-card:hover {
  background-color: var(--card-hover);
  box-shadow: 0 2px 8px var(--shadow);
}
</style>
