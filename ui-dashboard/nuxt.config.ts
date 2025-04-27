// https://nuxt.com/docs/api/configuration/nuxt-config
// No type import needed, just use a plain object for Nuxt 3

export default {
  compatibilityDate: '2025-04-27',
  devtools: { enabled: true },
  
  nitro: {
    compressPublicAssets: true,
  },
  
  // Global page headers
  app: {
    head: {
      title: 'Redofy Dashboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Redofy Accounting Dashboard' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  // Color mode configuration
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'redofy-theme' // Shared storage key with website
  },

  // Global CSS
  css: [
    // Shared CSS from main project
    '~/assets/css/dashboard.css'
  ],

  // Runtime config
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8055'
    }
  },
  
  // TypeScript config
  typescript: {
    typeCheck: true,
    strict: true
  }
} 