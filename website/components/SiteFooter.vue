<template>
  <footer class="site-footer">
    <div class="footer-content container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="~/assets/images/logo.svg" alt="Redofy Logo" width="120" />
          </div>
          <p class="footer-tagline">Modern ekonomihantering för växande företag</p>
          <div class="footer-social">
            <a href="https://linkedin.com/company/redofy" class="social-link" aria-label="Linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://twitter.com/redofy" class="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://facebook.com/redofy" class="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com/redofy" class="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        
        <nav class="footer-nav">
          <div class="footer-nav-column">
            <h3>Produkter</h3>
            <ul>
              <li><NuxtLink to="/bokforing">Bokföring</NuxtLink></li>
              <li><NuxtLink to="/fakturering">Fakturering</NuxtLink></li>
              <li><NuxtLink to="/lonehantering">Lönehantering</NuxtLink></li>
              <li><NuxtLink to="/redovisning">Redovisning</NuxtLink></li>
              <li><NuxtLink to="/rapportering">Rapportering</NuxtLink></li>
            </ul>
          </div>
          
          <div class="footer-nav-column">
            <h3>Företaget</h3>
            <ul>
              <li><NuxtLink to="/om-oss">Om oss</NuxtLink></li>
              <li><NuxtLink to="/karriar">Karriär</NuxtLink></li>
              <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
              <li><NuxtLink to="/partners">Partners</NuxtLink></li>
              <li><NuxtLink to="/press">Press</NuxtLink></li>
            </ul>
          </div>
          
          <div class="footer-nav-column">
            <h3>Resurser</h3>
            <ul>
              <li><NuxtLink to="/blogg">Blogg</NuxtLink></li>
              <li><NuxtLink to="/support">Support</NuxtLink></li>
              <li><NuxtLink to="/help-center">Hjälpcenter</NuxtLink></li>
              <li><NuxtLink to="/webinars">Webbinarier</NuxtLink></li>
              <li><NuxtLink to="/guider">Guider</NuxtLink></li>
            </ul>
          </div>
        </nav>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-legal">
          <span>&copy; {{ new Date().getFullYear() }} Redofy AB. Alla rättigheter reserverade.</span>
          <NuxtLink to="/integritetspolicy">Integritetspolicy</NuxtLink>
          <NuxtLink to="/villkor">Användarvillkor</NuxtLink>
          <NuxtLink to="/cookies">Cookies</NuxtLink>
        </div>
        
        <div class="footer-credentials">
          <div class="footer-seal">
            <img src="~/assets/images/ssl-seal.svg" alt="SSL Secure" width="60" />
          </div>
          <div class="footer-payment">
            <img src="~/assets/images/payment-methods.svg" alt="Accepted Payment Methods" width="180" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-pattern"></div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--morphic-bg-primary, #ffffff);
  color: var(--morphic-text-primary, #0f172a);
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  flex: 1;
  min-width: 250px;
}

.footer-logo {
  margin-bottom: 1.25rem;
}

.footer-tagline {
  font-size: 1rem;
  color: var(--morphic-text-secondary, #334155);
  margin-bottom: 1.5rem;
  max-width: 300px;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.5rem;
  background-color: var(--morphic-bg-tertiary, #e2e8f0);
  color: var(--morphic-text-tertiary, #475569);
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: var(--morphic-primary, #3b82f6);
  color: white;
  transform: translateY(-3px);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.footer-nav-column h3 {
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  color: var(--morphic-text-primary, #0f172a);
}

.footer-nav-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav-column li {
  margin-bottom: 0.75rem;
}

.footer-nav-column a {
  color: var(--morphic-text-secondary, #475569);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.95rem;
}

.footer-nav-column a:hover {
  color: var(--morphic-primary, #3b82f6);
}

.footer-bottom {
  border-top: 1px solid var(--morphic-border-light, #e2e8f0);
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-legal {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.875rem;
  color: var(--morphic-text-tertiary, #64748b);
}

.footer-legal a {
  color: var(--morphic-text-tertiary, #64748b);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-legal a:hover {
  color: var(--morphic-primary, #3b82f6);
}

.footer-credentials {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('~/assets/images/pattern-dots.svg');
  background-size: 50px;
  opacity: 0.08;
  z-index: 1;
}

/* Dark mode styles */
:root.dark .site-footer {
  background-color: var(--morphic-bg-primary-dark, #1e293b);
}

:root.dark .footer-tagline {
  color: var(--morphic-text-secondary-dark, #94a3b8);
}

:root.dark .social-link {
  background-color: var(--morphic-bg-tertiary-dark, #334155);
  color: var(--morphic-text-tertiary-dark, #e2e8f0);
}

:root.dark .footer-nav-column h3 {
  color: var(--morphic-text-primary-dark, #f8fafc);
}

:root.dark .footer-nav-column a {
  color: var(--morphic-text-secondary-dark, #94a3b8);
}

:root.dark .footer-bottom {
  border-top-color: var(--morphic-border-dark, #334155);
}

:root.dark .footer-legal,
:root.dark .footer-legal a {
  color: var(--morphic-text-tertiary-dark, #94a3b8);
}

@media (max-width: 768px) {
  .footer-grid {
    flex-direction: column;
    gap: 2.5rem;
  }
  
  .footer-nav {
    flex-direction: column;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-legal {
    justify-content: center;
  }
}
</style> 