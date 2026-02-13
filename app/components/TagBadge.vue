<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-block text-xs font-medium px-2.5 py-1 rounded-full"
    style="background: var(--badge-bg); color: var(--badge-text);"
  >
    {{ label }}
  </span>
</template>
