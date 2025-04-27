<template>
  <div class="transaction-form card">
    <h3>Ny verifikation</h3>
    
    <form @submit.prevent="submitTransaction">
      <div class="form-row">
        <div class="form-group">
          <label for="verifikationsnummer">Verifikationsnummer</label>
          <input 
            id="verifikationsnummer" 
            v-model="transaction.verifikationsnummer" 
            type="text" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="datum">Datum</label>
          <input 
            id="datum" 
            v-model="transaction.datum" 
            type="date" 
            class="form-control"
            required
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="beskrivning">Beskrivning</label>
        <input 
          id="beskrivning" 
          v-model="transaction.beskrivning" 
          type="text" 
          class="form-control"
          required
        />
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="kontonummer">Kontonummer</label>
          <select 
            id="kontonummer" 
            v-model="transaction.kontonummer" 
            class="form-control"
            required
          >
            <option value="">Välj konto</option>
            <option v-for="(name, number) in basKontoplan" :key="number" :value="number">
              {{ number }} - {{ name }}
            </option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="belopp">Belopp (SEK)</label>
          <input 
            id="belopp" 
            v-model.number="transaction.belopp" 
            type="number" 
            min="0"
            step="0.01"
            class="form-control"
            required
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="moms_kod">Momskod</label>
        <select 
          id="moms_kod" 
          v-model="transaction.moms_kod" 
          class="form-control"
          required
        >
          <option value="">Välj momskod</option>
          <option value="01">01 - 25% moms</option>
          <option value="02">02 - 12% moms</option>
          <option value="03">03 - 6% moms</option>
          <option value="00">00 - Momsfritt</option>
        </select>
      </div>
      
      <div class="moms-calculation" v-if="transaction.belopp && transaction.moms_kod">
        <div class="result-row">
          <span>Belopp utan moms:</span>
          <span>{{ formatCurrency(netAmount) }}</span>
        </div>
        <div class="result-row">
          <span>Momsbelopp:</span>
          <span>{{ formatCurrency(vatAmount) }}</span>
        </div>
        <div class="result-row total">
          <span>Totalt belopp:</span>
          <span>{{ formatCurrency(totalAmount) }}</span>
        </div>
      </div>
      
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Spara verifikation</button>
        <button type="button" class="btn btn-secondary" @click="resetForm">Rensa</button>
      </div>
    </form>
    
    <div class="ai-badge" v-if="aiValidated">
      <span v-if="aiResult?.valid">✓ AI-Verifierad</span>
      <span v-else>⚠️ AI varning</span>
      
      <div class="ai-feedback" v-if="aiResult && !aiResult.valid">
        <p>AI upptäckte möjliga problem:</p>
        <ul>
          <li v-for="(error, i) in aiResult.errors" :key="i">{{ error }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { MOMS_KODER, BAS_KONTOPLAN, Verifikation } from '~/types/accounting'
import { useAI } from '~/composables/useAI'

const emit = defineEmits(['transaction-saved'])

const transaction = reactive<Verifikation>({
  verifikationsnummer: '',
  belopp: 0,
  moms_kod: '',
  datum: new Date().toISOString().split('T')[0],
  beskrivning: '',
  kontonummer: ''
})

const basKontoplan = ref(BAS_KONTOPLAN)
const aiValidated = ref(false)
const { validateTransaction, results: aiResult } = useAI()

// Calculate amounts
const momsRate = computed(() => {
  if (!transaction.moms_kod) return 0
  const momsKodKey = Object.keys(MOMS_KODER).find(key => 
    MOMS_KODER[key].kod === transaction.moms_kod
  )
  return momsKodKey ? MOMS_KODER[momsKodKey].procentsats : 0
})

const netAmount = computed(() => transaction.belopp || 0)
const vatAmount = computed(() => netAmount.value * momsRate.value)
const totalAmount = computed(() => netAmount.value + vatAmount.value)

// Format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 2
  }).format(value)
}

// Submit the transaction
const submitTransaction = async () => {
  // Validate with AI first
  await validateWithAI()
  
  // Emit save event
  emit('transaction-saved', { 
    ...transaction,
    created_at: new Date().toISOString()
  })
  
  // Reset form after successful submission
  resetForm()
}

// Validate with AI
const validateWithAI = async () => {
  aiValidated.value = true
  
  const procent = transaction.moms_kod === '01' ? 25 : 
                  transaction.moms_kod === '02' ? 12 : 
                  transaction.moms_kod === '03' ? 6 : 0
  
  await validateTransaction(transaction.belopp, transaction.moms_kod, procent)
}

// Reset the form
const resetForm = () => {
  Object.assign(transaction, {
    verifikationsnummer: '',
    belopp: 0,
    moms_kod: '',
    datum: new Date().toISOString().split('T')[0],
    beskrivning: '',
    kontonummer: ''
  })
  aiValidated.value = false
}
</script>

<style scoped>
.transaction-form {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-row .form-group {
  flex: 1;
}

.form-group {
  margin-bottom: 1rem;
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

.moms-calculation {
  background-color: var(--light-gray);
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
}

.result-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.result-row.total {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border-color);
  font-weight: 600;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.ai-badge {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: #f8f9fa;
  border-left: 3px solid var(--primary-color);
}

.ai-feedback {
  margin-top: 0.5rem;
}

.ai-feedback p {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.ai-feedback ul {
  margin: 0;
  padding-left: 1.5rem;
  color: var(--error-color);
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
}
</style> 