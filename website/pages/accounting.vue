<template>
  <div>
    <section class="section hero-section">
      <div class="container">
        <h1 class="page-title">Redofy Accounting System</h1>
        <p class="page-subtitle">A modern Swedish accounting system with AI-powered reliability</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="dashboard-grid">
          <!-- Left side (VAT Calculator and Transactions) -->
          <div class="dashboard-column">
            <VATCalculator class="dashboard-widget" />
            
            <div class="dashboard-widget transactions-list">
              <h3>Senaste verifikationer</h3>
              
              <div class="transaction-item" v-for="(transaction, index) in transactions" :key="index">
                <div class="transaction-header">
                  <div>
                    <span class="transaction-id">{{ transaction.verifikationsnummer }}</span>
                    <span class="transaction-date">{{ formatDate(transaction.datum) }}</span>
                  </div>
                  <span class="transaction-amount">{{ formatCurrency(transaction.belopp) }}</span>
                </div>
                <div class="transaction-description">
                  {{ transaction.beskrivning }}
                </div>
                <div class="transaction-details">
                  <div>
                    <span class="detail-label">Konto:</span> 
                    <span class="detail-value">{{ transaction.kontonummer }}</span>
                  </div>
                  <div>
                    <span class="detail-label">Moms:</span> 
                    <span class="detail-value">{{ getMomsDescription(transaction.moms_kod) }}</span>
                  </div>
                </div>
              </div>
              
              <div v-if="transactions.length === 0" class="empty-state">
                <p>Inga verifikationer har skapats än.</p>
              </div>
            </div>
          </div>
          
          <!-- Right side (Transaction Form and AI Insights) -->
          <div class="dashboard-column">
            <TransactionForm 
              class="dashboard-widget" 
              @transaction-saved="addTransaction" 
            />
            
            <InsightCard 
              class="dashboard-widget" 
              title="Financial Insights" 
              :initial-insight="aiInsight"
              @refresh="refreshAIInsight"
            >
              <template #details>
                <ul class="insight-details-list">
                  <li>
                    <span class="detail-label">VAT compliance:</span>
                    <span class="detail-value success">Good</span>
                  </li>
                  <li>
                    <span class="detail-label">Transactions to review:</span>
                    <span class="detail-value warning">3</span>
                  </li>
                  <li>
                    <span class="detail-label">Missing receipts:</span>
                    <span class="detail-value danger">2</span>
                  </li>
                </ul>
              </template>
            </InsightCard>
            
            <div class="dashboard-widget">
              <h3>BAS-IX Export</h3>
              <p>Generate XML files for Skatteverket submissions</p>
              
              <div class="form-group">
                <label for="period">Redovisningsperiod</label>
                <select id="period" v-model="exportPeriod" class="form-control">
                  <option value="2023-04">April 2023</option>
                  <option value="2023-05">Maj 2023</option>
                  <option value="2023-06">Juni 2023</option>
                </select>
              </div>
              
              <button class="btn btn-primary" @click="generateBASIX">
                <span v-if="isGenerating">Genererar...</span>
                <span v-else>Generera BAS-IX</span>
              </button>
              
              <div v-if="xmlData" class="xml-preview">
                <h4>Generated XML</h4>
                <pre><code>{{ xmlData }}</code></pre>
                <button class="btn btn-secondary" @click="downloadXML">
                  Ladda ner XML
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useAI } from '~/composables/useAI'
import { useSkatteverket } from '~/composables/useSkatteverket'
import { Verifikation, MOMS_KODER } from '~/types/accounting'
import VATCalculator from '~/components/accounting/VATCalculator.vue'
import TransactionForm from '~/components/accounting/TransactionForm.vue'
import InsightCard from '~/components/ai/InsightCard.vue'

// Sample data
const transactions = ref<Verifikation[]>([
  {
    verifikationsnummer: 'VER-2023-001',
    belopp: 1200,
    moms_kod: '01',
    datum: '2023-06-15',
    beskrivning: 'Inköp av kontorsmaterial',
    kontonummer: '1920'
  },
  {
    verifikationsnummer: 'VER-2023-002',
    belopp: 850,
    moms_kod: '02',
    datum: '2023-06-20',
    beskrivning: 'Lunch med kund',
    kontonummer: '1930'
  }
])

// AI insight
const aiInsight = ref('Your accounting is looking good! All VAT codes are correctly applied, and you have no overdue invoices.');
const { explainReport } = useAI()

// BAS-IX export
const exportPeriod = ref('2023-06')
const xmlData = ref('')
const { generateBASIX, isGenerating } = useSkatteverket()

// Format date in Swedish format
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('sv-SE')
}

// Format currency in SEK
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 2
  }).format(value)
}

// Get description for moms code
const getMomsDescription = (momsKod: string) => {
  const rate = Object.entries(MOMS_KODER).find(([_, info]) => info.kod === momsKod)
  return rate ? `${rate[0]} (${rate[1].beskrivning})` : 'Okänd'
}

// Add a new transaction
const addTransaction = (transaction: Verifikation) => {
  transactions.value.unshift(transaction)
}

// Refresh AI insight
const refreshAIInsight = async () => {
  const result = await explainReport('momsrapport', {
    transactions: transactions.value,
    period: exportPeriod.value
  })
  
  if (result && result.explanation) {
    aiInsight.value = result.explanation
  }
}

// Generate BAS-IX XML
const generateBASIXXML = async () => {
  xmlData.value = await generateBASIX(transactions.value, exportPeriod.value) || ''
}

// Download XML file
const downloadXML = () => {
  const blob = new Blob([xmlData.value], { type: 'application/xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `BAS-IX-${exportPeriod.value}.xml`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
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

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.dashboard-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.dashboard-widget {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}

.transactions-list {
  flex: 1;
}

.transaction-item {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.transaction-id {
  font-weight: 600;
  margin-right: 1rem;
}

.transaction-date {
  color: var(--dark-gray);
  font-size: 0.9rem;
}

.transaction-amount {
  font-weight: 600;
  color: var(--primary-color);
}

.transaction-description {
  margin-bottom: 0.5rem;
}

.transaction-details {
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: var(--dark-gray);
}

.detail-label {
  font-weight: 500;
  margin-right: 0.25rem;
}

.empty-state {
  padding: 2rem;
  text-align: center;
  color: var(--dark-gray);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
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

.xml-preview {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: var(--light-gray);
  border-radius: 4px;
}

.xml-preview h4 {
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.xml-preview pre {
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-family: "Roboto Mono", monospace;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.insight-details-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.insight-details-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.insight-details-list li:last-child {
  border-bottom: none;
}

.success {
  color: var(--success-color);
  font-weight: 500;
}

.warning {
  color: var(--warning-color);
  font-weight: 500;
}

.danger {
  color: var(--error-color);
  font-weight: 500;
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style> 