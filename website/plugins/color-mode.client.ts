// Color mode plugin for client-side color scheme handling
export default defineNuxtPlugin({
  name: 'color-mode-plugin',
  setup() {
    const colorMode = useColorMode()
    
    // Watch for color mode changes and apply to DOM
    watchEffect(() => {
      const mode = colorMode.value
      if (mode === 'dark') {
        document.documentElement.classList.add('dark-mode')
      } else {
        document.documentElement.classList.remove('dark-mode')
      }
    })
  }
}) 