<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <NuxtLink
    :to="`/blog/tags/${label}`"
    class="tag-badge inline-block text-xs font-medium px-2.5 py-1 rounded-full transition-colors"
    style="background: var(--badge-bg); color: var(--badge-text); border: 1px solid var(--tag-border);"
    @click.stop
  >
    {{ label }}
  </NuxtLink>
</template>

<style scoped>
.tag-badge {
  text-decoration: none;
}

.tag-badge:hover {
  background: var(--tag-hover) !important;
  border-color: var(--tag-hover) !important;
  text-decoration: none;
  color: var(--accent) !important;
}
</style>
