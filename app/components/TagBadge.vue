<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-600">
    {{ label }}
  </span>
</template>
