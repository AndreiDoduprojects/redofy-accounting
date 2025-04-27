<template>
  <div>
    <IsEffekt />
    <div class="page-content">
      <Navigering />
      <Prisplaner />
      <section class="pricing-faq-section">
        <div class="container">
          <h2 class="faq-title">Vanliga frågor om våra priser</h2>
          
          <div class="faq-grid">
            <div class="faq-item">
              <div class="faq-question" @click="toggleFaq(1)">
                <h3>Finns det en kostnadsfri testperiod?</h3>
                <div class="faq-icon" :class="{ 'active': activeFaq === 1 }">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12" class="vertical"></line>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'active': activeFaq === 1 }">
                <p>Ja, du kan prova Redofy kostnadsfritt i 14 dagar utan kreditkort. Du får tillgång till alla funktioner och kan testa hur plattformen fungerar för ditt företag innan du bestämmer dig.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question" @click="toggleFaq(2)">
                <h3>Kan jag byta plan senare?</h3>
                <div class="faq-icon" :class="{ 'active': activeFaq === 2 }">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12" class="vertical"></line>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'active': activeFaq === 2 }">
                <p>Absolut! Du kan när som helst uppgradera eller nedgradera din plan efter dina behov. Uppgradering träder i kraft direkt, medan nedgradering gäller från nästa betalningsperiod.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question" @click="toggleFaq(3)">
                <h3>Tillkommer några dolda avgifter?</h3>
                <div class="faq-icon" :class="{ 'active': activeFaq === 3 }">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12" class="vertical"></line>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'active': activeFaq === 3 }">
                <p>Nej, vi tror på transparent prissättning. Det pris du ser är det pris du betalar. Vi har inga dolda avgifter eller överraskningar. Alla funktioner inom din valda plan ingår i det angivna priset.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question" @click="toggleFaq(4)">
                <h3>Vad händer om jag överskrider min transaktionsgräns?</h3>
                <div class="faq-icon" :class="{ 'active': activeFaq === 4 }">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12" class="vertical"></line>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'active': activeFaq === 4 }">
                <p>Om du närmar dig transaktionsgränsen för din plan, får du en notifiering där vi rekommenderar att uppgradera. Om du överskrider gränsen tillfälligt, fortsätter systemet att fungera, men vi kontaktar dig för att diskutera en plan som bättre matchar dina behov.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question" @click="toggleFaq(5)">
                <h3>Kan jag få hjälp med att komma igång?</h3>
                <div class="faq-icon" :class="{ 'active': activeFaq === 5 }">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12" class="vertical"></line>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'active': activeFaq === 5 }">
                <p>Ja, alla nya kunder får tillgång till vårt onboardingprogram som inkluderar personlig support vid uppsättning, utbildningsmaterial och stöd för att migrera från ditt tidigare system. Beroende på din plan ingår även personliga sessioner med våra redovisningsexperter.</p>
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question" @click="toggleFaq(6)">
                <h3>Kan jag avsluta mitt abonnemang när som helst?</h3>
                <div class="faq-icon" :class="{ 'active': activeFaq === 6 }">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12" class="vertical"></line>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'active': activeFaq === 6 }">
                <p>Ja, du kan avsluta ditt abonnemang när som helst. Vi har ingen bindningstid. Om du avslutar mitt i en betalningsperiod, har du fortsatt tillgång till Redofy till slutet av den betalda perioden. Vi erbjuder även en exportfunktion så att du enkelt kan ta med dig dina data.</p>
              </div>
            </div>
          </div>
          
          <div class="contact-cta">
            <p>Har du andra frågor om våra priser eller behöver en anpassad lösning?</p>
            <NuxtLink to="/kontakt" class="contact-button">Kontakta oss</NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navigering from '~/components/svensk/Navigering.vue'
import Prisplaner from '~/components/svensk/Prisplaner.vue'
import IsEffekt from '~/components/svensk/IsEffekt.vue'

const activeFaq = ref(null)

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null
  } else {
    activeFaq.value = index
  }
}
</script>

<style scoped>
.pricing-faq-section {
  padding: 5rem 0 6rem;
  background: linear-gradient(to bottom, #f8fafc, #f0f9ff);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.faq-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.faq-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
}

.faq-icon {
  color: #0284c7;
  transition: all 0.3s ease;
}

.faq-icon .vertical {
  transition: all 0.3s ease;
}

.faq-icon.active .vertical {
  transform: scaleY(0);
}

.faq-answer {
  padding: 0 1.5rem;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.faq-answer.active {
  padding: 0 1.5rem 1.5rem;
  height: auto;
  opacity: 1;
}

.faq-answer p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
}

.contact-cta {
  text-align: center;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.contact-cta p {
  font-size: 1.2rem;
  color: #334155;
  margin-bottom: 1.5rem;
}

.contact-button {
  display: inline-block;
  padding: 0.9rem 2rem;
  background: linear-gradient(to right, #0284c7, #0ea5e9);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(2, 132, 199, 0.25);
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .faq-title {
    font-size: 2rem;
  }
  
  .contact-cta {
    padding: 2rem;
  }
}
</style> 