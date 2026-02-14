<script setup lang="ts">
const { data: posts } = await useAsyncData('recent-posts', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(3)
    .all()
)

useSeoMeta({
  title: 'Nikita Rusetskii',
  description: 'Software & AI Engineer. I build things with Java, Kotlin, and Python. Into distributed systems and LLM-powered applications.',
})

defineOgImage({
  component: 'NuxtSeo',
  title: 'Nikita Rusetskii',
  description: 'Software & AI Engineer — blog and portfolio',
})
</script>

<template>
  <div>
    <section class="mb-12">
      <h1 class="text-3xl font-bold" style="color: var(--heading);">Hey, I'm Nikita</h1>
      <p class="mt-3 text-lg font-light max-w-2xl" style="color: var(--text);">
        Software &amp; AI Engineer. I build things with Java, Kotlin, and Python.
        Into distributed systems and LLM-powered applications.
      </p>
    </section>

    <section v-if="posts?.length">
      <h2 class="text-xl font-semibold mb-4" style="color: var(--heading);">Recent posts</h2>
      <ul class="recent-post-list">
        <li v-for="post in posts" :key="post.path" class="recent-post-item">
          <span class="dot" />
          <NuxtLink :to="post.path" class="recent-post-title">{{ post.title }}</NuxtLink>
          <span class="dash" />
          <time class="recent-post-date" style="color: var(--text-muted);">{{ formatDateLong(post.date) }}</time>
        </li>
      </ul>
      <NuxtLink to="/blog" class="inline-block mt-4 text-sm font-medium transition-colors" style="color: var(--accent);">
        View all posts &rarr;
      </NuxtLink>
    </section>

  </div>
</template>

<style scoped>
.recent-post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.recent-post-item {
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

.recent-post-title {
  font-size: 1.05rem;
  color: var(--heading);
  text-decoration: none;
  white-space: nowrap;
}

.recent-post-title:hover {
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

.recent-post-date {
  font-size: 0.85rem;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .recent-post-title {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
</style>
