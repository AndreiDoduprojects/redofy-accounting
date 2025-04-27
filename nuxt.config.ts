// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Global page headers
  app: {
    head: {
      title: 'Redofy Accounting',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Modern AI-powered accounting system for Swedish businesses' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Runtime config for API
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8055'
    }
  }
}) 