<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800">
    <AppHeader />
    <main class="flex-1 w-full max-w-4xl mx-auto px-6 py-10">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
