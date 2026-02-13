<script setup lang="ts">
const colorMode = useColorMode()

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur border-b" style="background: var(--header-bg); border-color: var(--border);">
    <nav class="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
      <NuxtLink to="/" class="text-lg font-semibold transition-colors" style="color: var(--heading);">
        nikitar.dev
      </NuxtLink>
      <div class="flex items-center gap-6">
        <NuxtLink to="/blog" class="text-sm font-medium transition-colors" style="color: var(--text-muted);">
          Blog
        </NuxtLink>
        <NuxtLink to="/about" class="text-sm font-medium transition-colors" style="color: var(--text-muted);">
          About
        </NuxtLink>
        <button
          aria-label="Toggle dark mode"
          class="p-2 rounded-md transition-colors hover:opacity-80 theme-toggle"
          @click="toggleTheme"
        >
          <Icon class="icon-light" name="mdi:weather-night" size="20" />
          <Icon class="icon-dark" name="mdi:weather-sunny" size="20" />
        </button>
      </div>
    </nav>
  </header>
</template>
