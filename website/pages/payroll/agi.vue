<template>
  <div>
    <section class="section hero-section">
      <div class="container">
        <h1 class="page-title">Arbetsgivaravgift Kalkylator</h1>
        <p class="page-subtitle">Beräkna arbetsgivaravgifter för anställda i Sverige</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="agi-calculator card">
          <div class="calculator-header">
            <h3>AGI Kalkylator</h3>
            <div class="agi-settings">
              <label class="switch">
                <input type="checkbox" v-model="useReducedRate">
                <span class="slider"></span>
              </label>
              <span>Använd reducerad avgift för unga ({{ settings.reducedRate * 100 }}%)</span>
            </div>
          </div>
          
          <div class="calculator-content">
            <div class="employee-form">
              <div class="form-group">
                <label for="employee-name">Namn</label>
                <input 
                  id="employee-name" 
                  v-model="employee.name" 
                  type="text" 
                  class="form-control"
                  placeholder="Anställds namn"
                />
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="employee-salary">Bruttolön (SEK)</label>
                  <input 
                    id="employee-salary" 
                    v-model.number="employee.salary" 
                    type="number" 
                    min="0"
                    step="100"
                    class="form-control"
                    placeholder="0"
                  />
                </div>
                
                <div class="form-group">
                  <label for="employee-age">Ålder</label>
                  <input 
                    id="employee-age" 
                    v-model.number="employee.age" 
                    type="number" 
                    min="15"
                    max="100"
                    class="form-control"
                    placeholder="30"
                  />
                </div>
                
                <div class="form-group">
                  <label for="employee-id">Personnummer</label>
                  <input 
                    id="employee-id" 
                    v-model="employee.personnummer" 
                    type="text" 
                    class="form-control"
                    placeholder="YYYYMMDD-XXXX"
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="employee-benefits">Förmåner (SEK)</label>
                <input 
                  id="employee-benefits" 
                  v-model.number="employee.benefits" 
                  type="number" 
                  min="0"
                  class="form-control"
                  placeholder="0"
                />
              </div>
              
              <div class="form-actions">
                <button class="btn btn-primary" @click="calculateEmployeeAGI">Beräkna</button>
                <button class="btn btn-secondary" @click="resetCalculator">Rensa</button>
              </div>
            </div>
            
            <div class="calculation-result" v-if="showResults">
              <h4>Beräkningsresultat</h4>
              
              <div class="result-table">
                <div class="result-row">
                  <span>Bruttolön:</span>
                  <span>{{ formatCurrency(employee.salary) }}</span>
                </div>
                <div class="result-row">
                  <span>Förmåner:</span>
                  <span>{{ formatCurrency(employee.benefits) }}</span>
                </div>
                <div class="result-row">
                  <span>Total ersättning:</span>
                  <span>{{ formatCurrency(totalCompensation) }}</span>
                </div>
                <div class="result-row">
                  <span>Arbetsgivaravgift ({{ appliedRate }}%):</span>
                  <span>{{ formatCurrency(result.avgift) }}</span>
                </div>
                <div class="result-row total">
                  <span>Total kostnad för arbetsgivaren:</span>
                  <span>{{ formatCurrency(result.total) }}</span>
                </div>
              </div>
              
              <div class="result-notes">
                <p v-if="useReducedRate" class="note-info">
                  <strong>OBS:</strong> Reducerad avgift tillämpas för personer födda {{ getReducedRateYears() }} eller senare.
                </p>
                <p class="note-info">
                  <strong>Kostnadsfördelning:</strong> För varje 100 kr i lön betalar du som arbetsgivare ytterligare {{ appliedRate }} kr i arbetsgivaravgift.
                </p>
              </div>
            </div>
          </div>
          
          <div class="geo-fencing-info">
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Swedish Labor Law Compliance
            </h4>
            <p>Redofy inkluderar geofencing-funktioner för automatisk tidrapportering i enlighet med svensk arbetsrätt.</p>
            <pre class="code-snippet">
