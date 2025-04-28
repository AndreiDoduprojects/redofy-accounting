<template>
  <div class="ice-background">
    <!-- Gradient Spheres -->
    <div class="gradient-sphere sphere-1"></div>
    <div class="gradient-sphere sphere-2"></div>
    <div class="gradient-sphere sphere-3"></div>
    
    <!-- Background Grid -->
    <div class="bg-grid"></div>
    
    <!-- Particles -->
    <div class="particles-container">
      <div v-for="n in 20" :key="n" class="particle" :style="getRandomParticleStyle()"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Generate random particle styles
const getRandomParticleStyle = () => {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: (Math.random() * 0.5 + 0.1).toFixed(2),
    width: `${Math.random() * 6 + 2}px`,
    height: `${Math.random() * 6 + 2}px`,
    animationDuration: `${Math.random() * 20 + 10}s`,
    animationDelay: `${Math.random() * 5}s`
  }
}

// Handle parallax effect
const handleMouseMove = (e) => {
  if (!document.querySelector('.ice-background')) return
  
  const xPos = (e.clientX / window.innerWidth - 0.5) * 20
  const yPos = (e.clientY / window.innerHeight - 0.5) * 20
  
  const spheres = document.querySelectorAll('.gradient-sphere')
  spheres.forEach((sphere, i) => {
    const factor = 0.8 - i * 0.2
    sphere.style.transform = `translate(${xPos * factor}px, ${yPos * factor}px)`
  })
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.ice-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

/* Gradient Spheres */
.gradient-sphere {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  transition: transform 0.3s ease-out;
}

.sphere-1 {
  width: 40vw;
  height: 40vw;
  background: radial-gradient(circle, var(--morphic-primary, #3b82f6) 0%, rgba(59, 130, 246, 0) 70%);
  top: -10%;
  right: -5%;
}

.sphere-2 {
  width: 45vw;
  height: 45vw;
  background: radial-gradient(circle, var(--morphic-accent, #8b5cf6) 0%, rgba(139, 92, 246, 0) 70%);
  bottom: -15%;
  left: -10%;
}

.sphere-3 {
  width: 30vw;
  height: 30vw;
  background: radial-gradient(circle, var(--morphic-secondary, #10b981) 0%, rgba(16, 185, 129, 0) 70%);
  top: 40%;
  left: 20%;
}

/* Background Grid */
.bg-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, rgba(var(--morphic-grid-rgb, 229, 231, 235), 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(var(--morphic-grid-rgb, 229, 231, 235), 0.1) 1px, transparent 1px);
  opacity: 0.4;
}

/* Particles */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  background-color: rgba(var(--morphic-particle-rgb, 255, 255, 255), 0.6);
  border-radius: 50%;
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(-30px) translateX(15px) rotate(90deg);
  }
  50% {
    transform: translateY(-10px) translateX(30px) rotate(180deg);
  }
  75% {
    transform: translateY(20px) translateX(15px) rotate(270deg);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(360deg);
  }
}

/* Dark mode adjustments */
:root.dark .bg-grid {
  opacity: 0.15;
}

:root.dark .gradient-sphere {
  opacity: 0.4;
}

/* Media Queries */
@media (max-width: 768px) {
  .gradient-sphere {
    filter: blur(60px);
  }
  
  .sphere-1 {
    width: 60vw;
    height: 60vw;
  }
  
  .sphere-2 {
    width: 70vw;
    height: 70vw;
  }
  
  .sphere-3 {
    width: 50vw;
    height: 50vw;
  }
}
</style> 