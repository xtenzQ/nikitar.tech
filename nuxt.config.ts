import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/icon',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.output/**', '**/.nuxt/**'],
      },
    },
  },

  site: {
    url: 'https://nikitar.tech',
    name: 'Nikita Rusetskii',
    description: 'Software & AI Engineer — blog and portfolio',
    defaultLocale: 'en',
  },

  content: {
    watch: false,
    highlight: {
      langs: ['java', 'kotlin', 'typescript', 'javascript', 'bash', 'yaml', 'json', 'sql', 'python', 'xml'],
      theme: 'github-dark',
    },
  },

  ogImage: { enabled: false },

  nitro: {
    watchOptions: {
      usePolling: true,
      interval: 1000,
    },
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
      ],
    },
  },
})
