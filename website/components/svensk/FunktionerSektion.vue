<template>
  <section class="funktioner-sektion" id="funktioner">
    <div class="morphic-container">
      <div class="sektion-huvud">
        <h2 class="sektion-titel">
          Allt du behöver för att <span class="text-gradient">hantera din ekonomi</span>
        </h2>
        <p class="sektion-beskrivning">
          Redofy erbjuder en komplett uppsättning funktioner för att förbättra din bokföring, 
          ekonomihantering och skatterapportering - allt på ett ställe.
        </p>
      </div>

      <div class="funktioner-grid">
        <div class="funktion-kort" v-for="(funktion, index) in funktioner" :key="index">
          <div class="funktion-ikon" :style="{ background: funktion.ikonBakgrund }">
            <component :is="funktion.ikon" />
          </div>
          <h3 class="funktion-titel">{{ funktion.titel }}</h3>
          <p class="funktion-beskrivning">{{ funktion.beskrivning }}</p>
        </div>
      </div>

      <div class="funktioner-cta">
        <NuxtLink to="/sv/alla-funktioner" class="btn-sekundär">
          Se alla funktioner
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
import { h } from 'vue';

// SVG ikoner som komponenter
const BookIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' })
]);

const ReceiptIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z' }),
  h('path', { d: 'M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' }),
  h('path', { d: 'M12 17.5v-11' })
]);

const ChartIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M3 3v18h18' }),
  h('path', { d: 'M18 17V9' }),
  h('path', { d: 'M13 17V5' }),
  h('path', { d: 'M8 17v-3' })
]);

const TaxIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('rect', { x: '2', y: '6', width: '20', height: '12', rx: '2' }),
  h('circle', { cx: '12', cy: '12', r: '2' }),
  h('path', { d: 'M6 12h.01M18 12h.01' })
]);

const InvoiceIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
  h('path', { d: 'M14 2v6h6' }),
  h('path', { d: 'M16 13H8' }),
  h('path', { d: 'M16 17H8' }),
  h('path', { d: 'M10 9H8' })
]);

const CloudIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z' })
]);

// Lista över funktioner
const funktioner = [
  {
    titel: 'Digital bokföring',
    beskrivning: 'Automatiserad bokföring med realtidsuppdateringar och digital kvittohantering som sparar tid och minskar fel.',
    ikon: BookIcon,
    ikonBakgrund: 'rgba(var(--morphic-primary-rgb), 0.1)'
  },
  {
    titel: 'Fakturahantering',
    beskrivning: 'Skapa professionella fakturor, hantera betalningar och skicka automatiska påminnelser för förfallna fakturor.',
    ikon: InvoiceIcon,
    ikonBakgrund: 'rgba(var(--morphic-accent-rgb), 0.1)'
  },
  {
    titel: 'Ekonomisk rapportering',
    beskrivning: 'Få insikt i ditt företags ekonomi med detaljerade rapporter och anpassningsbara dashboards.',
    ikon: ChartIcon,
    ikonBakgrund: 'rgba(125, 90, 255, 0.1)'
  },
  {
    titel: 'Momshantering',
    beskrivning: 'Automatiserad momsberäkning och enkel rapportering för att hjälpa dig hålla koll på dina skatteförpliktelser.',
    ikon: TaxIcon,
    ikonBakgrund: 'rgba(60, 200, 120, 0.1)'
  },
  {
    titel: 'Utgiftshantering',
    beskrivning: 'Spåra och kategorisera alla företagsutgifter enkelt med digitala kvitton och automatisk matchning.',
    ikon: ReceiptIcon,
    ikonBakgrund: 'rgba(240, 120, 80, 0.1)'
  },
  {
    titel: 'Molnbaserad tillgång',
    beskrivning: 'Få tillgång till din bokföring när som helst, var som helst, på vilken enhet som helst med vårt säkra molnsystem.',
    ikon: CloudIcon,
    ikonBakgrund: 'rgba(40, 170, 220, 0.1)'
  }
];
</script>

<style scoped>
.funktioner-sektion {
  padding: 80px 0;
  position: relative;
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

.funktioner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.funktion-kort {
  background: var(--morphic-bg-secondary);
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid var(--morphic-border-light);
}

.funktion-kort:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border-color: var(--morphic-border-medium);
}

.funktion-ikon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--morphic-primary-color);
}

.funktion-titel {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.funktion-beskrivning {
  color: var(--morphic-text-light);
  line-height: 1.6;
}

.funktioner-cta {
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
  .funktioner-sektion {
    padding: 60px 0;
  }
  
  .sektion-titel {
    font-size: 2rem;
  }
  
  .sektion-beskrivning {
    font-size: 1.1rem;
  }
  
  .funktioner-grid {
    grid-template-columns: 1fr;
  }
}
</style> 