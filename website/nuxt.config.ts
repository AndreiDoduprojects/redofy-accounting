// https://nuxt.com/docs/api/configuration/nuxt-config
// No imports needed in Nuxt 3, defineNuxtConfig is auto-imported

export default {
  compatibilityDate: '2025-04-27',
  devtools: { enabled: true },
  
  nitro: {
    compressPublicAssets: true,
  },
  
  // Global page headers
  app: {
    head: {
      title: 'Redofy Accounting',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Modern AI-powered accounting system for Swedish businesses' }
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

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  // Color mode configuration
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  // Global CSS - Order matters for proper cascading!
  css: [
    // Load variables first
    '@/assets/css/morphic/variables.css',
    // Then load Tailwind CSS
    // '@/assets/css/tailwind.css', // This is loaded by the tailwindcss module
    // Then load Morphic base styles
    '@/assets/css/morphic/base.css',
    // Then load the legacy CSS that bridges the gap
    '@/assets/css/main.css',
    // Finally load Morphic utilities and components
    '@/assets/css/morphic/layout.css',
    '@/assets/css/morphic/components.css'
  ],

  // Runtime config
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8055'
    }
  }
} 