<template>
  <div>
    <IsEffekt />
    <div class="page-content">
      <Navigering />
      <FeatureHighlights />
      <section class="features-details">
        <div class="container">
          <div class="features-section">
            <div class="feature-detail">
              <div class="feature-content">
                <h2>Automatiserad Bokföring</h2>
                <p>Med Redofy behöver du inte längre spendera timmar på manuell bokföring. Vår AI-teknik automatiserar hela processen:</p>
                <ul>
                  <li>Automatisk kategorisering av transaktioner</li>
                  <li>Direkt integration med bankkonton och betalsystem</li>
                  <li>Intelligent matchning av fakturor och betalningar</li>
                  <li>Momsuträkning och redovisning</li>
                  <li>Konteringsförslag med hög precision</li>
                </ul>
              </div>
              <div class="feature-image">
                <img src="/img/features/automated-bookkeeping.svg" alt="Automatiserad bokföring" />
              </div>
            </div>
            
            <div class="feature-detail reverse">
              <div class="feature-content">
                <h2>Realtidsrapporter</h2>
                <p>Få en tydlig bild av ditt företags ekonomi när du behöver det, direkt i appen eller webbläsaren:</p>
                <ul>
                  <li>Dagligt uppdaterad resultat- och balansräkning</li>
                  <li>Kassaflödesanalys och prognoser</li>
                  <li>Anpassningsbara dashboards</li>
                  <li>Visualisering av nyckeltal</li>
                  <li>Rapporter för budget vs. utfall</li>
                </ul>
              </div>
              <div class="feature-image">
                <img src="/img/features/realtime-reports.svg" alt="Realtidsrapporter" />
              </div>
            </div>
            
            <div class="feature-detail">
              <div class="feature-content">
                <h2>Smart Kvittohantering</h2>
                <p>Säg farväl till papperskvitton och krångliga Excel-ark för utlägg:</p>
                <ul>
                  <li>Fotografera kvitton direkt i appen</li>
                  <li>Automatisk textavläsning och dataextraktion</li>
                  <li>Kategorisering och kontering</li>
                  <li>Digital lagring enligt bokföringslagen</li>
                  <li>Enkel hantering av företagsutlägg</li>
                </ul>
              </div>
              <div class="feature-image">
                <img src="/img/features/receipt-management.svg" alt="Kvittohantering" />
              </div>
            </div>
            
            <div class="feature-detail reverse">
              <div class="feature-content">
                <h2>Skatteoptimering</h2>
                <p>Låt Redofy hjälpa dig minska skattebördan och maximera avdragen:</p>
                <ul>
                  <li>Automatisk identifiering av avdragsgilla kostnader</li>
                  <li>Påminnelser för skattedeklarationer och momsredovisning</li>
                  <li>Förslag på skattebesparande åtgärder</li>
                  <li>Stöd för olika företagsformer</li>
                  <li>Förberedelse av underlag för deklaration</li>
                </ul>
              </div>
              <div class="feature-image">
                <img src="/img/features/tax-optimization.svg" alt="Skatteoptimering" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  </div>
</template>

<script setup>
import Navigering from '~/components/svensk/Navigering.vue'
import IsEffekt from '~/components/svensk/IsEffekt.vue'
</script>

<style scoped>
.features-details {
  padding: 4rem 0 6rem;
  background: linear-gradient(to bottom, transparent, #f8fafc);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.features-section {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.feature-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.feature-detail.reverse {
  direction: rtl;
}

.feature-detail.reverse .feature-content {
  direction: ltr;
}

.feature-detail.reverse .feature-image {
  direction: ltr;
}

.feature-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.feature-content p {
  font-size: 1.1rem;
  color: #334155;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.feature-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-content li {
  padding-left: 1.8rem;
  position: relative;
  margin-bottom: 0.8rem;
  color: #475569;
}

.feature-content li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: #0ea5e9;
}

.feature-image {
  position: relative;
}

.feature-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .feature-detail {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .feature-detail.reverse {
    direction: ltr;
  }
  
  .feature-image {
    order: -1;
    display: flex;
    justify-content: center;
  }
  
  .feature-image img {
    max-width: 100%;
  }
  
  .features-section {
    gap: 4rem;
  }
  
  .feature-content h2 {
    font-size: 1.75rem;
  }
}
</style> 