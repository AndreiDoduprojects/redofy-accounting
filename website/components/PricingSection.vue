<template>
  <section class="morphic-pricing">
    <div class="frost-backdrop frost-backdrop-1"></div>
    <div class="frost-backdrop frost-backdrop-2"></div>
    <div class="morphic-container">
      <div class="pricing-header">
        <h2 class="pricing-title">Enkla prisplaner för alla behov</h2>
        <p class="pricing-subtitle">Välj den prisplan som passar ditt företag bäst</p>
        
        <div class="pricing-switch">
          <span :class="{ 'active': !isYearly }">Månadsvis</span>
          <label class="switch">
            <input type="checkbox" v-model="isYearly">
            <span class="slider"></span>
          </label>
          <span :class="{ 'active': isYearly }">Årligen <span class="save-tag">Spara 20%</span></span>
        </div>
      </div>
      
      <div class="pricing-plans">
        <div class="pricing-plan" v-for="(plan, index) in plans" :key="index"
             :class="{ 'popular': plan.popular }">
          <div class="popular-badge" v-if="plan.popular">Populär</div>
          
          <div class="plan-header">
            <div class="plan-icon">
              <img :src="plan.icon" :alt="plan.name">
            </div>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
          </div>
          
          <div class="plan-price">
            <span class="currency">SEK</span>
            <span class="amount">{{ isYearly ? plan.yearlyPrice : plan.monthlyPrice }}</span>
            <span class="period">/ {{ isYearly ? 'år' : 'månad' }}</span>
          </div>
          
          <ul class="plan-features">
            <li v-for="(feature, i) in plan.features" :key="i" 
                :class="{ 'included': feature.included }">
              <span class="feature-icon" v-if="feature.included">✓</span>
              <span class="feature-icon excluded" v-else>×</span>
              {{ feature.text }}
            </li>
          </ul>
          
          <button class="plan-button" :class="{ 'primary': plan.popular }">
            {{ plan.buttonText }}
          </button>
        </div>
      </div>
      
      <div class="pricing-guarantee">
        <div class="guarantee-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="guarantee-content">
          <h4>30 dagars pengarna-tillbaka-garanti</h4>
          <p>Prova Redofy riskfritt. Om du inte är nöjd inom 30 dagar får du pengarna tillbaka.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isYearly = ref(false)

const plans = [
  {
    name: "Startup",
    description: "Perfekt för små företag som just startat",
    icon: "/img/icons/startup-icon.svg",
    monthlyPrice: "299",
    yearlyPrice: "2 990",
    popular: false,
    buttonText: "Kom igång",
    features: [
      { text: "AI-drivet bokföring", included: true },
      { text: "Automatiserade transaktioner", included: true },
      { text: "Upp till 100 transaktioner/månad", included: true },
      { text: "1 användare", included: true },
      { text: "Grundläggande rapporter", included: true },
      { text: "E-postssupport", included: true },
      { text: "Prioriterad support", included: false },
      { text: "Avancerade analyser", included: false }
    ]
  },
  {
    name: "Business",
    description: "För växande företag med fler transaktioner",
    icon: "/img/icons/business-icon.svg",
    monthlyPrice: "699",
    yearlyPrice: "6 990",
    popular: true,
    buttonText: "Välj plan",
    features: [
      { text: "AI-drivet bokföring", included: true },
      { text: "Automatiserade transaktioner", included: true },
      { text: "Upp till 500 transaktioner/månad", included: true },
      { text: "5 användare", included: true },
      { text: "Avancerade rapporter", included: true },
      { text: "E-post & telefonssupport", included: true },
      { text: "Prioriterad support", included: true },
      { text: "Anpassade analyser", included: false }
    ]
  },
  {
    name: "Enterprise",
    description: "Anpassade lösningar för större företag",
    icon: "/img/icons/enterprise-icon.svg",
    monthlyPrice: "1 499",
    yearlyPrice: "14 990",
    popular: false,
    buttonText: "Kontakta oss",
    features: [
      { text: "AI-drivet bokföring", included: true },
      { text: "Automatiserade transaktioner", included: true },
      { text: "Obegränsade transaktioner", included: true },
      { text: "Obegränsade användare", included: true },
      { text: "Anpassade rapporter", included: true },
      { text: "Prioriterad support 24/7", included: true },
      { text: "Dedikerad kundansvarig", included: true },
      { text: "Anpassade integrationer", included: true }
    ]
  }
]
</script>

