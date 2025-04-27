<template>
  <div class="pricing-page">
    <IceBackground />
    
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Simple, Transparent Pricing</h1>
        <p class="hero-subtitle">Choose the perfect plan for your business needs with no hidden fees</p>
      </div>
    </section>
    
    <PricingPlans />
    
    <section class="comparison-section">
      <div class="container">
        <h2 class="comparison-title">Feature Comparison</h2>
        <p class="comparison-subtitle">A detailed look at what each plan includes</p>
        
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Egenföretagare</th>
                <th>Företag</th>
                <th>Professionell</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Automated Bookkeeping</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Monthly Transactions</td>
                <td>50</td>
                <td>250</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Custom Reports</td>
                <td>Basic</td>
                <td>Advanced</td>
                <td>Custom</td>
                <td>Custom+</td>
              </tr>
              <tr>
                <td>Receipt Management</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Invoicing</td>
                <td>-</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Payroll Processing</td>
                <td>-</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>API Integration</td>
                <td>-</td>
                <td>Basic</td>
                <td>Advanced</td>
                <td>Custom</td>
              </tr>
              <tr>
                <td>Multi-company Management</td>
                <td>-</td>
                <td>-</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Number of Users</td>
                <td>1</td>
                <td>3</td>
                <td>10</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Support</td>
                <td>Email</td>
                <td>Priority</td>
                <td>Dedicated</td>
                <td>24/7 Dedicated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
    <section class="testimonials-section">
      <div class="container">
        <h2 class="testimonials-title">What Our Customers Say</h2>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Redofy has completely transformed how we manage our finances. The automation saves us hours every week, and the reports give us insights we never had before."</p>
            </div>
            <div class="testimonial-author">
              <img src="/img/testimonial-1.jpg" alt="Anna Berglund" />
              <div>
                <h4>Anna Berglund</h4>
                <p>CEO, Berglunds Bakery</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"We started with the basic plan and grew into the Professional plan as our business expanded. The scalability has been perfect for our needs."</p>
            </div>
            <div class="testimonial-author">
              <img src="/img/testimonial-2.jpg" alt="Johan Andersson" />
              <div>
                <h4>Johan Andersson</h4>
                <p>CFO, Tech Solutions AB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="free-trial-section">
      <div class="container">
        <div class="free-trial-content">
          <div class="free-trial-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <h2>30-Day Free Trial</h2>
          <p>Try any Redofy plan free for 30 days with no commitment. Experience all features and see how our platform can transform your accounting workflow before you decide.</p>
          <NuxtLink to="/register" class="trial-button">Start Free Trial</NuxtLink>
        </div>
      </div>
    </section>
    
    <section class="faq-section">
      <div class="container">
        <h2 class="faq-title">Frequently Asked Questions</h2>
        
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Is there a free trial?</h3>
            <p>Yes! You can try any Redofy plan free for 14 days with no credit card required.</p>
          </div>
          
          <div class="faq-item">
            <h3>Can I change plans later?</h3>
            <p>Absolutely. You can upgrade or downgrade your plan at any time.</p>
          </div>
          
          <div class="faq-item">
            <h3>Are there any hidden fees?</h3>
            <p>No, we believe in transparent pricing. The price you see is what you pay.</p>
          </div>
          
          <div class="faq-item">
            <h3>Can I cancel anytime?</h3>
            <p>Yes, there's no long-term contract. You can cancel your subscription whenever you want.</p>
          </div>
        </div>
        
        <div class="contact-cta">
          <p>Have more questions or need a custom solution?</p>
          <NuxtLink to="/contact" class="contact-button">Contact Us</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional script needed as PricingPlans handles its own state
</script>

<style scoped>
.pricing-page {
  background-color: var(--morphic-neutral-50);
}

.hero-section {
  text-align: center;
  padding: 6rem 0 3rem;
  position: relative;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--morphic-primary-dark), var(--morphic-primary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  color: var(--morphic-text-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.comparison-section {
  padding: 5rem 0;
  background-color: white;
}

.comparison-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--morphic-text-primary);
}

.comparison-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: var(--morphic-text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.comparison-table-wrapper {
  overflow-x: auto;
  box-shadow: var(--morphic-shadow-md);
  border-radius: var(--morphic-radius-lg);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid var(--morphic-border-light);
}

.comparison-table th {
  background-color: var(--morphic-bg-secondary);
  font-weight: 600;
  color: var(--morphic-text-primary);
}

.comparison-table th:first-child,
.comparison-table td:first-child {
  text-align: left;
  font-weight: 500;
}

.comparison-table tr:hover {
  background-color: var(--morphic-bg-tertiary);
}

.testimonials-section {
  padding: 5rem 0;
  background: linear-gradient(to right, var(--morphic-bg-secondary), var(--morphic-bg-tertiary));
}

.testimonials-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--morphic-text-primary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background-color: var(--morphic-bg-primary);
  border-radius: var(--morphic-radius-lg);
  box-shadow: var(--morphic-shadow-md);
  overflow: hidden;
}

.testimonial-content {
  padding: 2rem;
  border-bottom: 1px solid var(--morphic-border-light);
}

.testimonial-content p {
  font-style: italic;
  color: var(--morphic-text-secondary);
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
}

.testimonial-author h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: var(--morphic-text-primary);
}

.testimonial-author p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--morphic-text-tertiary);
}

.free-trial-section {
  padding: 5rem 0;
  background-color: white;
}

.free-trial-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.free-trial-icon {
  margin-bottom: 1.5rem;
  color: var(--morphic-primary);
}

.free-trial-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--morphic-text-primary);
}

.free-trial-content p {
  font-size: 1.1rem;
  color: var(--morphic-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.trial-button {
  display: inline-block;
  padding: 0.9rem 2rem;
  background: linear-gradient(to right, var(--morphic-primary-dark), var(--morphic-primary));
  color: white;
  border-radius: var(--morphic-radius-md);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.trial-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(var(--morphic-primary-rgb), 0.25);
}

.faq-section {
  padding: 5rem 0;
  background-color: var(--morphic-bg-secondary);
}

.faq-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--morphic-text-primary);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.faq-item {
  background-color: var(--morphic-bg-primary);
  border-radius: var(--morphic-radius-md);
  padding: 1.5rem;
  box-shadow: var(--morphic-shadow-sm);
}

.faq-item h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--morphic-text-primary);
}

.faq-item p {
  color: var(--morphic-text-secondary);
  line-height: 1.6;
}

.contact-cta {
  text-align: center;
  background-color: var(--morphic-bg-primary);
  border-radius: var(--morphic-radius-lg);
  padding: 3rem;
  box-shadow: var(--morphic-shadow-md);
}

.contact-cta p {
  font-size: 1.2rem;
  color: var(--morphic-text-secondary);
  margin-bottom: 1.5rem;
}

.contact-button {
  display: inline-block;
  padding: 0.9rem 2rem;
  background: linear-gradient(to right, var(--morphic-primary-dark), var(--morphic-primary));
  color: white;
  border-radius: var(--morphic-radius-md);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(var(--morphic-primary-rgb), 0.25);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.25rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .comparison-section,
  .testimonials-section,
  .free-trial-section,
  .faq-section {
    padding: 3rem 0;
  }
}
</style> 