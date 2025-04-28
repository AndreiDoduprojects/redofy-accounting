<template>
  <section class="kontakt-cta" id="kontakt">
    <div class="morphic-container">
      <div class="cta-wrapper">
        <div class="cta-content">
          <h2 class="cta-titel">Redo att förbättra din ekonomihantering?</h2>
          <p class="cta-beskrivning">Få en personlig demonstration och se hur Redofy kan hjälpa ditt företag att spara tid och pengar.</p>
          
          <div class="cta-fördelar">
            <div class="fördel-rad">
              <CheckIcon class="fördel-ikon" />
              <span>Personlig demonstration av alla funktioner</span>
            </div>
            <div class="fördel-rad">
              <CheckIcon class="fördel-ikon" />
              <span>Skräddarsydda lösningar för ditt företags behov</span>
            </div>
            <div class="fördel-rad">
              <CheckIcon class="fördel-ikon" />
              <span>Svar på alla dina frågor från en produktexpert</span>
            </div>
          </div>
          
          <div class="cta-knappar">
            <NuxtLink to="/sv/kontakt" class="btn-primär">
              Boka en demonstration
            </NuxtLink>
            <NuxtLink to="/sv/priser" class="btn-sekundär">
              Se våra priser
            </NuxtLink>
          </div>
        </div>
        
        <div class="cta-illustration">
          <img src="/images/support-team.svg" alt="Redofy support team" class="illustration-bild" />
        </div>
      </div>
    </div>
    
    <div class="bakgrund-element bakgrund-cirkel-1"></div>
    <div class="bakgrund-element bakgrund-cirkel-2"></div>
  </section>
</template>

<script setup>
// Checkicon komponent
const CheckIcon = defineComponent({
  name: 'CheckIcon',
  render() {
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M20 6 9 17l-5-5' })
    ]);
  }
});
</script>

<style scoped>
.kontakt-cta {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--morphic-bg-gradient-start), var(--morphic-bg-gradient-end));
}

.cta-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.cta-content {
  flex: 1;
  max-width: 600px;
}

.cta-titel {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  color: var(--morphic-heading-color);
}

.cta-beskrivning {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: var(--morphic-text-color);
}

.cta-fördelar {
  margin-bottom: 40px;
}

.fördel-rad {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}

.fördel-ikon {
  color: var(--morphic-primary-color);
  margin-right: 12px;
  flex-shrink: 0;
}

.cta-knappar {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primär {
  padding: 14px 28px;
  background: var(--morphic-primary-color);
  color: white;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.btn-primär:hover {
  background: var(--morphic-primary-dark);
  transform: translateY(-2px);
}

.btn-sekundär {
  padding: 14px 28px;
  background: transparent;
  color: var(--morphic-text-color);
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid var(--morphic-border-light);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.btn-sekundär:hover {
  background: var(--morphic-bg-hover);
  border-color: var(--morphic-border-medium);
}

.cta-illustration {
  flex: 1;
  max-width: 500px;
  display: flex;
  justify-content: flex-end;
}

.illustration-bild {
  max-width: 100%;
  height: auto;
}

.bakgrund-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.bakgrund-cirkel-1 {
  width: 400px;
  height: 400px;
  background: var(--morphic-primary-color);
  top: -150px;
  right: -100px;
}

.bakgrund-cirkel-2 {
  width: 300px;
  height: 300px;
  background: var(--morphic-accent-color);
  bottom: -100px;
  left: -50px;
}

@media (max-width: 1024px) {
  .cta-wrapper {
    flex-direction: column;
  }
  
  .cta-content {
    max-width: 100%;
    margin-bottom: 50px;
  }
  
  .cta-illustration {
    max-width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .kontakt-cta {
    padding: 70px 0;
  }
  
  .cta-titel {
    font-size: 2rem;
  }
  
  .cta-beskrivning {
    font-size: 1.1rem;
  }
  
  .cta-knappar {
    flex-direction: column;
  }
  
  .btn-primär, .btn-sekundär {
    width: 100%;
    text-align: center;
  }
  
  .illustration-bild {
    max-width: 80%;
  }
}
</style> 