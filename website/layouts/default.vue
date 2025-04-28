<template>
  <div class="layout">
    <header class="site-header">
      <div class="header-container">
        <div class="logo">
          <NuxtLink to="/">
            <img src="~/assets/images/redofy-logo.svg" alt="Redofy Logo" width="140" height="40" />
          </NuxtLink>
        </div>
        
        <nav class="main-nav">
          <ul class="nav-links">
            <li><NuxtLink to="/">Hem</NuxtLink></li>
            <li><NuxtLink to="/tjanster">Tjänster</NuxtLink></li>
            <li><NuxtLink to="/om-oss">Om oss</NuxtLink></li>
            <li><NuxtLink to="/priser">Priser</NuxtLink></li>
            <li><NuxtLink to="/blogg">Blogg</NuxtLink></li>
            <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
          </ul>
        </nav>
        
        <div class="cta-buttons">
          <ThemeToggle class="theme-toggle-desktop" />
          <NuxtLink to="/demo" class="btn btn-secondary">Boka demo</NuxtLink>
          <NuxtLink to="/konto" class="btn btn-primary">Kundportal</NuxtLink>
        </div>
        
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div class="mobile-menu" :class="{ 'is-active': mobileMenuOpen }">
        <ul class="mobile-nav-links">
          <li><NuxtLink to="/" @click="closeMobileMenu">Hem</NuxtLink></li>
          <li><NuxtLink to="/tjanster" @click="closeMobileMenu">Tjänster</NuxtLink></li>
          <li><NuxtLink to="/om-oss" @click="closeMobileMenu">Om oss</NuxtLink></li>
          <li><NuxtLink to="/priser" @click="closeMobileMenu">Priser</NuxtLink></li>
          <li><NuxtLink to="/blogg" @click="closeMobileMenu">Blogg</NuxtLink></li>
          <li><NuxtLink to="/kontakt" @click="closeMobileMenu">Kontakt</NuxtLink></li>
        </ul>
        
        <div class="mobile-cta-buttons">
          <ThemeToggle class="theme-toggle-mobile" />
          <NuxtLink to="/demo" class="btn btn-secondary" @click="closeMobileMenu">Boka demo</NuxtLink>
          <NuxtLink to="/konto" class="btn btn-primary" @click="closeMobileMenu">Kundportal</NuxtLink>
        </div>
      </div>
    </header>
    
    <main>
      <slot />
    </main>
    
    <SiteFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ThemeToggle from '~/components/shared/ThemeToggle.vue';

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  
  if (mobileMenuOpen.value) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
  document.body.classList.remove('no-scroll');
}
</script>

<style>
/* Global styles */
:root {
  --primary-color: #0ea5e9;
  --primary-dark: #0284c7;
  --secondary-color: #475569;
  --text-color: #1e293b;
  --light-text: #64748b;
  --background-color: #ffffff;
  --light-background: #f8fafc;
  --border-color: #e2e8f0;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: var(--text-color);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body.no-scroll {
  overflow: hidden;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: 1px solid transparent;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
}

.btn-secondary {
  background-color: white;
  color: var(--secondary-color);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background-color: var(--light-background);
  color: var(--text-color);
}

/* Layout styles */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

/* Header styles */
.site-header {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  flex-shrink: 0;
}

.main-nav {
  display: flex;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary-color);
}

/* Theme toggle positioning */
.cta-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle-desktop {
  margin-right: 0.5rem;
}

.theme-toggle-mobile {
  margin-bottom: 1rem;
}

/* Dark mode adjustments */
.dark-mode {
  --text-color: #f1f5f9;
  --light-text: #cbd5e1;
  --background-color: #0f172a;
  --light-background: #1e293b;
  --border-color: #334155;
}

.dark-mode .site-header {
  background-color: var(--background-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.dark-mode .btn-secondary {
  background-color: var(--light-background);
  color: var(--light-text);
  border-color: var(--border-color);
}

.dark-mode .btn-secondary:hover {
  color: white;
}

.dark-mode .nav-links a {
  color: var(--light-text);
}

.dark-mode .nav-links a:hover,
.dark-mode .nav-links a.router-link-active {
  color: white;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.mobile-menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-color);
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 99;
  padding: 2rem 1.5rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-menu.is-active {
  transform: translateX(0);
}

.mobile-nav-links {
  list-style: none;
  margin-bottom: 2rem;
}

.mobile-nav-links li {
  margin-bottom: 1.5rem;
}

.mobile-nav-links a {
  color: var(--text-color);
  font-size: 1.25rem;
  font-weight: 500;
}

.mobile-nav-links a:hover,
.mobile-nav-links a.router-link-active {
  color: var(--primary-color);
}

.mobile-cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-cta-buttons .btn {
  width: 100%;
}

@media (max-width: 1024px) {
  .main-nav, .cta-buttons {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style> 