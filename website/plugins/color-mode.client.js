export default defineNuxtPlugin((nuxtApp) => {
  // Initialize theme on client-side load
  if (process.client) {
    // Get saved preference or detect system preference
    const savedTheme = localStorage.getItem('redofy-theme')
    const colorMode = nuxtApp.$colorMode

    if (savedTheme) {
      // Apply saved preference
      colorMode.preference = savedTheme
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Apply system preference if no saved preference
      colorMode.preference = 'dark'
      document.documentElement.classList.add('dark')
      localStorage.setItem('redofy-theme', 'dark')
    } else {
      // Default to light mode
      colorMode.preference = 'light'
      document.documentElement.classList.remove('dark')
      localStorage.setItem('redofy-theme', 'light')
    }

    // Watch for changes
    nuxtApp.hook('page:finish', () => {
      if (colorMode.value === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })
  }
}) 