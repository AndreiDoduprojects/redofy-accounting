<template>
  <div class="pricing-page">
    <IceBackground />
    
    <section class="hero-section">
      <div class="morphic-container">
        <h1 class="hero-title">Simple, Transparent <span class="hero-accent">Pricing</span></h1>
        <p class="hero-subtitle">Choose the perfect plan for your business needs with no hidden fees</p>
      </div>
    </section>
    
    <PricingPlans />
    
    <section class="comparison-section">
      <div class="morphic-container">
        <h2 class="section-title">Feature Comparison</h2>
        <p class="section-subtitle">A detailed look at what each plan includes</p>
        
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="feature-col">Feature</th>
                <th>Freelancer</th>
                <th>Business</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="feature-name">Transactions per month</td>
                <td>50</td>
                <td>250</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td class="feature-name">Users</td>
                <td>1</td>
                <td>3</td>
                <td>10</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td class="feature-name">AI-powered bookkeeping</td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">Receipt management</td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">Invoicing</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">Payroll processing</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">API integrations</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">Advanced reports</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">Multi-company management</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">Dedicated account manager</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">Bank connections</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">Custom integrations</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="x-icon">×</span></td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
              <tr>
                <td class="feature-name">SLA guarantees</td>
                <td><span class="x-icon">×</span></td>
                <td><span class="x-icon">×</span></td>
                <td><span class="x-icon">×</span></td>
                <td><span class="check-icon">✓</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
    <section class="testimonials-section">
      <div class="morphic-container">
        <h2 class="section-title">Trusted by Businesses</h2>
        <p class="section-subtitle">See what our customers have to say</p>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Redofy has completely transformed how we handle our accounting. The AI-powered features save us hours every week."</p>
            </div>
            <div class="testimonial-author">
              <img src="/img/avatars/avatar-1.jpg" alt="Sarah Johnson" class="author-avatar">
              <div class="author-info">
                <h4>Sarah Johnson</h4>
                <p>CFO, TechStart Inc.</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"The automated bookkeeping is a game-changer. What used to take days now takes minutes, and it's more accurate too."</p>
            </div>
            <div class="testimonial-author">
              <img src="/img/avatars/avatar-2.jpg" alt="Michael Chen" class="author-avatar">
              <div class="author-info">
                <h4>Michael Chen</h4>
                <p>Founder, GrowFast Solutions</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"As a freelancer, keeping track of finances was always a challenge. With Redofy, it's now the easiest part of my business."</p>
            </div>
            <div class="testimonial-author">
              <img src="/img/avatars/avatar-3.jpg" alt="Emma Wilson" class="author-avatar">
              <div class="author-info">
                <h4>Emma Wilson</h4>
                <p>Freelance Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="guarantee-section">
      <div class="morphic-container">
        <div class="guarantee-card">
          <div class="guarantee-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="guarantee-content">
            <h3>30-Day Money-Back Guarantee</h3>
            <p>Try Redofy risk-free. If you're not satisfied within 30 days, we'll refund your payment. No questions asked.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="faq-section">
      <div class="morphic-container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Everything you need to know about our pricing</p>
        
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Can I change plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will take effect at the start of your next billing cycle.</p>
          </div>
          
          <div class="faq-item">
            <h3>Is there a long-term contract?</h3>
            <p>No, all our plans are month-to-month with no long-term commitment required. You can cancel anytime.</p>
          </div>
          
          <div class="faq-item">
            <h3>Do you offer discounts for nonprofits?</h3>
            <p>Yes, we offer special pricing for nonprofit organizations. Please contact our sales team for more information.</p>
          </div>
          
          <div class="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, including Visa, Mastercard, and American Express. We also support payment via bank transfer for annual plans.</p>
          </div>
          
          <div class="faq-item">
            <h3>What happens if I exceed my transaction limit?</h3>
            <p>If you exceed your monthly transaction limit, you'll be notified and given the option to upgrade to a higher plan or pay for the additional transactions.</p>
          </div>
          
          <div class="faq-item">
            <h3>Can I get a custom plan for my business?</h3>
            <p>Absolutely! If none of our standard plans suit your needs, contact us, and we'll create a tailored solution for your business.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <div class="morphic-container">
        <div class="cta-content">
          <h2>Need a Custom Solution?</h2>
          <p>Contact our team to discuss your specific requirements and get a personalized offer tailored to your business needs.</p>
          <button class="cta-button primary">Contact Sales</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import IceBackground from '../components/IceBackground.vue'
import PricingPlans from '../components/PricingPlans.vue'
</script>

<style scoped>
.pricing-page {
  min-height: 100vh;
}

