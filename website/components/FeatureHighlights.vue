<template>
  <section class="morphic-features">
    <div class="frost-circle frost-circle-1"></div>
    <div class="frost-circle frost-circle-2"></div>
    
    <div class="morphic-container">
      <div class="features-header">
        <h2 class="features-title">Smarta funktioner för modern bokföring</h2>
        <p class="features-subtitle">Redofy kombinerar automatisering och AI för att göra bokföringen enklare än någonsin</p>
      </div>
      
      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon-wrapper">
            <div class="feature-icon">
              <component :is="feature.icon" />
            </div>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "AI-driven bokföring",
    description: "Vår AI-teknik lär sig av dina transaktioner och automatiserar bokföringen med hög precision.",
    icon: defineComponent({
      render() {
        return h('svg', { 
          xmlns: 'http://www.w3.org/2000/svg', 
          viewBox: '0 0 24 24', 
          fill: 'none', 
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        }, [
          h('path', { d: 'M12 2a10 10 0 1 0 10 10H12V2z' }),
          h('path', { d: 'M12 2a10 10 0 0 1 10 10h-10V2z' }),
          h('path', { d: 'M12 12l9-3' }),
          h('path', { d: 'M12 12l-9-3' }),
          h('path', { d: 'M12 12l3 9' }),
          h('path', { d: 'M12 12l-3-9' })
        ])
      }
    })
  },
  {
    title: "Automatiska transaktioner",
    description: "Koppla dina bankkonton och få alla transaktioner automatiskt importerade och kategoriserade.",
    icon: defineComponent({
      render() {
        return h('svg', { 
          xmlns: 'http://www.w3.org/2000/svg', 
          viewBox: '0 0 24 24', 
          fill: 'none', 
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        }, [
          h('path', { d: 'M21 12V7H5a2 2 0 0 1 0-4h14v4' }),
          h('path', { d: 'M3 5v14a2 2 0 0 0 2 2h16v-5' }),
          h('path', { d: 'M18 12a2 2 0 0 0 0 4h4v-4Z' })
        ])
      }
    })
  },
  {
    title: "Realtidsöversikt",
    description: "Få en tydlig ekonomisk överblick i realtid med anpassade dashboard och rapporter.",
    icon: defineComponent({
      render() {
        return h('svg', { 
          xmlns: 'http://www.w3.org/2000/svg', 
          viewBox: '0 0 24 24', 
          fill: 'none', 
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        }, [
          h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2' }),
          h('line', { x1: '8', y1: '21', x2: '16', y2: '21' }),
          h('line', { x1: '12', y1: '17', x2: '12', y2: '21' }),
          h('path', { d: 'M6 8h.01M6 12h.01M6 16h.01M9 8h6M9 12h6M9 16h6' })
        ])
      }
    })
  },
  {
    title: "Kvittohantering",
    description: "Fotografera kvitton med appen och få dem automatiskt sparade och bokförda med rätt belopp och moms.",
    icon: defineComponent({
      render() {
        return h('svg', { 
          xmlns: 'http://www.w3.org/2000/svg', 
          viewBox: '0 0 24 24', 
          fill: 'none', 
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        }, [
          h('path', { d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2' }),
          h('path', { d: 'M18 14h-8' }),
          h('path', { d: 'M15 18h-5' }),
          h('path', { d: 'M10 6h8v4h-8V6Z' })
        ])
      }
    })
  },
  {
    title: "Molnbaserad lagring",
    description: "Alla dina ekonomiska data sparas säkert i molnet och är tillgängliga var som helst, när som helst.",
    icon: defineComponent({
      render() {
        return h('svg', { 
          xmlns: 'http://www.w3.org/2000/svg', 
          viewBox: '0 0 24 24', 
          fill: 'none', 
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        }, [
          h('path', { d: 'M17 21H7a4 4 0 0 1-4-4c0-1.64 1-3 2.44-3.56A4.5 4.5 0 0 1 9.5 9c0-.5.08-1 .22-1.47A5.5 5.5 0 0 1 20.56 12C22 12.56 23 14 23 16a4 4 0 0 1-4 4' }),
          h('line', { x1: '12', y1: '15', x2: '12', y2: '19' }),
          h('line', { x1: '16', y1: '17', x2: '8', y2: '17' })
        ])
      }
    })
  },
  {
    title: "Skatteförberedelser",
    description: "Förenkla din skattedeklaration med automatisk beräkning och exportering av all nödvändig data.",
    icon: defineComponent({
      render() {
        return h('svg', { 
          xmlns: 'http://www.w3.org/2000/svg', 
          viewBox: '0 0 24 24', 
          fill: 'none', 
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        }, [
          h('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' })
        ])
      }
    })
  }
]
</script>

<script>
import { h, defineComponent } from 'vue'
</script>

<style scoped>
.morphic-features {
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(145deg, #f1f5f9, #f8fafc);
  overflow: hidden;
}

.frost-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  filter: blur(70px);
}

.frost-circle-1 {
  width: 500px;
  height: 500px;
  top: -150px;
  right: -100px;
  background: linear-gradient(225deg, rgba(186, 230, 253, 0.4), rgba(103, 232, 249, 0.2));
}

.frost-circle-2 {
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -150px;
  background: linear-gradient(45deg, rgba(219, 234, 254, 0.4), rgba(191, 219, 254, 0.2));
}

.morphic-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  z-index: 2;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #0f172a, #1e40af);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.features-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  color: #64748b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
}

.feature-icon-wrapper {
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-radius: 20px;
}

.feature-icon {
  width: 40px;
  height: 40px;
  color: #3b82f6;
}

.feature-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #64748b;
}

@media (max-width: 768px) {
  .features-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 