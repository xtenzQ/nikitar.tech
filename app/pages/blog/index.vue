<script setup lang="ts">
const { data: posts } = await useAsyncData('all-posts', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)

useSeoMeta({
  title: 'Blog',
  description: 'Articles on software engineering, AI, and technology by Nikita Rusetskii.',
})

defineOgImage({
  component: 'NuxtSeo',
  title: 'Blog',
  description: 'Articles on software engineering, AI, and technology.',
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8" style="color: var(--heading);">Blog</h1>

    <div v-if="posts?.length" class="space-y-6">
      <BlogPostCard
        v-for="post in posts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :path="post.path"
        :tags="post.tags"
      />
    </div>

    <p v-else style="color: var(--text-muted);">No posts yet. Check back soon!</p>
  </div>
</template>
