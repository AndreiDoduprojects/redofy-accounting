/**
 * CSS Integration Plugin
 * This plugin ensures proper integration between legacy CSS and Morphic Design System
 */

export default defineNuxtPlugin({
  name: 'css-integration',
  enforce: 'pre', // Ensures this runs before other plugins
  setup() {
    // Add a CSS class to the HTML element to indicate Morphic is active
    if (process.client) {
      document.documentElement.classList.add('morphic-enabled')
    }
  }
}) 