.hero-section {
  padding: 8rem 0 4rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.morphic-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--morphic-text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-accent {
  background: linear-gradient(135deg, var(--morphic-primary, #3b82f6), var(--morphic-accent, #8b5cf6));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--morphic-text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--morphic-text-primary);
  margin-bottom: 1rem;
  text-align: center;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--morphic-text-secondary);
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.5;
}

/* Comparison Table */
.comparison-section {
  padding: 5rem 0;
  background: rgba(var(--morphic-bg-secondary-rgb), 0.3);
}

.comparison-table-wrapper {
  overflow-x: auto;
  border-radius: var(--morphic-radius-lg);
  box-shadow: var(--morphic-shadow-md);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--morphic-bg-primary);
}

.comparison-table th,
.comparison-table td {
  padding: 1.25rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid var(--morphic-border-light);
}

.comparison-table th {
  font-weight: 600;
  color: var(--morphic-text-primary);
  background: var(--morphic-bg-secondary);
}

.feature-col {
  text-align: left;
  width: 25%;
}

.feature-name {
  text-align: left;
  font-weight: 500;
  color: var(--morphic-text-primary);
}

.check-icon {
  color: var(--morphic-success);
  font-weight: bold;
  font-size: 1.2rem;
}

.x-icon {
  color: var(--morphic-text-tertiary);
  font-weight: bold;
  font-size: 1.2rem;
}

/* Testimonials */
.testimonials-section {
  padding: 6rem 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--morphic-bg-primary);
  border-radius: var(--morphic-radius-lg);
  padding: 2rem;
  box-shadow: var(--morphic-shadow-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--morphic-shadow-lg);
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--morphic-text-primary);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
}

.author-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--morphic-text-primary);
  margin: 0 0 0.25rem;
}

.author-info p {
  font-size: 0.9rem;
  color: var(--morphic-text-tertiary);
  margin: 0;
}

/* Guarantee */
.guarantee-section {
  padding: 3rem 0;
}

.guarantee-card {
  background: linear-gradient(135deg, var(--morphic-primary-light), var(--morphic-primary));
  color: white;
  border-radius: var(--morphic-radius-lg);
  padding: 3rem;
  display: flex;
  align-items: center;
  box-shadow: var(--morphic-shadow-lg);
}

.guarantee-icon {
  font-size: 3rem;
  margin-right: 2rem;
  opacity: 0.9;
}

.guarantee-content h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 1rem;
}

.guarantee-content p {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
  max-width: 80%;
  line-height: 1.6;
}

/* FAQ */
.faq-section {
  padding: 6rem 0;
  background: rgba(var(--morphic-bg-secondary-rgb), 0.3);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: var(--morphic-bg-primary);
  border-radius: var(--morphic-radius-md);
  padding: 2rem;
  box-shadow: var(--morphic-shadow-sm);
}

.faq-item h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--morphic-text-primary);
  margin: 0 0 1rem;
}

.faq-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--morphic-text-secondary);
  margin: 0;
}

/* CTA */
.cta-section {
  padding: 6rem 0;
  background: var(--morphic-bg-primary, white);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(var(--morphic-border-light-rgb, 226, 232, 240), 0),
    rgba(var(--morphic-border-light-rgb, 226, 232, 240), 1),
    rgba(var(--morphic-border-light-rgb, 226, 232, 240), 0)
  );
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--morphic-text-primary, #0f172a);
  margin: 0 0 1.5rem;
}

.cta-content p {
  font-size: 1.25rem;
  color: var(--morphic-text-secondary, #64748b);
  margin: 0 0 2rem;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.cta-button.primary {
  background: linear-gradient(to right, var(--morphic-primary, #3b82f6), var(--morphic-accent, #8b5cf6));
  color: white;
  box-shadow: 0 5px 15px rgba(var(--morphic-primary-rgb, 59, 130, 246), 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(var(--morphic-primary-rgb, 59, 130, 246), 0.4);
}

/* Dark mode adjustments */
:root.dark .hero-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, 
    rgba(var(--morphic-border-dark-rgb, 51, 65, 85), 0),
    rgba(var(--morphic-border-dark-rgb, 51, 65, 85), 1),
    rgba(var(--morphic-border-dark-rgb, 51, 65, 85), 0)
  );
}

:root.dark .comparison-section {
  background: rgba(var(--morphic-bg-secondary-dark-rgb, 30, 41, 59), 0.5);
}

:root.dark .faq-section {
  background: rgba(var(--morphic-bg-secondary-dark-rgb, 30, 41, 59), 0.5);
}

:root.dark .cta-section {
  background: var(--morphic-bg-primary-dark, #1e293b);
}

:root.dark .cta-section::before {
  background: linear-gradient(to right, 
    rgba(var(--morphic-border-dark-rgb, 51, 65, 85), 0),
    rgba(var(--morphic-border-dark-rgb, 51, 65, 85), 1),
    rgba(var(--morphic-border-dark-rgb, 51, 65, 85), 0)
  );
}

:root.dark .guarantee-card {
  background: linear-gradient(135deg, 
    var(--morphic-primary-dark, #2563eb), 
    var(--morphic-accent-dark, #7c3aed)
  );
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
  
  .guarantee-content p {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .guarantee-card {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  
  .guarantee-icon {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-content p {
    font-size: 1.1rem;
  }
}
</style> 