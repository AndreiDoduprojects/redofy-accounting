<template>
  <section class="pricing-section">
    <div class="container">
      <div class="pricing-header">
        <h2 class="pricing-title">Transparent Pricing</h2>
        <p class="pricing-subtitle">Simple and flexible plans that grow with your business</p>
        
        <div class="billing-toggle">
          <span :class="{ 'active': !isYearly }">Monthly</span>
          <label class="toggle">
            <input type="checkbox" v-model="isYearly">
            <span class="slider"></span>
          </label>
          <span :class="{ 'active': isYearly }">Annually <span class="save-badge">Save 20%</span></span>
        </div>
      </div>
      
      <div class="pricing-grid">
        <div 
          v-for="(plan, index) in plans" 
          :key="index" 
          class="pricing-card"
          :class="{ 'popular': plan.popular }"
        >
          <div v-if="plan.popular" class="popular-badge">Most Popular</div>
          
          <div class="pricing-card-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
          </div>
          
          <div class="pricing-card-price">
            <div class="price">
              <span class="currency">SEK</span>
              <span class="amount">{{ isYearly ? plan.yearlyPrice : plan.monthlyPrice }}</span>
              <span class="period">/{{ isYearly ? 'year' : 'month' }}</span>
            </div>
            <p v-if="isYearly" class="monthly-equivalent">
              Equals {{ Math.round(plan.yearlyPrice / 12) }} kr/month
            </p>
          </div>
          
          <div class="pricing-card-features">
            <ul>
              <li v-for="(feature, i) in plan.features" :key="i" class="feature-item">
                <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <div class="pricing-card-action">
            <button class="cta-button" :class="{ 'primary': plan.popular, 'secondary': !plan.popular }">
              Get Started
            </button>
            <p class="no-contract">No contract</p>
          </div>
        </div>
      </div>
      
      <div class="enterprise-plan">
        <div class="enterprise-content">
          <div class="enterprise-info">
            <h3>Enterprise</h3>
            <p>Custom solutions for organizations with complex accounting needs</p>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Dedicated account manager
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Custom integrations
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                SLA guarantees
              </li>
            </ul>
          </div>
          <div class="enterprise-action">
            <button class="cta-button primary">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isYearly = ref(true)

const plans = [
  {
    name: 'Freelancer',
    description: 'Perfect for freelancers and small businesses',
    monthlyPrice: 199,
    yearlyPrice: 1908,
    popular: false,
    features: [
      'Automated bookkeeping',
      'Up to 50 transactions/month',
      'Basic reports',
      'Receipt management',
      'Email support',
      '1 user'
    ]
  },
  {
    name: 'Business',
    description: 'For growing businesses with more extensive needs',
    monthlyPrice: 399,
    yearlyPrice: 3828,
    popular: true,
    features: [
      'Everything in Freelancer',
      'Up to 250 transactions/month',
      'Advanced reports',
      'Invoicing',
      'Priority support',
      'Up to 3 users',
      'API integration',
      'Payroll processing'
    ]
  },
  {
    name: 'Professional',
    description: 'For established businesses with complex financial needs',
    monthlyPrice: 799,
    yearlyPrice: 7668,
    popular: false,
    features: [
      'Everything in Business',
      'Unlimited transactions',
      'Custom reports',
      'Dedicated account rep',
      'Up to 10 users',
      'Advanced forecasting',
      'Multi-company management',
      'Bank connections'
    ]
  }
]
</script>

<style scoped>
.pricing-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, var(--morphic-bg-gradient-start, #f8fafc), var(--morphic-bg-gradient-end, #f1f5f9));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.pricing-header {
  text-align: center;
  margin-bottom: 4rem;
}

.pricing-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--morphic-primary, #0284c7), var(--morphic-accent, #0ea5e9));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.pricing-subtitle {
  font-size: 1.25rem;
  color: var(--morphic-text-secondary, #64748b);
  max-width: 650px;
  margin: 0 auto 2rem;
}

