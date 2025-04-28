<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Modern bokföring för svenska företag
          <span class="hero-accent">med AI</span>
        </h1>
        <p class="hero-description">
          Redofy kombinerar smart bokföring med AI-assistans för att ge dig mer tid till det som verkligen betyder något för ditt företag.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/demo" class="morphic-btn morphic-btn-primary hero-btn">
            Prova gratis
          </NuxtLink>
          <button @click="scrollToFeatures" class="morphic-btn morphic-btn-secondary hero-btn">
            Se funktioner
          </button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-value">3500+</span>
            <span class="hero-stat-label">Nöjda kunder</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value">98%</span>
            <span class="hero-stat-label">Noggrannhet</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value">60%</span>
            <span class="hero-stat-label">Tidsbesparing</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="/img/hero-dashboard.png" alt="Redofy Dashboard" class="dashboard-preview" />
        <div class="ice-card card-float-1">
          <div class="ice-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <div class="ice-card-content">
            <div class="ice-card-title">Automatiska avstämningar</div>
          </div>
        </div>
        <div class="ice-card card-float-2">
          <div class="ice-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div class="ice-card-content">
            <div class="ice-card-title">AI-bokföring</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToFeatures = () => {
  const featuresSection = document.getElementById('features')
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style>
.hero-section {
  min-height: 100vh;
  padding: 6rem 1.5rem 3rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--morphic-text-primary);
}

.hero-accent {
  background: linear-gradient(135deg, var(--morphic-primary), var(--morphic-accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--morphic-text-secondary);
  max-width: 32rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.hero-btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
}

.hero-stat {
  display: flex;
  flex-direction: column;
}

.hero-stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--morphic-text-primary);
}

.hero-stat-label {
  font-size: 0.875rem;
  color: var(--morphic-text-tertiary);
}

.hero-image {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard-preview {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: var(--morphic-radius-lg);
  box-shadow: var(--morphic-shadow-lg);
  position: relative;
  z-index: 1;
}

.ice-card {
  position: absolute;
  background: rgba(var(--morphic-bg-primary-rgb), 0.8);
  backdrop-filter: var(--morphic-blur-backdrop);
  -webkit-backdrop-filter: var(--morphic-blur-backdrop);
  border-radius: var(--morphic-radius-md);
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: var(--morphic-shadow-md);
  border: 1px solid var(--morphic-border-light);
  z-index: 2;
}

.card-float-1 {
  top: 15%;
  left: -5%;
  animation: float-card-1 5s infinite alternate ease-in-out;
}

.card-float-2 {
  bottom: 20%;
  right: -5%;
  animation: float-card-2 4s infinite alternate ease-in-out;
}

.ice-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--morphic-radius-sm);
  background: linear-gradient(135deg, var(--morphic-primary-light), var(--morphic-primary));
  color: white;
}

.ice-card-title {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--morphic-text-primary);
}

@keyframes float-card-1 {
  0% { transform: translateY(0) rotate(0); }
  100% { transform: translateY(-10px) rotate(-2deg); }
}

@keyframes float-card-2 {
  0% { transform: translateY(0) rotate(0); }
  100% { transform: translateY(10px) rotate(2deg); }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.75rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
  }
  
  .hero-content {
    text-align: center;
    align-items: center;
  }
  
  .hero-description {
    max-width: 100%;
  }
  
  .hero-image {
    order: -1;
    margin-bottom: 2rem;
  }
  
  .ice-card {
    display: none;
  }
}
</style> 