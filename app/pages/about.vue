<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'Software & AI Engineer with experience in backend development, distributed systems, and machine learning.',
})

defineOgImage({
  component: 'NuxtSeo',
  title: 'About — Nikita Rusetskii',
  description: 'Software & AI Engineer with experience in backend development, distributed systems, and machine learning.',
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

    <section class="mb-10">
      <p class="max-w-2xl" style="color: var(--text);">
        I'm a Software &amp; AI Engineer with experience in backend development,
        distributed systems, and machine learning. I enjoy building reliable systems
        and exploring new technologies.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4" style="color: var(--heading);">Experience</h2>
      <div class="space-y-5">
        <ExperienceCard
          title="Software Engineer"
          company="Company Name"
          period="2023 — Present"
          description="Building backend services and ML pipelines."
        />
        <ExperienceCard
          title="Junior Developer"
          company="Previous Company"
          period="2021 — 2023"
          description="Full-stack development with Spring Boot and Vue.js."
        />
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4" style="color: var(--heading);">Skills</h2>
      <div class="flex flex-wrap gap-2">
        <SkillBadge label="Java" />
        <SkillBadge label="Kotlin" />
        <SkillBadge label="Python" />
        <SkillBadge label="TypeScript" />
        <SkillBadge label="Spring Boot" />
        <SkillBadge label="Vue.js" />
        <SkillBadge label="PostgreSQL" />
        <SkillBadge label="Docker" />
        <SkillBadge label="Kubernetes" />
        <SkillBadge label="ML/AI" />
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4" style="color: var(--heading);">Projects</h2>
      <div class="space-y-5">
        <ProjectCard
          title="Project Alpha"
          description="A distributed data processing pipeline built with Kafka and Spring Boot."
          url="https://github.com/xtenzq"
          :tags="['Java', 'Kafka', 'Spring Boot']"
        />
        <ProjectCard
          title="Project Beta"
          description="ML model serving platform with REST API and monitoring."
          :tags="['Python', 'FastAPI', 'Docker']"
        />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-4" style="color: var(--heading);">Awards</h2>
      <ul class="list-disc list-inside space-y-1 text-sm" style="color: var(--text);">
        <li>Placeholder award — 2024</li>
        <li>Placeholder achievement — 2023</li>
      </ul>
    </section>
  </div>
</template>
