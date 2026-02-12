<script setup lang="ts">
const { data: posts } = await useAsyncData('all-posts', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-slate-900 mb-8">Blog</h1>

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

    <p v-else class="text-slate-500">No posts yet. Check back soon!</p>
  </div>
</template>
