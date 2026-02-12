<template>
  <header class="sticky top-0 z-50 bg-slate-50/80 backdrop-blur border-b border-slate-200/60">
    <nav class="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
      <NuxtLink to="/" class="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
        nikitar.tech
      </NuxtLink>
      <div class="flex items-center gap-6">
        <NuxtLink to="/blog" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          Blog
        </NuxtLink>
        <NuxtLink to="/about" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          About
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
