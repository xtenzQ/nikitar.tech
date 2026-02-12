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
})
</script>

<template>
  <article v-if="post">
    <header class="mb-8">
      <div class="flex items-center gap-3 text-sm text-slate-500 mb-2">
        <time>{{ post.date }}</time>
        <span>&middot;</span>
        <span>{{ readingTime }}</span>
      </div>
      <h1 class="text-3xl font-bold text-slate-900">{{ post.title }}</h1>
      <p class="mt-2 text-lg text-slate-600">{{ post.description }}</p>
      <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-4">
        <TagBadge v-for="tag in post.tags" :key="tag" :label="tag" />
      </div>
    </header>

    <div class="prose prose-slate max-w-none prose-pre:bg-slate-900 prose-pre:text-slate-100">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
