<template>
  <div>
    <IceBackground />
    <div class="page-content">
      <SvenskNavbar />
      <div class="overview-section">
        <div class="container">
          <div class="overview-header">
            <h1 class="overview-title">Redofy Översikt</h1>
            <p class="overview-subtitle">Upptäck hur vår AI-drivna redovisningsplattform fungerar</p>
          </div>
          
          <div class="overview-grid">
            <div class="overview-card">
              <div class="overview-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
              </div>
              <h3>Automatiserad Bokföring</h3>
              <p>Redofy automatiserar inmatning av data och kategoriserar transaktioner med hjälp av AI, vilket sparar tid och minskar fel.</p>
            </div>
            
            <div class="overview-card">
              <div class="overview-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Realtidsinsyn</h3>
              <p>Få tydlig överblick över din ekonomi i realtid med anpassningsbara instrumentpaneler och rapporter.</p>
            </div>
            
            <div class="overview-card">
              <div class="overview-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                  <path d="M18 14h-8"></path>
                  <path d="M15 18h-5"></path>
                  <path d="M10 6h8v4h-8V6Z"></path>
                </svg>
              </div>
              <h3>Smidig Kvittohantering</h3>
              <p>Fotografera kvitton med appen och få dem automatiskt sparade och bokförda med rätt belopp och moms.</p>
            </div>
            
            <div class="overview-card">
              <div class="overview-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3>Skatteoptimering</h3>
              <p>Låt Redofy hjälpa dig att minimera skatt och maximera avdrag med inbyggd skatteoptimering.</p>
            </div>
          </div>
          
          <div class="overview-demo">
            <div class="demo-content">
              <h2>Se hur Redofy fungerar</h2>
              <p>Upptäck hur enkelt det är att komma igång med vår plattform. Boka en personlig demonstration eller titta på vår introduktionsvideo.</p>
              <div class="demo-actions">
                <button class="btn-primary">Boka demo</button>
                <button class="btn-secondary">Se video</button>
              </div>
            </div>
            <div class="demo-image">
              <img src="/img/illustrations/dashboard-preview.svg" alt="Redofy Dashboard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Översikt page
</script>

<style scoped>
.overview-section {
  padding: 8rem 0 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.overview-header {
  text-align: center;
  margin-bottom: 4rem;
}

.overview-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.overview-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.overview-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.overview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.overview-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(2, 132, 199, 0.1);
  color: #0284c7;
  margin-bottom: 1.5rem;
}

.overview-icon svg {
  width: 28px;
  height: 28px;
}

.overview-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0f172a;
}

.overview-card p {
  color: #64748b;
  line-height: 1.6;
}

.overview-demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
}

.demo-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0f172a;
}

.demo-content p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.demo-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #0284c7, #0ea5e9);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(2, 132, 199, 0.3);
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #0284c7;
  border: 2px solid #0284c7;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(2, 132, 199, 0.05);
}

.demo-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .overview-demo {
    grid-template-columns: 1fr;
  }
  
  .demo-image {
    order: -1;
  }
  
  .overview-section {
    padding: 6rem 0 4rem;
  }
  
  .overview-title {
    font-size: 2rem;
  }
}
</style> 