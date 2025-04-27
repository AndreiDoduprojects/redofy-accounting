<template>
  <div class="dashboard-app">
    <!-- Main header with controls -->
    <header class="dashboard-header">
      <div class="header-container">
        <div class="logo">
          <div class="text-logo">Redofy</div>
        </div>
        
        <div class="header-controls">
          <ThemeToggle />
          <div class="user-menu">
            <button class="user-button">
              <span class="user-avatar">A</span>
              <span class="user-name">Admin</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    
    <div class="dashboard-layout">
      <aside class="sidebar">
        <nav class="sidebar-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#" class="nav-link active">
                <span class="nav-icon">📊</span>
                <span class="nav-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="nav-icon">📝</span>
                <span class="nav-text">Transactions</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="nav-icon">🧾</span>
                <span class="nav-text">Invoices</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="nav-icon">👥</span>
                <span class="nav-text">Customers</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="nav-icon">⚙️</span>
                <span class="nav-text">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      
      <main class="content">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import ThemeToggle from '~/components/shared/ThemeToggle.vue';
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: var(--text-color, #1e293b);
  background-color: var(--background-color, #f8fafc);
  height: 100%;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.dashboard-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styles */
.dashboard-header {
  background-color: white;
  border-bottom: 1px solid var(--border-color, #e2e8f0);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-container {
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
}

.text-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color, #0066cc);
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: transparent;
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 0.375rem;
  cursor: pointer;
}

.user-avatar {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color, #0ea5e9);
  color: white;
  border-radius: 9999px;
  font-weight: 600;
}

/* Layout styles */
.dashboard-layout {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 240px;
  background-color: white;
  border-right: 1px solid var(--border-color, #e2e8f0);
  height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.nav-item {
  margin-bottom: 0.25rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: var(--text-color, #1e293b);
  text-decoration: none;
  border-radius: 0.375rem;
  margin: 0 0.5rem;
}

.nav-link:hover {
  background-color: var(--light-background, #f1f5f9);
}

.nav-link.active {
  background-color: var(--primary-color, #0ea5e9);
  color: white;
}

.content {
  flex: 1;
  padding: 1.5rem;
  max-width: 100%;
  overflow-x: auto;
}

/* Dark mode adjustments */
.dark-mode {
  --text-color: #f1f5f9;
  --background-color: #0f172a;
  --light-background: #1e293b;
  --border-color: #334155;
  color-scheme: dark;
}

.dark-mode .dashboard-header,
.dark-mode .sidebar {
  background-color: var(--background-color);
  border-color: var(--border-color);
}

.dark-mode .nav-link:hover {
  background-color: var(--light-background);
}

.dark-mode .user-button {
  border-color: var(--border-color);
  color: var(--text-color);
}
</style> 