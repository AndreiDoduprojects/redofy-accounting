<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <NuxtLink to="/" class="logo-link">
              <h1>Redofy</h1>
            </NuxtLink>
          </div>
          <nav class="main-nav">
            <ul class="nav-list">
              <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
              <li><NuxtLink to="/features" class="nav-link">Features</NuxtLink></li>
              <li><NuxtLink to="/accounting" class="nav-link">Accounting</NuxtLink></li>
              <li><NuxtLink to="/payroll/agi" class="nav-link">AGI Calculator</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink></li>
              <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
              <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
            </ul>
          </nav>
          <div class="auth-buttons">
            <NuxtLink to="/login" class="btn btn-secondary">Log In</NuxtLink>
            <NuxtLink to="/signup" class="btn btn-primary">Sign Up</NuxtLink>
          </div>
        </div>
      </div>
    </header>
    
    <main class="main-content">
      <slot />
    </main>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h3>Redofy Accounting</h3>
            <p>Modern AI-powered accounting for Swedish businesses</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Product</h4>
              <ul>
                <li><NuxtLink to="/features">Features</NuxtLink></li>
                <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
                <li><NuxtLink to="/integrations">Integrations</NuxtLink></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Company</h4>
              <ul>
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li><NuxtLink to="/careers">Careers</NuxtLink></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li><NuxtLink to="/support">Support</NuxtLink></li>
                <li><NuxtLink to="/docs">Documentation</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Redofy. All rights reserved.</p>
          <div class="footer-legal">
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms">Terms of Service</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  text-decoration: none;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.main-nav {
  display: flex;
}

.nav-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--secondary-color);
  font-weight: 500;
}

.nav-link:hover {
  color: var(--primary-color);
}

.auth-buttons {
  display: flex;
  gap: 0.75rem;
}

.main-content {
  min-height: calc(100vh - 300px);
}

.footer {
  background-color: var(--secondary-color);
  color: #fff;
  padding: 3rem 0 1.5rem;
  margin-top: 3rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.footer-logo {
  flex: 1;
  max-width: 300px;
}

.footer-logo h3 {
  color: white;
  margin-bottom: 0.5rem;
}

.footer-links {
  display: flex;
  gap: 3rem;
}

.footer-column h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.footer-column a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
}

.footer-legal {
  display: flex;
  gap: 1rem;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.7);
}

.footer-legal a:hover {
  color: white;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .main-nav {
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .nav-list {
    flex-direction: column;
    width: 100%;
  }
  
  .auth-buttons {
    width: 100%;
    justify-content: center;
  }
  
  .footer-content {
    flex-direction: column;
  }
  
  .footer-logo {
    margin-bottom: 2rem;
    max-width: 100%;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-legal {
    margin-top: 1rem;
  }
}
</style> 