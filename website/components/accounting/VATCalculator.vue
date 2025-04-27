<template>
  <div class="vat-calculator card">
    <h3>Momsberäkning</h3>
    
    <div class="calculator-form">
      <div class="form-group">
        <label for="amount">Belopp (SEK)</label>
        <input 
          id="amount" 
          type="number" 
          v-model.number="amount"
          class="form-control"
          placeholder="Ange belopp utan moms"
        />
      </div>
      
      <div class="form-group">
        <label for="vat-rate">Momssats</label>
        <select 
          id="vat-rate" 
          v-model="selectedRate"
          class="form-control"
        >
          <option value="25%">25% (Standard)</option>
          <option value="12%">12% (Livsmedel, hotell)</option>
          <option value="6%">6% (Böcker, kultur)</option>
          <option value="0%">0% (Momsfritt)</option>
        </select>
      </div>
      
      <div class="ai-validation" v-if="showAIValidation">
        <div class="ai-badge" :class="{'is-valid': aiResult?.valid}">
          <span v-if="aiIsLoading">AI verifierar...</span>
          <span v-else-if="aiResult?.valid">✓ AI-Verifierad</span>
          <span v-else>⚠️ Ej verifierad</span>
        </div>
        <div class="ai-errors" v-if="aiResult && !aiResult.valid">
          <ul>
            <li v-for="(error, i) in aiResult.errors" :key="i">{{ error }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="calculator-results">
      <div class="result-row">
        <span>Belopp utan moms:</span>
        <span>{{ formatCurrency(netAmount) }}</span>
      </div>
      <div class="result-row">
        <span>Momsbelopp ({{ selectedRate }}):</span>
        <span>{{ formatCurrency(vatAmount) }}</span>
      </div>
      <div class="result-row total">
        <span>Totalt belopp:</span>
        <span>{{ formatCurrency(totalAmount) }}</span>
      </div>
    </div>
    
    <div class="calculator-actions">
      <button class="btn btn-primary" @click="validateWithAI">
        AI-validera beräkning
      </button>
      <button class="btn btn-secondary" @click="resetCalculator">
        Återställ
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { MOMS_KODER } from '~/types/accounting'
import { useAI } from '~/composables/useAI'

const amount = ref(1000)
const selectedRate = ref('25%')
const showAIValidation = ref(false)

const { validateTransaction, isLoading: aiIsLoading, results: aiResult } = useAI()

// Calculate net, VAT and total amounts
const rateValue = computed(() => {
  if (selectedRate.value === '0%') return 0
  return MOMS_KODER[selectedRate.value]?.procentsats || 0
})

const netAmount = computed(() => amount.value || 0)
const vatAmount = computed(() => netAmount.value * rateValue.value)
const totalAmount = computed(() => netAmount.value + vatAmount.value)

// Format currency in SEK
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 2
  }).format(value)
}

// Validate the calculation with AI
const validateWithAI = async () => {
  showAIValidation.value = true
  
  const momsKod = selectedRate.value === '25%' ? '01' : 
                  selectedRate.value === '12%' ? '02' : 
                  selectedRate.value === '6%' ? '03' : '00'
  
  const procent = selectedRate.value === '25%' ? 25 : 
                  selectedRate.value === '12%' ? 12 : 
                  selectedRate.value === '6%' ? 6 : 0
  
  await validateTransaction(amount.value, momsKod, procent)
}

// Reset the calculator
const resetCalculator = () => {
  amount.value = 1000
  selectedRate.value = '25%'
  showAIValidation.value = false
}

// Reset AI validation when inputs change
watch([amount, selectedRate], () => {
  showAIValidation.value = false
})
</script>

<style scoped>
.vat-calculator {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.calculator-form {
  margin-bottom: 1.5rem;
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

.calculator-results {
  background-color: var(--light-gray);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
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
  font-size: 1.1rem;
}

.calculator-actions {
  display: flex;
  gap: 1rem;
}

.ai-validation {
  margin: 1rem 0;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: #f8f9fa;
  border-left: 3px solid var(--primary-color);
}

.ai-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #ffecb3;
  color: #856404;
}

.ai-badge.is-valid {
  background-color: #d4edda;
  color: #155724;
}

.ai-errors {
  margin-top: 0.5rem;
}

.ai-errors ul {
  margin: 0;
  padding-left: 1.5rem;
  color: var(--error-color);
}
</style> 