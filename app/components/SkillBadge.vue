<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="inline-block text-sm font-medium px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
    {{ label }}
  </span>
</template>
