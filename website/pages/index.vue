<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Modern ekonomihantering för växande företag</h1>
          <p class="hero-subtitle">
            Automatiserad bokföring, fakturering och lönehantering med AI-stöd som ger dig tid att fokusera på din kärnverksamhet
          </p>
          <div class="hero-buttons">
            <NuxtLink to="/demo" class="btn btn-primary btn-large">Boka demo</NuxtLink>
            <NuxtLink to="/tjanster" class="btn btn-secondary btn-large">Utforska tjänster</NuxtLink>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">2,500+</span>
              <span class="stat-label">Nöjda kunder</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">98%</span>
              <span class="stat-label">Kundnöjdhet</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">60%</span>
              <span class="stat-label">Tidsbesparing</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <img src="/img/illustrations/dashboard-preview.png" alt="Redofy Dashboard" />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>Allt du behöver för att driva din verksamhet framåt</h2>
          <p>Kraftfulla verktyg som gör ekonomihanteringen enkel och effektiv</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 8v13H3V8"></path>
                <path d="M1 3h22v5H1z"></path>
                <path d="M10 12h4"></path>
              </svg>
            </div>
            <h3>Automatiserad bokföring</h3>
            <p>AI-stödd bokföring som automatiskt kategoriserar transaktioner och minskar manuellt arbete</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M7 15h0M2 9.5h20"></path>
              </svg>
            </div>
            <h3>Digital fakturering</h3>
            <p>Skapa och skicka professionella fakturor på sekunder med automatiska påminnelser</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Lönehantering</h3>
            <p>Automatisera löneprocessen med integrerad skatt- och avgiftsberäkning</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v8"></path>
                <path d="m16 6-4 4-4-4"></path>
                <rect x="2" y="14" width="20" height="8" rx="2"></rect>
                <path d="M6 18h.01M10 18h.01"></path>
              </svg>
            </div>
            <h3>Integrationer</h3>
            <p>Sömlös integration med banktjänster, Swish, Fortnox, Visma och många fler</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                <path d="M8.5 8.5v.01"></path>
                <path d="M16 15.5v.01"></path>
                <path d="M12 12v.01"></path>
                <path d="M11 17v.01"></path>
                <path d="M7 14v.01"></path>
              </svg>
            </div>
            <h3>AI-baserade insikter</h3>
            <p>Få värdefulla ekonomiska insikter och prognoser baserade på din företagsdata</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="16" height="6" x="4" y="5" rx="2"></rect>
                <rect width="16" height="6" x="4" y="13" rx="2"></rect>
                <path d="M9 11v-2"></path>
                <path d="M9 19v-2"></path>
                <path d="M15 11v-2"></path>
                <path d="M15 19v-2"></path>
              </svg>
            </div>
            <h3>Realtidsöversikt</h3>
            <p>Få en tydlig överblick över ditt företags ekonomi när och var du vill</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2>Vad våra kunder säger</h2>
          <p>Hundratals företag förlitar sig på Redofy för sin ekonomihantering</p>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Redofy har revolutionerat vår ekonomihantering. Vi sparar flera timmar varje vecka och har full kontroll över vår ekonomi."</p>
            </div>
            <div class="testimonial-author">
              <img src="/img/testimonial-1.jpg" alt="Anna Berglund" />
              <div>
                <h4>Anna Berglund</h4>
                <p>VD, Berglunds Bageri</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Den automatiserade bokföringen och de fantastiska rapporterna har gett oss insikter som hjälpt oss att växa med 30% under det senaste året."</p>
            </div>
            <div class="testimonial-author">
              <img src="/img/testimonial-2.jpg" alt="Johan Andersson" />
              <div>
                <h4>Johan Andersson</h4>
                <p>Ekonomichef, Tech Solutions AB</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Kundsupporten är enastående. De svarar snabbt och hjälper till med allt vi behöver. Bästa investeringen för vårt företag."</p>
            </div>
            <div class="testimonial-author">
              <img src="/img/testimonial-3.jpg" alt="Maria Svensson" />
              <div>
                <h4>Maria Svensson</h4>
                <p>Grundare, Svea Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingPlans />

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Redo att ta nästa steg?</h2>
          <p>Boka en demo och se hur Redofy kan hjälpa ditt företag att växa</p>
          <div class="cta-buttons">
            <NuxtLink to="/demo" class="btn btn-primary btn-large">Boka demo</NuxtLink>
            <NuxtLink to="/kontakt" class="btn btn-secondary btn-large">Kontakta oss</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No extra logic needed for this page
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.section-header h2 {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.section-header p {
  font-size: 1.125rem;
  color: var(--light-text);
}

/* Hero Section */
.hero-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, var(--light-background), var(--background-color));
  position: relative;
}

.hero-section .container {
  display: flex;
  align-items: center;
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--light-text);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.btn-large {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--light-text);
}

.hero-image {
  flex: 1;
}

.hero-image img {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background-color: var(--background-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background-color: var(--light-background);
  padding: 2rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border-color);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 0.5rem;
  margin-bottom: 1.25rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-color);
}

.feature-card p {
  color: var(--light-text);
  font-size: 0.95rem;
}

/* Testimonials Section */
.testimonials-section {
  padding: 6rem 0;
  background-color: var(--light-background);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonial-card {
  background-color: var(--background-color);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--border-color);
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.testimonial-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-author img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-author h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--text-color);
}

.testimonial-author p {
  font-size: 0.875rem;
  color: var(--light-text);
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background-color: var(--primary-color);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

.cta-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.cta-section .btn-primary {
  background-color: white;
  color: var(--primary-color);
}

.cta-section .btn-primary:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.cta-section .btn-secondary {
  background-color: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
}

.cta-section .btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* Dark mode specific adjustments */
:deep(.dark-mode) .hero-section {
  background: linear-gradient(to bottom, var(--light-background), var(--background-color));
}

:deep(.dark-mode) .feature-card {
  background-color: var(--light-background);
  border-color: var(--border-color);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

:deep(.dark-mode) .testimonial-card {
  background-color: var(--background-color);
  border-color: var(--border-color);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

:deep(.dark-mode) .hero-image img {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
}

:deep(.dark-mode) .mobile-menu {
  background-color: var(--background-color);
}

:deep(.dark-mode) .mobile-menu-toggle span {
  background-color: var(--text-color);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-section .container {
    flex-direction: column;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .features-grid,
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}
</style> 