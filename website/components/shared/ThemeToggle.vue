<template>
  <button 
    :aria-label="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    class="morphic-theme-toggle"
    @click="toggleTheme"
  >
    <!-- Sun icon (light mode) -->
    <svg 
      v-if="colorMode.value === 'dark'" 
      xmlns="http://www.w3.org/2000/svg" 
      class="morphic-theme-toggle-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2"
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    
    <!-- Moon icon (dark mode) -->
    <svg 
      v-else 
      xmlns="http://www.w3.org/2000/svg" 
      class="morphic-theme-toggle-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2"
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </button>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// Use Nuxt's auto-imported composable
const colorMode = useColorMode();

// Function to toggle between light and dark mode
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  
  // Store the preference in localStorage for sharing between website and dashboard
  try {
    localStorage.setItem('redofy-theme', colorMode.preference);
    
    // Dispatch a custom event so other parts of the application can react
    window.dispatchEvent(new CustomEvent('redofy-theme-change', { 
      detail: { theme: colorMode.preference } 
    }));
  } catch (error) {
    console.warn('Unable to access localStorage:', error);
  }
};

// Initialize theme from localStorage if available
const initTheme = () => {
  try {
    const savedTheme = localStorage.getItem('redofy-theme');
    if (savedTheme) {
      colorMode.preference = savedTheme;
    }
  } catch (error) {
    console.warn('Unable to access localStorage:', error);
  }
};

// Listen for theme changes from other applications
const handleThemeChange = (event) => {
  if (event.detail?.theme && event.detail.theme !== colorMode.preference) {
    colorMode.preference = event.detail.theme;
  }
};

// Run on component mount
onMounted(() => {
  initTheme();
  window.addEventListener('redofy-theme-change', handleThemeChange);
});

// Clean up event listener on unmount
onUnmounted(() => {
  window.removeEventListener('redofy-theme-change', handleThemeChange);
});
</script>

<style>
.morphic-theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--morphic-radius-full);
  background-color: var(--morphic-bg-secondary);
  border: 1px solid var(--morphic-border-light);
  color: var(--morphic-text-primary);
  cursor: pointer;
  transition: all var(--morphic-transition-smooth);
  box-shadow: var(--morphic-shadow-sm);
  outline: none;
  padding: 0;
}

.morphic-theme-toggle:hover {
  background-color: var(--morphic-bg-tertiary);
  box-shadow: var(--morphic-shadow-md);
  transform: translateY(-1px);
}

.morphic-theme-toggle:active {
  transform: translateY(0);
  box-shadow: var(--morphic-shadow-sm);
}

.morphic-theme-toggle:focus-visible {
  box-shadow: 0 0 0 2px var(--morphic-primary);
}

.morphic-theme-toggle-icon {
  width: 20px;
  height: 20px;
}

/* Smooth transition between themes */
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style> 