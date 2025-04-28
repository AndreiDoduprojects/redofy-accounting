<template>
  <button 
    class="color-mode-toggle" 
    @click="toggleColorMode" 
    aria-label="Toggle dark mode"
  >
    <div class="toggle-icons">
      <svg 
        v-if="!isDark" 
        xmlns="http://www.w3.org/2000/svg" 
        class="moon-icon" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <svg 
        v-else 
        xmlns="http://www.w3.org/2000/svg" 
        class="sun-icon" 
        width="20" 
        height="20" 
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
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useColorMode } from '@nuxtjs/color-mode/dist/runtime/composables'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
  
  // Add class to document root for CSS variable toggling
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Save preference to localStorage
  localStorage.setItem('redofy-theme', colorMode.preference)
}

// Initialize theme on component mount
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('redofy-theme')
  if (savedTheme) {
    colorMode.preference = savedTheme
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colorMode.preference = 'dark'
    document.documentElement.classList.add('dark')
  }
}
</script>

<style scoped>
.color-mode-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--morphic-bg-tertiary, #f1f5f9);
  color: var(--morphic-text-secondary, #475569);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.color-mode-toggle:hover {
  background-color: var(--morphic-bg-secondary, #e2e8f0);
  transform: translateY(-2px);
}

.toggle-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.moon-icon, .sun-icon {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.color-mode-toggle:hover .moon-icon,
.color-mode-toggle:hover .sun-icon {
  transform: rotate(30deg);
}

/* Dark mode styles */
:root.dark .color-mode-toggle {
  background-color: var(--morphic-bg-tertiary-dark, #334155);
  color: var(--morphic-text-secondary-dark, #cbd5e1);
}

:root.dark .color-mode-toggle:hover {
  background-color: var(--morphic-bg-secondary-dark, #1e293b);
}
</style> 