<style scoped>
.morphic-pricing {
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc, #f0f9ff);
  overflow: hidden;
}

.frost-backdrop {
  position: absolute;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.5;
  filter: blur(60px);
}

.frost-backdrop-1 {
  width: 600px;
  height: 600px;
  top: -100px;
  left: -200px;
  background: linear-gradient(225deg, rgba(186, 230, 253, 0.6), rgba(103, 232, 249, 0.3));
  transform: rotate(-15deg);
}

.frost-backdrop-2 {
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -100px;
  background: linear-gradient(45deg, rgba(219, 234, 254, 0.6), rgba(191, 219, 254, 0.3));
  transform: rotate(15deg);
}

.morphic-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  z-index: 2;
}

.pricing-header {
  text-align: center;
  margin-bottom: 4rem;
}

.pricing-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #0f172a, #1e40af);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.pricing-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #64748b;
}

.pricing-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem auto;
}

.pricing-switch span {
  color: #64748b;
  font-weight: 500;
  transition: color 0.3s ease;
}

.pricing-switch span.active {
  color: #0f172a;
  font-weight: 600;
}

.save-tag {
  display: inline-block;
  background: #10b981;
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  font-weight: 500;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.switch input {
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input:checked + .slider {
  background-color: #3b82f6;
}

input:focus + .slider {
  box-shadow: 0 0 1px #3b82f6;
}

input:checked + .slider:before {
  transform: translateX(30px);
}

.pricing-plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.pricing-plan {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pricing-plan:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.pricing-plan.popular {
  border: 2px solid #3b82f6;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.15);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-icon {
  margin-bottom: 1rem;
}

.plan-icon img {
  width: 60px;
  height: 60px;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.plan-description {
  color: #64748b;
  font-size: 0.95rem;
}

.plan-price {
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.currency {
  font-size: 1.2rem;
  font-weight: 600;
  color: #64748b;
  margin-right: 0.5rem;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1;
}

.period {
  font-size: 1rem;
  color: #64748b;
  margin-left: 0.5rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex-grow: 1;
}

.plan-features li {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: #334155;
}

.feature-icon {
  margin-right: 0.8rem;
  color: #3b82f6;
  font-size: 1.2rem;
  font-weight: bold;
}

.feature-icon.excluded {
  color: #cbd5e1;
}

li.included {
  color: #334155;
}

li:not(.included) {
  color: #94a3b8;
}

.plan-button {
  margin-top: auto;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: 2px solid #3b82f6;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  background: white;
  color: #3b82f6;
}

.plan-button:hover {
  background: #eff6ff;
}

.plan-button.primary {
  background: #3b82f6;
  color: white;
}

.plan-button.primary:hover {
  background: #2563eb;
  border-color: #2563eb;
}

.pricing-guarantee {
  display: flex;
  align-items: center;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.guarantee-icon {
  color: #3b82f6;
  margin-right: 1.5rem;
  font-size: 2rem;
  flex-shrink: 0;
}

.guarantee-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 0.5rem;
}

.guarantee-content p {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
}

@media (max-width: 768px) {
  .pricing-title {
    font-size: 2rem;
  }
  
  .pricing-plans {
    grid-template-columns: 1fr;
  }
  
  .pricing-guarantee {
    flex-direction: column;
    text-align: center;
  }
  
  .guarantee-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style> 