// Mobile geofence trigger
TaskManager.defineTask('clock-in', ({ region }) => {
  if (region.state === 'enter') startTimer();
});</pre>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="ai-insights card">
          <h3>AI Insights</h3>
          <p>Claude AI-analys av dina arbetsgivaravgifter och tidrapportering</p>
          
          <div class="insights-grid">
            <div class="insight-item">
              <h4>Kostnadsanalys</h4>
              <p>Baserat på dina 15 anställda kommer din totala arbetsgivaravgift att uppgå till ca 125 000 SEK per månad. Detta är 8% lägre än branschgenomsnittet.</p>
            </div>
            
            <div class="insight-item">
              <h4>Regelefterlevnad</h4>
              <p>Alla dina tidrapporter följer svensk arbetstidslagstiftning. Inga övertidsregler har överträtts under de senaste 30 dagarna.</p>
            </div>
            
            <div class="insight-item">
              <h4>Optimeringsmöjligheter</h4>
              <p>Du kan spara ca 45 000 SEK per år genom att bättre utnyttja reglerna för reducerad arbetsgivaravgift för unga anställda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { useSkatteverket } from '~/composables/useSkatteverket'
import { DEFAULT_AGI_SETTINGS } from '~/types/accounting'

// Employee data
const employee = reactive({
  name: '',
  salary: 30000,
  age: 30,
  personnummer: '',
  benefits: 0
})

// AGI calculation
const settings = reactive({ ...DEFAULT_AGI_SETTINGS })
const useReducedRate = ref(false)
const showResults = ref(false)
const result = reactive({
  lon: 0,
  avgift: 0,
  rate: 0,
  total: 0
})

const { calculateAGI } = useSkatteverket()

// Computed values
const totalCompensation = computed(() => {
  return (employee.salary || 0) + (employee.benefits || 0)
})

const appliedRate = computed(() => {
  return (useReducedRate.value ? settings.reducedRate : settings.fullRate) * 100
})

// Get years for reduced rate
const getReducedRateYears = () => {
  const currentYear = new Date().getFullYear()
  return `${currentYear - 23}`
}

// Format currency in SEK
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 2
  }).format(value)
}

// Calculate AGI for the employee
const calculateEmployeeAGI = () => {
  if (!employee.salary) return
  
  // Update settings based on checkbox
  settings.useReducedRate = useReducedRate.value
  
  // Calculate using the composable
  const calculationResult = calculateAGI(totalCompensation.value, settings)
  
  // Update the result
  Object.assign(result, calculationResult)
  
  // Show results
  showResults.value = true
}

// Reset the calculator
const resetCalculator = () => {
  Object.assign(employee, {
    name: '',
    salary: 30000,
    age: 30,
    personnummer: '',
    benefits: 0
  })
  
  showResults.value = false
}

// Watch for age changes to set the correct rate
watch(() => employee.age, (newAge) => {
  if (newAge && newAge < 23) {
    useReducedRate.value = true
  }
})

// Watch personnummer to extract age if possible
watch(() => employee.personnummer, (newId) => {
  if (newId && newId.length >= 8) {
    try {
      const yearStr = newId.substring(0, 4)
      const year = parseInt(yearStr, 10)
      if (!isNaN(year)) {
        const currentYear = new Date().getFullYear()
        employee.age = currentYear - year
      }
    } catch (e) {
      // Ignore parsing errors
    }
  }
})
</script>

<style scoped>
.hero-section {
  background-color: var(--light-gray);
  text-align: center;
  padding: 4rem 0;
}

.page-title {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: var(--primary-color);
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--secondary-color);
  max-width: 700px;
  margin: 0 auto;
}

.agi-calculator, .ai-insights {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}

.calculator-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.agi-settings {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.calculator-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1rem;
  flex: 1;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--secondary-color);
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.calculation-result {
  background-color: var(--light-gray);
  padding: 1.5rem;
  border-radius: 8px;
}

.calculation-result h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.result-table {
  margin-bottom: 1.5rem;
}

.result-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.result-row.total {
  font-weight: 600;
  font-size: 1.1rem;
  border-bottom: none;
  margin-top: 0.5rem;
}

.result-notes {
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.note-info {
  background-color: #e3f2fd;
  padding: 0.75rem;
  border-radius: 4px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 0.75rem;
}

.geo-fencing-info {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.geo-fencing-info h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.code-snippet {
  background-color: #1a202c;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
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
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--primary-color);
}

input:checked + .slider:before {
  transform: translateX(24px);
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.insight-item {
  background-color: var(--light-gray);
  padding: 1.5rem;
  border-radius: 8px;
  border-top: 3px solid var(--primary-color);
}

.insight-item h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.insight-item p {
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .calculator-content {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .calculator-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .insights-grid {
    grid-template-columns: 1fr;
  }
}
</style> 