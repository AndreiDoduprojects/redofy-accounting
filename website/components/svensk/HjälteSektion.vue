<template>
  <section class="hjälte-sektion">
    <div class="hjälte-innehåll morphic-container">
      <div class="hjälte-text">
        <h1 class="hjälte-rubrik">
          Modern bokföring för dagens <span class="text-gradient">företagare</span>
        </h1>
        
        <p class="hjälte-beskrivning">
          Redofy förenklar bokföring och ekonomihantering för små och medelstora företag. 
          Vår molnbaserade tjänst hjälper dig spara tid, reducera kostnader, 
          och få bättre insikter om ditt företags ekonomi.
        </p>
        
        <div class="hjälte-knappar">
          <NuxtLink to="/sv/prova-gratis" class="btn-primär">
            Prova gratis i 14 dagar
          </NuxtLink>
          
          <NuxtLink to="/sv/demo" class="btn-sekundär">
            Boka en demo
          </NuxtLink>
        </div>
        
        <div class="hjälte-betyg">
          <div class="stjärnor">
            <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
          </div>
          <div class="betyg-text">
            <span class="poäng">4.9/5</span> baserat på <strong>1,240+ recensioner</strong>
          </div>
        </div>
      </div>
      
      <div class="hjälte-bild">
        <img src="~/assets/images/dashboard-preview-sv.png" alt="Redofy Dashboard" class="dashboard-bild" />
        <div class="bild-overlay"></div>
      </div>
    </div>
    
    <div class="hjälte-kunder">
      <div class="kunder-lista morphic-container">
        <p class="kunder-rubrik">Betrodd av över 10,000 företag</p>
        <div class="kunder-logotyper">
          <img src="~/assets/images/clients/client-1.svg" alt="Kund 1" />
          <img src="~/assets/images/clients/client-2.svg" alt="Kund 2" />
          <img src="~/assets/images/clients/client-3.svg" alt="Kund 3" />
          <img src="~/assets/images/clients/client-4.svg" alt="Kund 4" />
          <img src="~/assets/images/clients/client-5.svg" alt="Kund 5" />
        </div>
      </div>
    </div>
    
    <IceBackground />
  </section>
</template>

<script setup>
import IceBackground from '../IceBackground.vue';
</script>

<style scoped>
.hjälte-sektion {
  position: relative;
  padding: 100px 0 40px;
  overflow: hidden;
}

.hjälte-innehåll {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  z-index: 2;
}

.hjälte-text {
  flex: 1;
  max-width: 600px;
}

.hjälte-rubrik {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  background-clip: text;
}

.text-gradient {
  background: linear-gradient(90deg, var(--morphic-primary-color), var(--morphic-accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hjälte-beskrivning {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--morphic-text-light);
  margin-bottom: 32px;
}

.hjälte-knappar {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

.btn-primär {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: var(--morphic-primary-color);
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(var(--morphic-primary-rgb), 0.2);
}

.btn-primär:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(var(--morphic-primary-rgb), 0.3);
}

.btn-sekundär {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: var(--morphic-bg-primary);
  color: var(--morphic-text-color);
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid var(--morphic-border-light);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.btn-sekundär:hover {
  background: var(--morphic-bg-hover);
  border-color: var(--morphic-border-medium);
}

.hjälte-betyg {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stjärnor {
  display: flex;
  color: #ffb800;
}

.betyg-text {
  font-size: 0.95rem;
  color: var(--morphic-text-light);
}

.poäng {
  font-weight: 700;
  color: var(--morphic-text-color);
}

.hjälte-bild {
  flex: 1;
  max-width: 600px;
  position: relative;
}

.dashboard-bild {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  transition: all 0.5s ease;
}

.bild-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(var(--morphic-primary-rgb), 0.1), rgba(var(--morphic-accent-rgb), 0.1));
  border-radius: 12px;
  pointer-events: none;
}

.hjälte-kunder {
  padding: 60px 0;
  margin-top: 40px;
  border-top: 1px solid var(--morphic-border-light);
}

.kunder-lista {
  text-align: center;
}

.kunder-rubrik {
  color: var(--morphic-text-light);
  font-size: 1rem;
  margin-bottom: 24px;
}

.kunder-logotyper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.kunder-logotyper img {
  height: 28px;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.kunder-logotyper img:hover {
  opacity: 1;
  filter: grayscale(0%);
}

@media (max-width: 1024px) {
  .hjälte-innehåll {
    flex-direction: column;
  }
  
  .hjälte-text {
    max-width: 100%;
    text-align: center;
  }
  
  .hjälte-knappar {
    justify-content: center;
  }
  
  .hjälte-betyg {
    justify-content: center;
  }
  
  .hjälte-bild {
    max-width: 90%;
  }
  
  .hjälte-rubrik {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hjälte-sektion {
    padding: 60px 0 30px;
  }
  
  .hjälte-knappar {
    flex-direction: column;
    gap: 12px;
  }
  
  .hjälte-rubrik {
    font-size: 2rem;
  }
  
  .hjälte-beskrivning {
    font-size: 1.1rem;
  }
  
  .kunder-logotyper {
    gap: 20px;
  }
  
  .kunder-logotyper img {
    height: 20px;
  }
}
</style> 