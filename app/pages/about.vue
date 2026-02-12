<template>
  <div>
    <h1 class="text-3xl font-bold text-slate-900 mb-8">About</h1>

    <section class="mb-10">
      <p class="text-slate-600 max-w-2xl">
        I'm a Software &amp; AI Engineer with experience in backend development,
        distributed systems, and machine learning. I enjoy building reliable systems
        and exploring new technologies.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold text-slate-900 mb-4">Experience</h2>
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
      <h2 class="text-xl font-semibold text-slate-900 mb-4">Skills</h2>
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
      <h2 class="text-xl font-semibold text-slate-900 mb-4">Projects</h2>
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
      <h2 class="text-xl font-semibold text-slate-900 mb-4">Awards</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">
        <li>Placeholder award — 2024</li>
        <li>Placeholder achievement — 2023</li>
      </ul>
    </section>
  </div>
</template>
