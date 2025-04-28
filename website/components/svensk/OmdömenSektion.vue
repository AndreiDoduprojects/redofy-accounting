<template>
  <section class="omdömen-sektion" id="omdömen">
    <div class="morphic-container">
      <div class="sektion-huvud">
        <h2 class="sektion-titel">
          Vad våra kunder <span class="text-gradient">säger om oss</span>
        </h2>
        <p class="sektion-beskrivning">
          Upptäck varför företagare litar på Redofy för att hantera sin bokföring och ekonomi
        </p>
      </div>

      <div class="omdömen-grid">
        <div class="omdöme-kort" v-for="(omdöme, index) in omdömen" :key="index">
          <div class="omdöme-betyg">
            <svg v-for="i in 5" :key="i" class="stjärna" :class="{ 'fylld': i <= omdöme.betyg }" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <p class="omdöme-text">{{ omdöme.text }}</p>
          <div class="omdöme-kund">
            <div class="kund-avatar" :style="{ backgroundColor: omdöme.avatarBakgrund }">
              {{ omdöme.namn.charAt(0) }}
            </div>
            <div class="kund-info">
              <h4 class="kund-namn">{{ omdöme.namn }}</h4>
              <p class="kund-företag">{{ omdöme.företag }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="omdömen-cta">
        <NuxtLink to="/sv/kundcase" class="btn-sekundär">
          Läs fler kundberättelser
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Lista över kundomdömen
const omdömen = [
  {
    betyg: 5,
    text: "Redofy har revolutionerat hur vi hanterar vår bokföring. Det är enkelt att använda, helt automatiserat och sparar oss flera timmar varje vecka. Jag kan inte föreställa mig att gå tillbaka till vårt gamla system.",
    namn: "Anders Johansson",
    företag: "Växande Teknik AB",
    avatarBakgrund: "rgba(var(--morphic-primary-rgb), 0.2)"
  },
  {
    betyg: 5,
    text: "Som småföretagare har jag inte tid att sitta fast i bokföringsprogram. Redofy gör det så enkelt att jag kan fokusera på att driva mitt företag istället för att oroa mig för siffror och kvitton.",
    namn: "Maria Andersson",
    företag: "Blomstrande Design",
    avatarBakgrund: "rgba(var(--morphic-accent-rgb), 0.2)"
  },
  {
    betyg: 4,
    text: "Kundtjänsten är otrolig! När jag stötte på frågor om hur jag skulle hantera vissa transaktioner, fick jag snabb och hjälpsam support som gjorde allt tydligt.",
    namn: "Erik Lindgren",
    företag: "Lindgrens Konsult",
    avatarBakgrund: "rgba(125, 90, 255, 0.2)"
  },
  {
    betyg: 5,
    text: "Molnbaserad åtkomst betyder att jag kan hålla koll på min verksamhet även när jag är på resande fot. Rapporterna ger mig alla insikter jag behöver för att fatta smarta affärsbeslut.",
    namn: "Lina Karlsson",
    företag: "Global Service AB",
    avatarBakgrund: "rgba(40, 170, 220, 0.2)"
  },
  {
    betyg: 5,
    text: "Automatiseringsverktygen för moms och rapportering har sparat oss så mycket tid och minskat vår stress vid deklarationstider. Allt är så enkelt att förstå.",
    namn: "Johan Bergström",
    företag: "Moderna Möbler",
    avatarBakgrund: "rgba(240, 120, 80, 0.2)"
  },
  {
    betyg: 5,
    text: "Vi bytte till Redofy efter år av frustration med vårt tidigare system. Övergången var smidig och deras support team guidade oss genom hela processen. Nu undrar vi varför vi inte bytte tidigare!",
    namn: "Karin Nordström",
    företag: "Nordströms Konsulting",
    avatarBakgrund: "rgba(60, 200, 120, 0.2)"
  }
];
</script>

<style scoped>
.omdömen-sektion {
  padding: 80px 0;
  position: relative;
  background: var(--morphic-bg-secondary);
}

.sektion-huvud {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.sektion-titel {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
}

.text-gradient {
  background: linear-gradient(90deg, var(--morphic-primary-color), var(--morphic-accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.sektion-beskrivning {
  font-size: 1.25rem;
  color: var(--morphic-text-light);
  line-height: 1.6;
}

.omdömen-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.omdöme-kort {
  background: var(--morphic-bg-primary);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid var(--morphic-border-light);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.omdöme-kort:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border-color: var(--morphic-border-medium);
}

.omdöme-betyg {
  display: flex;
  margin-bottom: 20px;
}

.stjärna {
  color: var(--morphic-border-medium);
  margin-right: 5px;
}

.stjärna.fylld {
  color: #FFD700;
  fill: #FFD700;
}

.omdöme-text {
  flex-grow: 1;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 24px;
  color: var(--morphic-text-color);
}

.omdöme-kund {
  display: flex;
  align-items: center;
}

.kund-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--morphic-text-color);
}

.kund-info {
  flex-grow: 1;
}

.kund-namn {
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 4px;
}

.kund-företag {
  font-size: 0.9rem;
  color: var(--morphic-text-light);
  margin: 0;
}

.omdömen-cta {
  text-align: center;
  margin-top: 40px;
}

.btn-sekundär {
  display: inline-flex;
  align-items: center;
  gap: 8px;
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

@media (max-width: 768px) {
  .omdömen-sektion {
    padding: 60px 0;
  }
  
  .sektion-titel {
    font-size: 2rem;
  }
  
  .sektion-beskrivning {
    font-size: 1.1rem;
  }
  
  .omdömen-grid {
    grid-template-columns: 1fr;
  }
}
</style> 