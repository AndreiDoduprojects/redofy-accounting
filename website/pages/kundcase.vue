<template>
  <div>
    <IceBackground />
    <div class="page-content">
      <SvenskNavbar />
      <section class="customer-cases">
        <div class="container">
          <div class="cases-header">
            <h1 class="cases-title">Kundcase</h1>
            <p class="cases-subtitle">Se hur företag i olika branscher förbättrar sin ekonomihantering med Redofy</p>
          </div>
          
          <div class="cases-filter">
            <button 
              v-for="filter in filters" 
              :key="filter.id"
              @click="activeFilter = filter.id"
              :class="{ 'active': activeFilter === filter.id }"
              class="filter-button"
            >
              {{ filter.name }}
            </button>
          </div>
          
          <div class="cases-grid">
            <div 
              v-for="(customer, index) in filteredCases" 
              :key="index"
              class="case-card"
              :class="{ 'featured': customer.featured }"
            >
              <div class="case-image">
                <img :src="customer.image" :alt="customer.company">
                <div v-if="customer.featured" class="featured-badge">Utmärkt</div>
              </div>
              <div class="case-content">
                <div class="case-industry">{{ customer.industry }}</div>
                <h3 class="case-title">{{ customer.company }}</h3>
                <p class="case-description">{{ customer.description }}</p>
                <div class="case-results">
                  <div class="result-item" v-for="(result, i) in customer.results" :key="i">
                    <div class="result-value">{{ result.value }}</div>
                    <div class="result-label">{{ result.label }}</div>
                  </div>
                </div>
                <button class="case-button">Läs hela kundcaset</button>
              </div>
            </div>
          </div>
          
          <div class="cases-cta">
            <div class="cta-content">
              <h2>Vill du bli vår nästa framgångsberättelse?</h2>
              <p>Boka en demo med våra experter och upptäck hur Redofy kan förändra din ekonomihantering</p>
              <div class="cta-buttons">
                <NuxtLink to="/demo" class="btn-primary">Boka demo</NuxtLink>
                <NuxtLink to="/kontakt" class="btn-secondary">Kontakta säljteam</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filters = [
  { id: 'all', name: 'Alla' },
  { id: 'retail', name: 'Detaljhandel' },
  { id: 'tech', name: 'Tech & IT' },
  { id: 'service', name: 'Tjänsteföretag' },
  { id: 'manufacturing', name: 'Tillverkning' }
]

const customers = [
  {
    company: 'TechStart AB',
    industry: 'Tech & IT',
    description: 'TechStart AB växte snabbt och behövde ett system som kunde hantera deras ökande antal transaktioner. Med Redofy kunde de automatisera 80% av sin bokföring och spara värdefull tid.',
    image: '/img/cases/techstart.jpg',
    featured: true,
    results: [
      { value: '80%', label: 'Automatisering' },
      { value: '15h', label: 'Sparad tid/vecka' },
      { value: '45%', label: 'Minskade fel' }
    ],
    category: 'tech'
  },
  {
    company: 'Möbler & Mer',
    industry: 'Detaljhandel',
    description: 'Med butiker i tre städer behövde Möbler & Mer ett enhetligt system för ekonomihantering. Redofy gav dem realtidsöversikt över alla butiker och förbättrade kassaflödeshanteringen.',
    image: '/img/cases/mobler.jpg',
    featured: false,
    results: [
      { value: '30%', label: 'Snabbare bokslut' },
      { value: '3x', label: 'Bättre överblick' },
      { value: '25%', label: 'Ökad lönsamhet' }
    ],
    category: 'retail'
  },
  {
    company: 'Bergmans Bygg',
    industry: 'Tillverkning',
    description: 'Bergmans Bygg brottades med komplexa projektredovisningar och svårigheter att följa upp kostnader. Med Redofy kunde de enkelt följa varje projekt och förbättra sin ekonomiska planering.',
    image: '/img/cases/bergmans.jpg',
    featured: false,
    results: [
      { value: '40%', label: 'Bättre projektuppföljning' },
      { value: '22%', label: 'Kostnadsbesparing' },
      { value: '60%', label: 'Snabbare fakturering' }
    ],
    category: 'manufacturing'
  },
  {
    company: 'Lindström Consulting',
    industry: 'Tjänsteföretag',
    description: 'Redovisningsbyrån Lindström Consulting hjälper nu sina klienter med Redofy, vilket har effektiviserat deras arbetsflöden och gett dem möjlighet att ta fler kunder.',
    image: '/img/cases/lindstrom.jpg',
    featured: false,
    results: [
      { value: '35%', label: 'Fler klienter' },
      { value: '50%', label: 'Snabbare processer' },
      { value: '90%', label: 'Nöjdare kunder' }
    ],
    category: 'service'
  },
  {
    company: 'Nordic Design',
    industry: 'Detaljhandel',
    description: 'Designföretaget Nordic Design med e-handel och showroom i Stockholm behövde bättre koll på sitt lager och ekonomi. Redofy integrerades med deras e-handelssystem för sömlös överblick.',
    image: '/img/cases/nordic.jpg',
    featured: true,
    results: [
      { value: '65%', label: 'Bättre lagerkontroll' },
      { value: '28%', label: 'Minskade kostnader' },
      { value: '3d', label: 'Snabbare bokslut' }
    ],
    category: 'retail'
  },
  {
    company: 'ServicePro',
    industry: 'Tjänsteföretag',
    description: 'ServicePro med 25 anställda konsulter behövde bättre kontroll över tidrapportering och fakturering. Med Redofy kunde de automatisera hela flödet från tidrapport till bokföring.',
    image: '/img/cases/servicepro.jpg',
    featured: false,
    results: [
      { value: '75%', label: 'Automatiserad fakturahantering' },
      { value: '45%', label: 'Minskad administration' },
      { value: '20%', label: 'Ökad faktureringsgrad' }
    ],
    category: 'service'
  }
]

const filteredCases = computed(() => {
  if (activeFilter.value === 'all') {
    return customers
  }
  return customers.filter(customer => customer.category === activeFilter.value)
})
</script>

<style scoped>
.customer-cases {
  padding: 8rem 0 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.cases-header {
  text-align: center;
  margin-bottom: 3rem;
}

.cases-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.cases-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
}

.cases-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-button {
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  background: white;
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  border-color: #0284c7;
  color: #0284c7;
}

.filter-button.active {
  background: #0284c7;
  color: white;
  border-color: #0284c7;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.case-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.case-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.case-card.featured {
  border: 2px solid #0ea5e9;
}

.case-image {
  position: relative;
  height: 200px;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #0ea5e9;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}

.case-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.case-industry {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.5rem;
}

.case-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
}

.case-description {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.case-results {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.result-item {
  display: flex;
  flex-direction: column;
}

.result-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0284c7;
}

.result-label {
  font-size: 0.8rem;
  color: #64748b;
}

.case-button {
  margin-top: auto;
  background: transparent;
  color: #0284c7;
  border: 1px solid #0284c7;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.case-button:hover {
  background: #eff6ff;
}

.cases-cta {
  background: linear-gradient(135deg, #0284c7, #0ea5e9);
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 4rem;
  color: white;
  text-align: center;
  box-shadow: 0 15px 30px rgba(2, 132, 199, 0.15);
}

.cta-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.btn-primary {
  padding: 0.9rem 2rem;
  background: white;
  color: #0284c7;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  padding: 0.9rem 2rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .customer-cases {
    padding: 6rem 0 3rem;
  }
  
  .cases-grid {
    grid-template-columns: 1fr;
  }
  
  .cases-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cases-cta {
    padding: 2rem;
  }
}
</style> 