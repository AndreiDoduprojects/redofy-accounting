<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Modern AI-Powered Accounting for Swedish Businesses</h1>
            <p class="hero-subtitle">Redofy leverages the latest in AI technology to automate your accounting processes, saving you time and money.</p>
            <div class="hero-cta">
              <NuxtLink to="/signup" class="btn btn-primary">Start Free Trial</NuxtLink>
              <NuxtLink to="/demo" class="btn btn-secondary">Request a Demo</NuxtLink>
            </div>
          </div>
          <div class="hero-image">
            <img src="/img/hero-dashboard.png" alt="Redofy Dashboard" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section">
      <div class="container">
        <h2 class="section-title">Why Choose Redofy Accounting?</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Real-time Financial Dashboard</h3>
            <p>Get instant visibility into your financial status with our intuitive dashboard.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🤖</div>
            <h3>AI-Powered Automation</h3>
            <p>Our AI automatically categorizes transactions and reconciles accounts.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🧾</div>
            <h3>Smart Receipt Management</h3>
            <p>Snap a photo and our system extracts all the necessary data.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Mobile-Friendly</h3>
            <p>Access your accounting system from anywhere, on any device.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔗</div>
            <h3>Seamless Integrations</h3>
            <p>Connect with popular business tools and banking systems.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Bank-Grade Security</h3>
            <p>Your financial data is protected with enterprise-level security.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section testimonials-section">
      <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        
        <div class="testimonial-slider">
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"Redofy has transformed our accounting process. What used to take days now takes minutes!"</p>
              <div class="testimonial-author">
                <strong>Maria Andersson</strong>
                <span>CEO, TechStars AB</span>
              </div>
            </div>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"The AI capabilities are impressive. Our bookkeeping is nearly hands-free now."</p>
              <div class="testimonial-author">
                <strong>Johan Lindgren</strong>
                <span>Finance Director, Nordic Solutions</span>
              </div>
            </div>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"Customer support is exceptional. They're always there when we need assistance."</p>
              <div class="testimonial-author">
                <strong>Sofia Ekström</strong>
                <span>Owner, Ekström Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="section pricing-section">
      <div class="container">
        <h2 class="section-title">Simple, Transparent Pricing</h2>
        <p class="section-subtitle text-center">Choose the plan that works best for your business</p>
        
        <div class="pricing-cards">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Starter</h3>
              <div class="pricing-price">
                <span class="currency">kr</span>
                <span class="amount">299</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="pricing-features">
              <li>Up to 50 transactions per month</li>
              <li>Basic receipt scanning</li>
              <li>Financial dashboard</li>
              <li>Email support</li>
            </ul>
            <div class="pricing-cta">
              <NuxtLink to="/signup?plan=starter" class="btn btn-primary">Get Started</NuxtLink>
            </div>
          </div>
          
          <div class="pricing-card featured">
            <div class="pricing-badge">Most Popular</div>
            <div class="pricing-header">
              <h3>Business</h3>
              <div class="pricing-price">
                <span class="currency">kr</span>
                <span class="amount">599</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="pricing-features">
              <li>Up to 500 transactions per month</li>
              <li>Advanced AI categorization</li>
              <li>Unlimited receipt scanning</li>
              <li>Custom reports</li>
              <li>Priority support</li>
            </ul>
            <div class="pricing-cta">
              <NuxtLink to="/signup?plan=business" class="btn btn-primary">Get Started</NuxtLink>
            </div>
          </div>
          
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Enterprise</h3>
              <div class="pricing-price">
                <span class="currency">kr</span>
                <span class="amount">1299</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="pricing-features">
              <li>Unlimited transactions</li>
              <li>Full automation suite</li>
              <li>Advanced reporting</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
              <li>24/7 priority support</li>
            </ul>
            <div class="pricing-cta">
              <NuxtLink to="/signup?plan=enterprise" class="btn btn-primary">Get Started</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to transform your accounting?</h2>
          <p>Join thousands of businesses already using Redofy to simplify their accounting.</p>
          <div class="cta-buttons">
            <NuxtLink to="/signup" class="btn btn-primary">Start Free Trial</NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary">Contact Sales</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page setup
</script>

<style scoped>
.hero-section {
  padding: 5rem 0;
  background-color: #f9fafc;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.hero-text {
  flex: 1;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
}

.features-section {
  background-color: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.testimonials-section {
  background-color: var(--light-gray);
}

.testimonial-slider {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

.testimonial-slider::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome/Safari */
}

.testimonial {
  min-width: 300px;
  flex: 1;
}

.testimonial-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.testimonial-content p {
  font-style: italic;
  margin-bottom: 1rem;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
}

.section-subtitle {
  max-width: 600px;
  margin: 0 auto 3rem;
  color: var(--dark-gray);
}

.pricing-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.pricing-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  min-width: 300px;
  flex: 1;
  max-width: 350px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.pricing-card.featured {
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-price {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 1rem;
}

.currency {
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 0.25rem;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
}

.period {
  font-size: 1rem;
  color: var(--dark-gray);
  margin-left: 0.25rem;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.pricing-features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--light-gray);
  position: relative;
  padding-left: 1.5rem;
}

.pricing-features li::before {
  content: "✓";
  color: var(--success-color);
  position: absolute;
  left: 0;
}

.pricing-cta {
  text-align: center;
}

.cta-section {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  margin-bottom: 1rem;
}

.cta-content p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  opacity: 0.9;
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
  background-color: #f0f0f0;
}

.cta-section .btn-secondary {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.cta-section .btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column-reverse;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .pricing-card {
    width: 100%;
    max-width: 100%;
  }
  
  .pricing-card.featured {
    transform: none;
    order: -1;
    margin: 1rem 0;
  }
  
  .pricing-card.featured:hover {
    transform: translateY(-10px);
  }
  
  .cta-buttons {
    flex-direction: column;
  }
}
</style> 