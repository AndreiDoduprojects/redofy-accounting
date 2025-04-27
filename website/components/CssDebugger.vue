<template>
  <div class="morphic-card p-4" v-if="visible">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-medium">CSS Variables Debug</h3>
      <button @click="visible = false" class="morphic-btn morphic-btn-sm">Close</button>
    </div>
    
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div v-for="(color, index) in colors" :key="index" class="flex items-center">
        <div 
          class="w-8 h-8 rounded mr-2" 
          :style="{ backgroundColor: `var(${color})` }"
        ></div>
        <code>{{ color }}</code>
      </div>
    </div>
    
    <p class="text-sm mt-4">
      <strong>Legacy + Morphic:</strong> {{ legacyMatchesMorphic ? '✅ Variables match' : '❌ Variables don\'t match' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const visible = ref(true)

const colors = [
  '--primary-color',
  '--morphic-primary',
  '--secondary-color',
  '--morphic-secondary',
  '--accent-color',
  '--morphic-accent',
  '--error-color',
  '--morphic-error',
  '--success-color', 
  '--morphic-success',
  '--warning-color',
  '--morphic-warning'
]

const legacyMatchesMorphic = computed(() => {
  if (process.server) return true
  
  const style = getComputedStyle(document.documentElement)
  const primaryMatch = style.getPropertyValue('--primary-color') === style.getPropertyValue('--morphic-primary')
  const secondaryMatch = style.getPropertyValue('--secondary-color') === style.getPropertyValue('--morphic-secondary')
  const accentMatch = style.getPropertyValue('--accent-color') === style.getPropertyValue('--morphic-accent')
  
  return primaryMatch && secondaryMatch && accentMatch
})
</script> 