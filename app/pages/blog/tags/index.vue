<script setup lang="ts">
const { data: posts } = await useAsyncData('tags-posts', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .all()
)

const tagCounts = computed(() => {
  const counts: Record<string, number> = {}
  for (const post of posts.value ?? []) {
    for (const tag of post.tags ?? []) {
      counts[tag] = (counts[tag] ?? 0) + 1
    }
  }
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
})

useSeoMeta({
  title: 'Tags',
  description: 'Browse all tags on the blog.',
})

defineOgImage({
  component: 'NuxtSeo',
  title: 'Tags',
  description: 'Browse all tags on the blog.',
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8" style="color: var(--heading);">Tags</h1>

    <div v-if="tagCounts.length" class="flex flex-wrap gap-3">
      <NuxtLink
        v-for="[tag, count] in tagCounts"
        :key="tag"
        :to="`/blog/tags/${tag}`"
        class="tag-pill"
      >
        {{ tag }}
        <span class="tag-count">{{ count }}</span>
      </NuxtLink>
    </div>

    <p v-else style="color: var(--text-muted);">No tags yet.</p>
  </div>
</template>

<style scoped>
.tag-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  border-radius: 0.7em;
  padding: 6px 10px;
  line-height: 1.5;
  font-size: 0.95rem;
  color: var(--heading);
  border: 1px solid var(--tag-border);
  box-shadow: 0 0 3px 0 var(--shadow);
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.tag-pill:hover {
  background: var(--tag-hover);
  border-color: var(--tag-hover);
  text-decoration: none;
  color: var(--accent);
}

.tag-count {
  font-size: 0.7em;
  color: var(--text-muted);
  font-family: 'Lato', sans-serif;
}
</style>
