<template>
  <section class="morphic-features-section">
    <div class="morphic-container">
      <div class="features-header">
        <h2 class="features-title">Förenkla din redovisning med Redofy</h2>
        <p class="features-description">
          Vi har skapat lösningar som gör redovisning enklare, snabbare och mer exakt
        </p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <img :src="feature.icon" :alt="feature.title">
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'AI-drivet bokföring',
    description: 'Artificiell intelligens som automatiserar bokföring och kategoriserar transaktioner med hög precision',
    icon: '/img/icons/ai-ledger.svg'
  },
  {
    title: 'Realtids insikter',
    description: 'Se ditt företags ekonomiska hälsa i realtid med insiktsfulla rapporter och visualiseringar',
    icon: '/img/icons/realtime-insights.svg'
  },
  {
    title: 'Molnbaserat',
    description: 'Åtkomst till dina finansiella data när som helst, var som helst, på vilken enhet som helst',
    icon: '/img/icons/cloud-access.svg'
  },
  {
    title: 'Skatterådgivning',
    description: 'Inbyggd skattoptimering som hjälper dig att minimera skatt och maximera avdrag',
    icon: '/img/icons/tax-advisory.svg'
  },
  {
    title: 'Smidig integration',
    description: 'Anslut enkelt till banker, betallösningar och affärssystem för sömlöst dataflöde',
    icon: '/img/icons/seamless-integration.svg'
  },
  {
    title: 'Säkerhet i fokus',
    description: 'Bank-nivå kryptering och avancerade säkerhetsfunktioner för att skydda dina finansiella data',
    icon: '/img/icons/security-focus.svg'
  }
]
</script>

<style scoped>
.morphic-features-section {
  padding: 6rem 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
}

.morphic-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #0f172a, #1e40af);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.features-description {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  color: #64748b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.feature-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #60a5fa, #3b82f6);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: 2;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card:hover::after {
  transform: scaleX(1);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(219, 234, 254, 0.5);
  margin-bottom: 1.5rem;
}

.feature-icon img {
  width: 32px;
  height: 32px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #0f172a;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #64748b;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .features-title {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .features-title {
    font-size: 1.75rem;
  }
  
  .morphic-features-section {
    padding: 4rem 0;
  }
}
</style> 