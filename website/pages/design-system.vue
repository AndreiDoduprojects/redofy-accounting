<template>
  <div>
    <div class="container py-10">
      <h1 class="text-4xl font-bold mb-8">Redofy Design System Integration</h1>
      
      <!-- CSS Debugger -->
      <div class="mb-10">
        <CssDebugger />
      </div>
      
      <div class="morphic-card mb-10">
        <h2 class="text-2xl font-semibold mb-4">System Integration Demo</h2>
        <p class="mb-4">This page demonstrates the seamless integration between the legacy CSS system and the new Morphic design system.</p>
        
        <div class="flex gap-4 mt-6">
          <ColorModeToggle />
          <button class="morphic-btn morphic-btn-primary">Morphic Button</button>
          <button class="btn btn-primary">Legacy Button</button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="card">
          <h3 class="text-xl font-medium mb-3">Legacy Card</h3>
          <p>This card uses the legacy <code>.card</code> class, which now maps to the Morphic design system under the hood.</p>
        </div>
        
        <div class="morphic-card">
          <h3 class="text-xl font-medium mb-3">Morphic Card</h3>
          <p>This card uses the new <code>.morphic-card</code> class directly from the Morphic system.</p>
        </div>
      </div>
      
      <div class="section mb-10">
        <h2 class="section-title">Legacy Grid System</h2>
        <div class="row">
          <div class="col">
            <div class="morphic-card-glass p-4">Column 1</div>
          </div>
          <div class="col">
            <div class="morphic-card-glass p-4">Column 2</div>
          </div>
          <div class="col">
            <div class="morphic-card-glass p-4">Column 3</div>
          </div>
        </div>
      </div>
      
      <div class="mb-10">
        <h2 class="text-2xl font-semibold mb-6">Morphic Grid System</h2>
        <div class="morphic-grid morphic-grid-cols-1 morphic-md-grid-cols-3">
          <div class="morphic-card-glass p-4">Column 1</div>
          <div class="morphic-card-glass p-4">Column 2</div>
          <div class="morphic-card-glass p-4">Column 3</div>
        </div>
      </div>
      
      <div class="mb-10">
        <h2 class="text-2xl font-semibold mb-6">Tailwind Integration</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-bg-primary p-4 rounded-lg shadow">Column 1</div>
          <div class="bg-bg-secondary p-4 rounded-lg shadow">Column 2</div>
          <div class="bg-bg-tertiary p-4 rounded-lg shadow">Column 3</div>
        </div>
      </div>
      
      <div class="mb-10">
        <h2 class="text-2xl font-semibold mb-6">Color Variables</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-4 h-20 rounded flex items-center justify-center text-white font-medium" style="background-color: var(--primary-color)">Primary (Legacy)</div>
          <div class="p-4 h-20 rounded flex items-center justify-center text-white font-medium" style="background-color: var(--morphic-primary)">Primary (Morphic)</div>
          <div class="p-4 h-20 rounded flex items-center justify-center text-white font-medium" style="background-color: var(--secondary-color)">Secondary (Legacy)</div>
          <div class="p-4 h-20 rounded flex items-center justify-center text-white font-medium" style="background-color: var(--morphic-secondary)">Secondary (Morphic)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the components we need
import CssDebugger from '~/components/CssDebugger.vue';
</script> 