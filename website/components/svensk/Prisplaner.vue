<template>
  <section class="pricing-section">
    <div class="container">
      <div class="pricing-header">
        <h2 class="pricing-title">Transparent prissättning</h2>
        <p class="pricing-subtitle">Enkla och flexibla planer som växer med ditt företag</p>
        
        <div class="billing-toggle">
          <span :class="{ 'active': !isYearly }">Månadsvis</span>
          <label class="toggle">
            <input type="checkbox" v-model="isYearly">
            <span class="slider"></span>
          </label>
          <span :class="{ 'active': isYearly }">Årligen <span class="save-badge">Spara 20%</span></span>
        </div>
      </div>
      
      <div class="pricing-grid">
        <div 
          v-for="(plan, index) in plans" 
          :key="index" 
          class="pricing-card"
          :class="{ 'popular': plan.popular }"
        >
          <div v-if="plan.popular" class="popular-badge">Populärast</div>
          
          <div class="pricing-card-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
          </div>
          
          <div class="pricing-card-price">
            <div class="price">
              <span class="currency">SEK</span>
              <span class="amount">{{ isYearly ? plan.yearlyPrice : plan.monthlyPrice }}</span>
              <span class="period">/{{ isYearly ? 'år' : 'månad' }}</span>
            </div>
            <p v-if="isYearly" class="monthly-equivalent">
              Motsvarar {{ Math.round(plan.yearlyPrice / 12) }} kr/månad
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
              Kom igång
            </button>
            <p class="no-contract">Ingen bindningstid</p>
          </div>
        </div>
      </div>
      
      <div class="enterprise-plan">
        <div class="enterprise-content">
          <div class="enterprise-info">
            <h3>Enterprise</h3>
            <p>Skräddarsydda lösningar för större företag med specifika behov</p>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Dedikerad support
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Anpassad implementering
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Avancerade API-integrationer
              </li>
            </ul>
          </div>
          <div class="enterprise-action">
            <button class="cta-button primary">Kontakta oss</button>
          </div>
        </div>
      </div>
      
      <div class="pricing-faq">
        <h3>Vanliga frågor om våra priser</h3>
        <div class="faq-grid">
          <div class="faq-item">
            <h4>Finns det en kostnadsfri testperiod?</h4>
            <p>Ja, du kan prova alla våra planer kostnadsfritt i 30 dagar utan kreditkort.</p>
          </div>
          <div class="faq-item">
            <h4>Kan jag byta plan senare?</h4>
            <p>Absolut, du kan när som helst uppgradera eller nedgradera din plan efter behov.</p>
          </div>
          <div class="faq-item">
            <h4>Vad händer när min testperiod är slut?</h4>
            <p>Efter testperioden behöver du välja en plan för att fortsätta använda Redofy.</p>
          </div>
          <div class="faq-item">
            <h4>Tillkommer några dolda avgifter?</h4>
            <p>Nej, vi tror på transparent prissättning. Priset du ser är vad du betalar.</p>
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
    name: 'Egenföretagare',
    description: 'Perfekt för enskilda firmor och små verksamheter',
    monthlyPrice: 199,
    yearlyPrice: 1908,
    popular: false,
    features: [
      'Automatisk bokföring',
      'Upp till 50 transaktioner/månad',
      'Grundläggande rapporter',
      'Kvittohantering',
      'E-post support',
      '1 användare'
    ]
  },
  {
    name: 'Företag',
    description: 'För växande företag med mer omfattande behov',
    monthlyPrice: 399,
    yearlyPrice: 3828,
    popular: true,
    features: [
      'Allt i Egenföretagare',
      'Upp till 250 transaktioner/månad',
      'Avancerade rapporter',
      'Fakturering',
      'Prioriterad support',
      'Upp till 3 användare',
      'API-integration',
      'Lönehantering'
    ]
  },
  {
    name: 'Professionell',
    description: 'För etablerade företag med komplexa ekonomiska behov',
    monthlyPrice: 799,
    yearlyPrice: 7668,
    popular: false,
    features: [
      'Allt i Företag',
      'Obegränsade transaktioner',
      'Anpassade rapporter',
      'Dedikerad kundansvarig',
      'Upp till 10 användare',
      'Avancerade prognoser',
      'Multi-företagshantering',
      'Bankkopplingar'
    ]
  }
]
</script>

<style scoped>
.pricing-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
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
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.pricing-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 650px;
  margin: 0 auto 2rem;
}

.billing-toggle {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: #f1f5f9;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.billing-toggle span {
  font-size: 0.9rem;
  color: #64748b;
}

.billing-toggle span.active {
  color: #0f172a;
  font-weight: 600;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
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
  background-color: #e2e8f0;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #0ea5e9;
}

input:checked + .slider:before {
  transform: translateX(24px);
}

.save-badge {
  display: inline-block;
  background: #cffafe;
  color: #0891b2;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  margin-left: 0.5rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.pricing-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.pricing-card.popular {
  transform: scale(1.05);
  border: 2px solid #0ea5e9;
  z-index: 1;
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-5px);
}

.popular-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #0ea5e9;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 9999px;
}

.pricing-card-header {
  padding: 2rem 2rem 1rem;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.plan-description {
  font-size: 0.95rem;
  color: #64748b;
}

.pricing-card-price {
  padding: 1rem 2rem 2rem;
  border-bottom: 1px solid #f1f5f9;
}

.price {
  display: flex;
  align-items: flex-start;
  line-height: 1;
}

.currency {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0f172a;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0.3rem;
}

.period {
  font-size: 1rem;
  color: #64748b;
  align-self: flex-end;
  margin-bottom: 0.5rem;
}

.monthly-equivalent {
  font-size: 0.85rem;
  color: #94a3b8;
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
  color: #334155;
}

.feature-icon {
  width: 18px;
  height: 18px;
  color: #0ea5e9;
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
  background: linear-gradient(to right, #0284c7, #0ea5e9);
  color: white;
  box-shadow: 0 5px 15px rgba(14, 165, 233, 0.2);
}

.cta-button.secondary {
  background: #f1f5f9;
  color: #0f172a;
}

.cta-button.primary:hover {
  box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
}

.cta-button.secondary:hover {
  background: #e2e8f0;
}

.no-contract {
  font-size: 0.8rem;
  color: #94a3b8;
  margin-top: 0.75rem;
}

.enterprise-plan {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  margin-bottom: 4rem;
  border: 1px solid #e2e8f0;
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
  color: #0f172a;
  margin-bottom: 1rem;
}

.enterprise-info p {
  font-size: 1.1rem;
  color: #64748b;
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
  color: #334155;
}

.enterprise-info li svg {
  width: 18px;
  height: 18px;
  color: #0ea5e9;
  margin-right: 0.5rem;
}

.enterprise-action {
  flex-shrink: 0;
}

.enterprise-action .cta-button {
  padding: 0.9rem 2rem;
}

.pricing-faq {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  border: 1px solid #e2e8f0;
}

.pricing-faq h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 2rem;
  text-align: center;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.faq-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.faq-item p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
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
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style> 