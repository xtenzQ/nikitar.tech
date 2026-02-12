<script setup lang="ts">
const props = defineProps<{
  src: string
  alt?: string
}>()

const runtimeConfig = useRuntimeConfig()
const base = runtimeConfig.app.baseURL || '/'

const { data: svg } = await useAsyncData(`diagram-${props.src}`, async () => {
  if (import.meta.server) {
    const { readFileSync } = await import('node:fs')
    const { resolve } = await import('node:path')
    const filePath = resolve('public', 'diagrams', `${props.src}.svg`)
    return readFileSync(filePath, 'utf-8')
  }
  const res = await globalThis.fetch(`${base}diagrams/${props.src}.svg`)
  return res.text()
})
</script>

<template>
  <figure class="diagram-wrapper">
    <div v-if="svg" v-html="svg" />
    <figcaption v-if="alt" class="diagram-caption">{{ alt }}</figcaption>
  </figure>
</template>