.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.billing-toggle span {
  font-size: 1rem;
  color: var(--morphic-text-tertiary, #64748b);
  font-weight: 500;
}

.billing-toggle span.active {
  color: var(--morphic-text-primary, #0f172a);
  font-weight: 600;
}

.save-badge {
  display: inline-block;
  background: var(--morphic-success, #10b981);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  margin-left: 0.5rem;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--morphic-bg-tertiary, #e2e8f0);
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
  box-shadow: var(--morphic-shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.1));
}

input:checked + .slider {
  background-color: var(--morphic-primary, #3b82f6);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--morphic-primary, #3b82f6);
}

input:checked + .slider:before {
  transform: translateX(30px);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.pricing-card {
  background: var(--morphic-bg-primary, white);
  border-radius: 16px;
  box-shadow: var(--morphic-shadow-md, 0 10px 25px rgba(0, 0, 0, 0.05));
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid var(--morphic-border-light, #f1f5f9);
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--morphic-shadow-lg, 0 15px 35px rgba(0, 0, 0, 0.1));
}

.pricing-card.popular {
  transform: scale(1.03);
  box-shadow: var(--morphic-shadow-lg, 0 15px 35px rgba(0, 0, 0, 0.1));
  border: 2px solid var(--morphic-primary, #3b82f6);
}

.pricing-card.popular:hover {
  transform: scale(1.03) translateY(-5px);
}

.popular-badge {
  position: absolute;
  top: 0;
  right: 2rem;
  background: var(--morphic-primary, #3b82f6);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0 0 8px 8px;
}

.pricing-card-header {
  padding: 2rem 2rem 1rem;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--morphic-text-primary, #0f172a);
  margin-bottom: 0.5rem;
}

.plan-description {
  font-size: 0.95rem;
  color: var(--morphic-text-secondary, #64748b);
}

.pricing-card-price {
  padding: 1rem 2rem 2rem;
  border-bottom: 1px solid var(--morphic-border-light, #f1f5f9);
}

.price {
  display: flex;
  align-items: flex-start;
  line-height: 1;
}

.currency {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--morphic-text-primary, #0f172a);
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: var(--morphic-text-primary, #0f172a);
  margin: 0 0.3rem;
}

.period {
  font-size: 1rem;
  color: var(--morphic-text-tertiary, #64748b);
  align-self: flex-end;
  margin-bottom: 0.5rem;
}

.monthly-equivalent {
  font-size: 0.85rem;
  color: var(--morphic-text-tertiary, #94a3b8);
  margin-top: 0.5rem;
}

.pricing-card-features {
  padding: 2rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: var(--morphic-text-secondary, #334155);
}

.feature-icon {
  width: 18px;
  height: 18px;
  color: var(--morphic-accent, #0ea5e9);
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.pricing-card-action {
  padding: 0 2rem 2rem;
  text-align: center;
}

.cta-button {
  display: block;
  width: 100%;
  padding: 0.9rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: linear-gradient(to right, var(--morphic-primary, #0284c7), var(--morphic-accent, #0ea5e9));
  color: white;
  box-shadow: 0 5px 15px rgba(14, 165, 233, 0.2);
}

.cta-button.secondary {
  background: var(--morphic-bg-tertiary, #f1f5f9);
  color: var(--morphic-text-primary, #0f172a);
}

.cta-button.primary:hover {
  box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
}

.cta-button.secondary:hover {
  background: var(--morphic-bg-secondary, #e2e8f0);
}

.no-contract {
  font-size: 0.8rem;
  color: var(--morphic-text-tertiary, #94a3b8);
  margin-top: 0.75rem;
}

.enterprise-plan {
  background: var(--morphic-bg-primary, white);
  border-radius: 16px;
  box-shadow: var(--morphic-shadow-md, 0 10px 25px rgba(0, 0, 0, 0.05));
  margin-bottom: 4rem;
  border: 1px solid var(--morphic-border-light, #e2e8f0);
}

.enterprise-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
}

.enterprise-info {
  flex: 1;
}

.enterprise-info h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--morphic-text-primary, #0f172a);
  margin-bottom: 1rem;
}

.enterprise-info p {
  font-size: 1.1rem;
  color: var(--morphic-text-secondary, #64748b);
  margin-bottom: 1.5rem;
  max-width: 80%;
}

.enterprise-info ul {
  display: flex;
  gap: 2rem;
}

.enterprise-info li {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--morphic-text-secondary, #334155);
}

.enterprise-info li svg {
  width: 18px;
  height: 18px;
  color: var(--morphic-accent, #0ea5e9);
  margin-right: 0.5rem;
}

.enterprise-action {
  flex-shrink: 0;
}

.enterprise-action .cta-button {
  padding: 0.9rem 2rem;
}

/* Dark mode overrides */
:root.dark .pricing-section {
  background: linear-gradient(to bottom, var(--morphic-bg-gradient-start-dark, #0f172a), var(--morphic-bg-gradient-end-dark, #1e293b));
}

:root.dark .pricing-card,
:root.dark .enterprise-plan {
  background: var(--morphic-bg-primary-dark, #1e293b);
  border-color: var(--morphic-border-dark, #334155);
}

:root.dark .slider {
  background-color: var(--morphic-bg-tertiary-dark, #334155);
}

:root.dark .cta-button.secondary {
  background: var(--morphic-bg-tertiary-dark, #334155);
  color: var(--morphic-text-primary-dark, #f1f5f9);
}

:root.dark .cta-button.secondary:hover {
  background: var(--morphic-bg-secondary-dark, #475569);
}

@media (max-width: 768px) {
  .pricing-title {
    font-size: 2rem;
  }
  
  .pricing-subtitle {
    font-size: 1.1rem;
  }
  
  .pricing-card.popular {
    transform: scale(1);
  }
  
  .pricing-card.popular:hover {
    transform: translateY(-5px);
  }
  
  .enterprise-content {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
  
  .enterprise-info p {
    max-width: 100%;
  }
  
  .enterprise-info ul {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
}
</style> 