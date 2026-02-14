<script setup lang="ts">
const route = useRoute()
const tag = route.params.tag as string

const { data: posts } = await useAsyncData(`tag-${tag}`, () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)

const filtered = computed(() =>
  (posts.value ?? []).filter(p => p.tags?.includes(tag))
)

useSeoMeta({
  title: `Tag: ${tag}`,
  description: `Posts tagged with "${tag}".`,
})

defineOgImage({
  component: 'NuxtSeo',
  title: `Tag: ${tag}`,
  description: `Posts tagged with "${tag}".`,
})
</script>

<template>
  <div>
    <NuxtLink to="/blog/tags" class="inline-flex items-center gap-1 text-sm mb-6 transition-colors" style="color: var(--text-muted);">
      <Icon name="mdi:arrow-left" size="16" />
      Back to tags
    </NuxtLink>

    <h1 class="tag-page-heading">
      <Icon name="mdi:tag-outline" size="22" style="color: var(--text-muted);" />
      {{ tag }}
      <span class="tag-page-count">{{ filtered.length }}</span>
    </h1>

    <ul v-if="filtered.length" class="tag-post-list">
      <li v-for="post in filtered" :key="post.path" class="tag-post-item">
        <span class="dot" />
        <NuxtLink :to="post.path" class="tag-post-title">{{ post.title }}</NuxtLink>
        <span class="dash" />
        <time class="tag-post-date" style="color: var(--text-muted);">{{ formatDateLong(post.date) }}</time>
      </li>
    </ul>

    <p v-else style="color: var(--text-muted);">No posts with this tag yet.</p>
  </div>
</template>

<style scoped>
.tag-page-heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 1.5rem;
}

.tag-page-count {
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-muted);
  padding-left: 0.25rem;
}

.tag-post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag-post-item {
  display: flex;
  align-items: baseline;
  padding: 0.6rem 0;
  line-height: 1.5rem;
}

.dot {
  width: 5px;
  height: 5px;
  min-width: 5px;
  border-radius: 50%;
  background: #999;
  position: relative;
  top: -1px;
  margin-right: 0.5rem;
}

.tag-post-title {
  font-size: 1.05rem;
  color: var(--heading);
  text-decoration: none;
  white-space: nowrap;
}

.tag-post-title:hover {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-color: var(--link-underline);
  text-underline-offset: 3px;
}

.dash {
  flex-grow: 1;
  margin: 0 0.5rem 0.4rem 0.5rem;
  border-bottom: 2px dotted var(--dash-color);
}

.tag-post-date {
  font-size: 0.85rem;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .tag-post-title {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
</style>
