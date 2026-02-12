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
  description: 'Software & AI Engineer — blog and portfolio. I build things with Java, Kotlin, and Python.',
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
      <p class="mt-3 text-lg max-w-2xl" style="color: var(--text);">
        Software &amp; AI Engineer. I build things with Java, Kotlin, and Python.
        Currently exploring ML/AI and sharing what I learn along the way.
      </p>
      <div class="mt-5">
        <SocialLinks />
      </div>
    </section>

    <section v-if="posts?.length">
      <h2 class="text-xl font-semibold mb-6" style="color: var(--heading);">Recent posts</h2>
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
      <NuxtLink to="/blog" class="inline-block mt-6 text-sm font-medium transition-colors" style="color: var(--accent);">
        View all posts &rarr;
      </NuxtLink>
    </section>
  </div>
</template>
