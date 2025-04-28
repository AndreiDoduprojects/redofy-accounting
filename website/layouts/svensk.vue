<template>
  <div class="svensk-layout">
    <Navigering />
    
    <main>
      <slot />
    </main>
    
    <SidfotInnehall />

    <div class="theme-toggle-wrapper">
      <ColorModeToggle />
    </div>
  </div>
</template>

<script setup>
import Navigering from '~/components/svensk/Navigering.vue'
import SidfotInnehall from '~/components/svensk/SidfotInnehall.vue'
import ColorModeToggle from '~/components/ColorModeToggle.vue'
</script>

<style>
.svensk-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.theme-toggle-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
</style> 