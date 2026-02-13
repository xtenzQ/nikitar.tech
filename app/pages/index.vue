<script setup lang="ts">
const { data: posts } = await useAsyncData('recent-posts', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(3)
    .all()
)

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  const day = d.getUTCDate()
  const mon = months[d.getUTCMonth()]
  const year = String(d.getUTCFullYear()).slice(2)
  return `${day} ${mon} '${year}`
}

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
      <h1 class="text-3xl font-bold" style="color: var(--heading);">👋 Hey, I'm Nikita</h1>
      <p class="mt-3 text-lg font-light max-w-2xl" style="color: var(--text);">
        Software &amp; AI Engineer. I build things with Java, Kotlin, and Python.
        Into distributed systems and LLM-powered applications.
      </p>
    </section>

    <section v-if="posts?.length">
      <h2 class="text-xl font-semibold mb-4" style="color: var(--heading);">Recent posts</h2>
      <ul class="list-none p-0 m-0">
        <li v-for="post in posts" :key="post.path">
          <NuxtLink
            :to="post.path"
            class="recent-post-row flex justify-between items-baseline gap-4 py-2 transition-colors"
          >
            <span class="text-base font-medium" style="color: var(--heading);">{{ post.title }}</span>
            <time class="text-sm shrink-0" style="color: var(--text-muted);">{{ formatDate(post.date) }}</time>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/blog" class="inline-block mt-4 text-sm font-medium transition-colors" style="color: var(--accent);">
        View all posts &rarr;
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.recent-post-row {
  text-decoration: none;
}

.recent-post-row:hover span:first-child {
  color: var(--accent) !important;
}
</style>
