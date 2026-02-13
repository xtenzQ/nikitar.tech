<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryCollection('blog').path(`/blog/${route.params.slug}`).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const readingTime = computed(() => {
  if (!post.value?.rawbody) return '1 min read'
  const words = post.value.rawbody.split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
})

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogType: 'article',
  articlePublishedTime: post.value.date,
  articleTag: post.value.tags,
})

defineOgImage({
  component: 'NuxtSeo',
  title: post.value.title,
  description: post.value.description,
})

useSchemaOrg([
  defineArticle({
    '@type': 'BlogPosting',
    'headline': post.value.title,
    'description': post.value.description,
    'datePublished': post.value.date,
    'author': {
      name: 'Nikita Rusetskii',
      url: 'https://nikitar.dev',
    },
  }),
])
</script>

<template>
  <article v-if="post">
    <NuxtLink to="/blog" class="inline-flex items-center gap-1 text-sm mb-6 transition-colors" style="color: var(--text-muted);">
      <Icon name="mdi:arrow-left" size="16" />
      Back to blog
    </NuxtLink>

    <header class="mb-10">
      <h1 class="text-3xl font-bold" style="color: var(--heading);">{{ post.title }}</h1>
      <p class="mt-2 text-lg font-light" style="color: var(--text);">{{ post.description }}</p>
      <div class="flex items-center gap-3 text-sm mt-4" style="color: var(--text-muted);">
        <time>{{ post.date }}</time>
        <span>&middot;</span>
        <span>{{ readingTime }}</span>
      </div>
      <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-4">
        <TagBadge v-for="tag in post.tags" :key="tag" :label="tag" />
      </div>
    </header>

    <div class="prose max-w-none">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
