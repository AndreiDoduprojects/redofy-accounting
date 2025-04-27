<template>
  <div class="container">
    <h1 class="title">Redofy Accounting System</h1>
    
    <div class="card-grid">
      <NuxtLink to="/website" class="card">
        <h2>Website</h2>
        <p>Public-facing website for customers</p>
      </NuxtLink>
      
      <NuxtLink to="/dashboard" class="card">
        <h2>Dashboard</h2>
        <p>Admin dashboard for managing accounting</p>
      </NuxtLink>
      
      <NuxtLink to="/app" class="card">
        <h2>Mobile App</h2>
        <p>Mobile application interface</p>
      </NuxtLink>
      
      <a href="http://localhost:8055" target="_blank" class="card">
        <h2>CMS</h2>
        <p>Content Management System (Directus)</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 2rem;
  text-align: center;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

h2 {
  margin-bottom: 0.5rem;
  color: #0066cc;
}

p {
  margin: 0;
  color: #35495e;
}
</style> 