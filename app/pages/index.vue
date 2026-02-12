<script setup lang="ts">
const { data: posts } = await useAsyncData('recent-posts', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(3)
    .all()
)
</script>

<template>
  <div>
    <section class="mb-12">
      <h1 class="text-3xl font-bold text-slate-900">Hey, I'm Nikita</h1>
      <p class="mt-3 text-lg text-slate-600 max-w-2xl">
        Software &amp; AI Engineer. I build things with Java, Kotlin, and Python.
        Currently exploring ML/AI and sharing what I learn along the way.
      </p>
      <div class="mt-5">
        <SocialLinks />
      </div>
    </section>

    <section v-if="posts?.length">
      <h2 class="text-xl font-semibold text-slate-900 mb-6">Recent posts</h2>
      <div class="space-y-6">
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
      <NuxtLink to="/blog" class="inline-block mt-6 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
        View all posts &rarr;
      </NuxtLink>
    </section>
  </div>
</template>
