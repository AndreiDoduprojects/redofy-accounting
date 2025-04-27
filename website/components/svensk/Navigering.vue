<template>
  <nav class="morphic-navbar" :class="{ 'scrolled': isScrolled }">
    <div class="morphic-navbar-container">
      <div class="morphic-navbar-brand">
        <NuxtLink to="/">Redofy</NuxtLink>
      </div>
      
      <div class="morphic-navbar-menu">
        <NuxtLink to="/oversikt" class="morphic-navbar-link" active-class="active">Översikt</NuxtLink>
        <NuxtLink to="/funktioner" class="morphic-navbar-link" active-class="active">Funktioner</NuxtLink>
        <NuxtLink to="/priser" class="morphic-navbar-link" active-class="active">Priser</NuxtLink>
        <NuxtLink to="/kundcase" class="morphic-navbar-link" active-class="active">Kundcase</NuxtLink>
        <NuxtLink to="/kontakt" class="morphic-navbar-link" active-class="active">Kontakt</NuxtLink>
      </div>
      
      <div class="morphic-navbar-actions">
        <ClientOnly>
          <ColorModeToggle />
        </ClientOnly>
        <NuxtLink to="/logga-in" class="morphic-button">Logga in</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ColorModeToggle from '../ColorModeToggle.vue'

// Track scroll position for navbar style changes
const isScrolled = ref(false)

// Update scroll position
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.morphic-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all var(--morphic-transition-base);
  padding: 0.75rem 1.5rem;
  margin: 0;
  border-radius: 0;
  background-color: rgba(var(--morphic-bg-primary-rgb), 0.7);
  backdrop-filter: var(--morphic-blur-backdrop);
  -webkit-backdrop-filter: var(--morphic-blur-backdrop);
}

.morphic-navbar.scrolled {
  backdrop-filter: var(--morphic-blur-backdrop);
  -webkit-backdrop-filter: var(--morphic-blur-backdrop);
  box-shadow: var(--morphic-shadow-md);
  background-color: rgba(var(--morphic-bg-primary-rgb), 0.85);
  top: 15px;
  margin: 0 15px;
  border-radius: var(--morphic-radius-lg);
  border: 1px solid var(--morphic-border-light);
}

.dark-mode .morphic-navbar {
  background-color: rgba(15, 23, 42, 0.85);
}

.morphic-navbar.scrolled {
  background-color: rgba(var(--morphic-bg-primary-rgb), 0.85);
  border: 1px solid var(--morphic-border-light);
}

.dark-mode .morphic-navbar.scrolled {
  background-color: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(71, 85, 105, 0.6);
}

.morphic-navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
}

.morphic-navbar-brand {
  font-weight: 700;
  font-size: 1.35rem;
  background: linear-gradient(135deg, var(--morphic-primary), var(--morphic-accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.morphic-navbar-menu {
  display: flex;
  gap: 2rem;
}

.morphic-navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.morphic-navbar-link {
  color: var(--morphic-text-secondary);
  font-weight: 500;
  transition: color var(--morphic-transition-base);
  position: relative;
}

.dark-mode .morphic-navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.morphic-navbar-link:hover,
.morphic-navbar-link.active {
  color: var(--morphic-text-primary);
}

.dark-mode .morphic-navbar-link:hover,
.dark-mode .morphic-navbar-link.active {
  color: rgba(255, 255, 255, 0.95);
}

.morphic-navbar-link.active::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--morphic-accent);
  border-radius: var(--morphic-radius-full);
}

.morphic-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  border-radius: var(--morphic-radius-md);
  background: linear-gradient(135deg, var(--morphic-primary), var(--morphic-primary-dark));
  color: white;
  font-weight: 500;
  transition: all var(--morphic-transition-base);
  cursor: pointer;
  box-shadow: var(--morphic-shadow-sm);
}

.morphic-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--morphic-shadow-md);
}

@media (max-width: 768px) {
  .morphic-navbar {
    padding: 0.5rem 1rem;
  }
  
  .morphic-navbar.scrolled {
    top: 10px;
    margin: 0 10px;
  }
  
  .morphic-navbar-menu {
    display: none;
  }
}
</style> 