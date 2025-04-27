<template>
  <div class="insight-card" :class="{ 'is-loading': loading }">
    <div class="insight-header">
      <div class="insight-title">
        <h3>{{ title }}</h3>
        <div class="ai-badge">AI</div>
      </div>
      <button @click="refreshInsight" class="refresh-button" :disabled="loading">
        <span v-if="loading">Analyzing...</span>
        <span v-else>Refresh</span>
      </button>
    </div>
    
    <div v-if="loading" class="insight-loading">
      <div class="loading-spinner"></div>
      <p>Claude AI is analyzing your data...</p>
    </div>
    
    <div v-else class="insight-content">
      <p v-if="error" class="insight-error">
        {{ error }}
      </p>
      <div v-else-if="insight">
        <p class="insight-text">{{ insight }}</p>
        
        <div v-if="hasDetails" class="insight-details">
          <h4>Details</h4>
          <slot name="details"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  initialInsight: {
    type: String,
    default: ''
  },
  autoLoad: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['refresh'])

const loading = ref(false)
const error = ref<string | null>(null)
const insight = ref(props.initialInsight)
const hasDetails = ref(false)

// Refresh the insight
const refreshInsight = async () => {
  loading.value = true
  error.value = null
  
  try {
    // Emit refresh event and wait for parent to provide data
    emit('refresh')
    
    // In a real app, we'd wait for the response
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // This would be set by the parent component
    if (!insight.value) {
      insight.value = 'Based on the recent transactions, your VAT compliance is good, but you have 3 transactions that might need review before the next declaration period.'
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load AI insight'
  } finally {
    loading.value = false
  }
}

// Load initial insight
onMounted(() => {
  // Check for slot content to determine if we have details
  const slotContent = document.querySelector('.insight-card .insight-details')
  hasDetails.value = slotContent !== null
  
  if (props.autoLoad && !insight.value) {
    refreshInsight()
  }
})
</script>

<style scoped>
.insight-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: all 0.3s ease;
  border-top: 3px solid #5a67d8;
}

.insight-card.is-loading {
  background-color: #f9fafc;
}

.insight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.insight-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.insight-title h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.ai-badge {
  background-color: #5a67d8;
  color: white;
  font-family: 'Orbitron', sans-serif;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.refresh-button {
  background-color: transparent;
  color: #5a67d8;
  border: 1px solid #5a67d8;
  border-radius: 4px;
  padding: 0.4rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.refresh-button:hover {
  background-color: #f0f4ff;
}

.refresh-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.insight-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #5a67d8;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.insight-content {
  padding: 0.5rem 0;
}

.insight-text {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.insight-error {
  color: var(--error-color);
  padding: 1rem;
  background-color: #fff5f5;
  border-radius: 4px;
  border-left: 3px solid var(--error-color);
}

.insight-details {
  background-color: #f9fafc;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.insight-details h4 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}
</style> 