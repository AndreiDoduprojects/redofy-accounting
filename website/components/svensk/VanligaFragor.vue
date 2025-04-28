<template>
  <section class="vanliga-fragor" id="fragor">
    <div class="morphic-container">
      <div class="fragor-header">
        <h2 class="fragor-titel">Vanliga frågor</h2>
        <p class="fragor-beskrivning">Hitta svar på de vanligaste frågorna om Redofy. Kontakta oss gärna om du har fler frågor.</p>
      </div>
      
      <div class="fragor-grid">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="fraga-container"
          :class="{ 'active': activeIndex === index }"
        >
          <button 
            class="fraga-header" 
            @click="toggleFaq(index)"
            :aria-expanded="activeIndex === index"
          >
            <h3 class="fraga-titel">{{ faq.fraga }}</h3>
            <ChevronIcon class="fraga-ikon" :class="{ 'rotated': activeIndex === index }" />
          </button>
          
          <div 
            class="fraga-svar" 
            :style="{ 
              maxHeight: activeIndex === index ? `${svarRefs[index]?.scrollHeight}px` : '0'
            }"
          >
            <div class="svar-inner" ref="svarRefs">
              <p v-html="faq.svar"></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="ytterligare-hjalp">
        <p>Kunde du inte hitta svaret på din fråga?</p>
        <NuxtLink to="/sv/kontakt" class="kontakta-oss-link">
          Kontakta vårt team för hjälp
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, defineComponent, h } from 'vue';

const activeIndex = ref(null);
const svarRefs = ref([]);

// Lista med vanliga frågor och svar
const faqs = [
  {
    fraga: "Vad är Redofy och vad gör det?",
    svar: "Redofy är en molnbaserad ekonomiplattform som automatiserar bokföring, fakturering och rapportering för små och medelstora företag. Vår AI-drivna teknik hjälper dig att spara tid, minska fel och få bättre insikt i ditt företags ekonomi."
  },
  {
    fraga: "Hur kommer jag igång med Redofy?",
    svar: "Det är enkelt att komma igång! Registrera ett konto på vår hemsida, välj en lämplig prenumerationsplan, och följ vår steg-för-steg guide för att konfigurera ditt konto. Du kan ansluta din bank, importera befintliga data och börja använda tjänsten direkt. Vår support finns tillgänglig för att hjälpa dig under hela processen."
  },
  {
    fraga: "Kan Redofy integrera med mitt befintliga affärssystem?",
    svar: "Ja, Redofy erbjuder integrationer med många populära affärssystem och verktyg, inklusive e-handelslösningar, CRM-system, banktjänster och betalningstjänster. Vår öppna API gör det också möjligt att skapa anpassade integrationer för specifika behov."
  },
  {
    fraga: "Är mina data säkra hos Redofy?",
    svar: "Absolut! Datasäkerhet är vår högsta prioritet. Vi använder banknivåsäkerhet med 256-bitars kryptering, regelbundna säkerhetsgranskningar och följer GDPR och andra dataskyddsregler. Alla data lagras i säkra datacenter inom EU med daglig backup."
  },
  {
    fraga: "Vilken sorts support erbjuder ni?",
    svar: "Vi erbjuder flera supportalternativ: online dokumentation, videoguider, e-postsupport och live-chatt. Våra Premium- och Enterprise-planer inkluderar även personlig support via telefon och dedikerade kontoansvariga. Vårt supportteam består av ekonomiexperter som kan hjälpa dig med både tekniska frågor och ekonomiska råd."
  },
  {
    fraga: "Kan jag prova Redofy innan jag köper?",
    svar: "Ja, vi erbjuder en 14-dagars gratis provperiod utan kreditkortskrav. Du får tillgång till alla funktioner i vår Standard-plan så att du kan utvärdera om Redofy passar ditt företag. Vi erbjuder också personliga demonstrationer för att visa hur Redofy kan anpassas efter just dina behov."
  },
  {
    fraga: "Är Redofy lämpligt för mitt branschspecifika företag?",
    svar: "Redofy är designat för att fungera för många olika branscher, inklusive tjänsteföretag, e-handel, detaljhandel, byggbranschen och konsulttjänster. Vi erbjuder branschspecifika mallar och anpassningar. Kontakta oss gärna för att diskutera ditt företags specifika behov."
  },
  {
    fraga: "Kan jag använda Redofy på mobilen?",
    svar: "Ja! Redofy är helt responsivt och fungerar på alla enheter. Vi har också dedikerade appar för iOS och Android som ger dig tillgång till viktiga funktioner som kvittohantering, fakturahantering och ekonomiska rapporter när du är på språng."
  }
];

// Toggle for opening and closing FAQ items
function toggleFaq(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
}

// Chevron icon component
const ChevronIcon = defineComponent({
  setup() {
    return () => h('svg', {
      class: 'w-6 h-6 transform transition-transform duration-300',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('polyline', { points: '6 9 12 15 18 9' })
    ]);
  }
});

// Initialize refs for each FAQ answer element
onMounted(() => {
  svarRefs.value = Array.from(document.querySelectorAll('.svar-inner'));
});
</script>

<style scoped>
.vanliga-fragor {
  padding: 100px 0;
  background-color: var(--morphic-bg-light);
}

.fragor-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.fragor-titel {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--morphic-heading-color);
}

.fragor-beskrivning {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--morphic-text-color);
}

.fragor-grid {
  display: grid;
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}

.fraga-container {
  border: 1px solid var(--morphic-border-light);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--morphic-bg-card);
  transition: all 0.3s ease;
}

.fraga-container.active {
  border-color: var(--morphic-primary-color);
  box-shadow: 0 8px 30px rgba(var(--morphic-shadow-rgb), 0.15);
}

.fraga-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.fraga-header:hover {
  background-color: var(--morphic-bg-hover);
}

.fraga-titel {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: var(--morphic-heading-color);
}

.fraga-ikon {
  transition: transform 0.3s ease;
  color: var(--morphic-text-muted);
  min-width: 24px;
}

.fraga-ikon.rotated {
  transform: rotate(180deg);
  color: var(--morphic-primary-color);
}

.fraga-svar {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.svar-inner {
  padding: 0 24px 24px;
  color: var(--morphic-text-color);
  line-height: 1.6;
}

.ytterligare-hjalp {
  margin-top: 50px;
  text-align: center;
  padding: 30px;
  background-color: var(--morphic-bg-card);
  border-radius: 12px;
  border: 1px solid var(--morphic-border-light);
}

.ytterligare-hjalp p {
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: var(--morphic-text-color);
}

.kontakta-oss-link {
  display: inline-block;
  color: var(--morphic-primary-color);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.kontakta-oss-link:hover {
  border-color: var(--morphic-primary-color);
}

@media (max-width: 768px) {
  .vanliga-fragor {
    padding: 70px 0;
  }
  
  .fragor-titel {
    font-size: 2rem;
  }
  
  .fragor-beskrivning {
    font-size: 1.1rem;
  }
  
  .fraga-header {
    padding: 20px;
  }
  
  .fraga-titel {
    font-size: 1rem;
  }
  
  .svar-inner {
    padding: 0 20px 20px;
  }
}
</style> 