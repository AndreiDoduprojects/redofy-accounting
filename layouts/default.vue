<template>
  <div>
    <header class="header">
      <div class="container">
        <h1>Redofy Accounting</h1>
      </div>
    </header>
    
    <main class="main">
      <slot />
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Redofy Accounting</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.header {
  background-color: #0066cc;
  color: white;
  padding: 1rem 0;
}

.main {
  min-height: calc(100vh - 140px);
  padding: 2rem 0;
}

.footer {
  background-color: #f8f9fa;
  padding: 1rem 0;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style> 