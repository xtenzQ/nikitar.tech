<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'Software & AI Engineer based in Belgrade. Into search, Apache Lucene, and LLM-powered applications.',
})

defineOgImage({
  component: 'NuxtSeo',
  title: 'About — Nikita Rusetskii',
  description: 'Software & AI Engineer based in Belgrade. Into search, Apache Lucene, and LLM-powered applications.',
})

useSchemaOrg([
  definePerson({
    name: 'Nikita Rusetskii',
    url: 'https://nikitar.dev',
    jobTitle: 'Software & AI Engineer',
    sameAs: [
      'https://github.com/xtenzq',
      'https://www.linkedin.com/in/xtenzq/',
    ],
  }),
])
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8" style="color: var(--heading);">About</h1>

    <div class="max-w-2xl" style="color: var(--text);">
      <section class="space-y-4">
        <h2 class="text-lg font-semibold" style="color: var(--heading);">What I do</h2>
        <p>
          I'm a software and AI engineer based in Belgrade. I work at
          <a href="https://kmslh.com/" target="_blank" rel="noopener noreferrer" class="underline" style="color: var(--accent);">KMS Lighthouse</a>,
          a SaaS knowledge management platform, where I build and improve search and indexing.
        </p>
        <p>
          Search is the thing that keeps me hooked. I like working close to Apache Lucene,
          thinking about how to make retrieval faster and more relevant, and figuring out
          where LLMs fit into that picture.
        </p>
      </section>

      <section class="mt-8 space-y-4">
        <h2 class="text-lg font-semibold" style="color: var(--heading);">Background</h2>
        <p>
          Before industry, I spent a few years in academia. I did an exchange semester at
          Inha University in South Korea back in 2019, studying CS but also getting involved
          in applying ML and algorithms to microgrids and sustainable energy. Published several
          papers on the topic (you can find them on my
          <a href="https://scholar.google.com/citations?user=qy3ZD4IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="underline" style="color: var(--accent);">Google Scholar</a>).
          I was also a finalist at JunctionX Seoul hackathons in 2020 and 2021.
        </p>
      </section>

      <section class="mt-8 space-y-4">
        <h2 class="text-lg font-semibold" style="color: var(--heading);">Outside work</h2>
        <p>
          I dig into software architecture and tinker with AI agents.
          If you want the full picture, check out my
          <a href="https://www.linkedin.com/in/xtenzq/" target="_blank" rel="noopener noreferrer" class="underline" style="color: var(--accent);">LinkedIn</a>.
        </p>
      </section>
    </div>
  </div>
</template>
