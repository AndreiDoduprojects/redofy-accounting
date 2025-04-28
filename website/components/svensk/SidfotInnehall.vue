<template>
  <footer class="sidfot">
    <div class="sidfot-innehall morphic-container">
      <div class="sidfot-huvuddel">
        <div class="sidfot-info">
          <NuxtLink to="/sv" class="sidfot-logo">
            <img src="~/assets/images/redofy-logo.svg" alt="Redofy Logotyp" />
          </NuxtLink>
          <p class="sidfot-slogan">Modernt bokföringsprogram för företag och enskilda firmor</p>
          
          <div class="sidfot-sociala">
            <a href="https://twitter.com/redofy" target="_blank" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/redofy" target="_blank" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.facebook.com/redofy" target="_blank" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
        
        <div class="sidfot-lankar">
          <div class="sidfot-lankgrupp">
            <h4>Produkt</h4>
            <NuxtLink to="/sv/bokforing">Bokföring</NuxtLink>
            <NuxtLink to="/sv/fakturering">Fakturering</NuxtLink>
            <NuxtLink to="/sv/leverantorsfakturor">Leverantörsfakturor</NuxtLink>
            <NuxtLink to="/sv/utgifter">Utgiftshantering</NuxtLink>
            <NuxtLink to="/sv/rapporter">Rapporter & Insikter</NuxtLink>
          </div>
          
          <div class="sidfot-lankgrupp">
            <h4>Företag</h4>
            <NuxtLink to="/sv/om-oss">Om oss</NuxtLink>
            <NuxtLink to="/sv/karriar">Karriär</NuxtLink>
            <NuxtLink to="/sv/kundcase">Kundcase</NuxtLink>
            <NuxtLink to="/sv/partners">Partners</NuxtLink>
            <NuxtLink to="/sv/pressrum">Pressrum</NuxtLink>
          </div>
          
          <div class="sidfot-lankgrupp">
            <h4>Resurser</h4>
            <NuxtLink to="/sv/blogg">Blogg</NuxtLink>
            <NuxtLink to="/sv/support">Support</NuxtLink>
            <NuxtLink to="/sv/utbildningar">Utbildningar</NuxtLink>
            <NuxtLink to="/sv/dokumentation">Dokumentation</NuxtLink>
            <NuxtLink to="/sv/api">API</NuxtLink>
          </div>
          
          <div class="sidfot-lankgrupp">
            <h4>Kontakt</h4>
            <a href="mailto:info@redofy.se">info@redofy.se</a>
            <a href="tel:+46701234567">+46 70 123 45 67</a>
            <address>
              Redofy AB<br>
              Kungsgatan 12<br>
              111 35 Stockholm
            </address>
          </div>
        </div>
      </div>
      
      <div class="sidfot-underdel">
        <div class="sidfot-copyright">
          &copy; {{ new Date().getFullYear() }} Redofy AB. Alla rättigheter förbehållna.
        </div>
        
        <div class="sidfot-juridik">
          <NuxtLink to="/sv/integritetspolicy">Integritetspolicy</NuxtLink>
          <NuxtLink to="/sv/anvandarvillkor">Användarvillkor</NuxtLink>
          <NuxtLink to="/sv/cookies">Cookies</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Script setup section is intentionally left minimal
</script>

<style scoped>
.sidfot {
  background-color: white;
  color: #0f172a;
  padding: 60px 0 30px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--morphic-border-light);
}

.dark-mode .sidfot {
  background-color: #1e293b;
  color: #f8fafc;
}

.sidfot-innehall {
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  z-index: 2;
}

.sidfot-huvuddel {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.sidfot-info {
  flex: 1;
  min-width: 240px;
  max-width: 360px;
}

.sidfot-logo img {
  height: 32px;
  margin-bottom: 16px;
}

.sidfot-slogan {
  color: #475569;
  margin-bottom: 20px;
  font-size: 14px;
  max-width: 320px;
  line-height: 1.6;
}

.dark-mode .sidfot-slogan {
  color: #94a3b8;
}

.sidfot-sociala {
  display: flex;
  gap: 16px;
}

.sidfot-sociala a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--morphic-bg-primary);
  color: var(--morphic-text-light);
  transition: all 0.2s ease;
}

.sidfot-sociala a:hover {
  background-color: var(--morphic-primary-color);
  color: white;
  transform: translateY(-2px);
}

.sidfot-lankar {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.sidfot-lankgrupp {
  flex: 1;
  min-width: 140px;
}

.sidfot-lankgrupp h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #0f172a;
}

.dark-mode .sidfot-lankgrupp h4 {
  color: #f8fafc;
}

.sidfot-lankgrupp a, .sidfot-lankgrupp address {
  display: block;
  margin-bottom: 10px;
  color: #475569;
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  transition: color 0.2s ease;
  line-height: 1.6;
}

.dark-mode .sidfot-lankgrupp a, 
.dark-mode .sidfot-lankgrupp address {
  color: #94a3b8;
}

.sidfot-lankgrupp a:hover {
  color: var(--morphic-primary-color);
}

.sidfot-underdel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
  font-size: 14px;
  color: #64748b;
}

.dark-mode .sidfot-underdel {
  border-top-color: #334155;
  color: #94a3b8;
}

.sidfot-juridik {
  display: flex;
  gap: 20px;
}

.sidfot-juridik a {
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s ease;
}

.dark-mode .sidfot-juridik a {
  color: #94a3b8;
}

.sidfot-juridik a:hover {
  color: var(--morphic-primary-color);
}

.sidfot:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('~/assets/images/pattern-dots.svg');
  background-size: 50px;
  opacity: 0.08;
  z-index: 1;
}

.dark-mode .sidfot:after {
  opacity: 0.1;
}

@media (max-width: 768px) {
  .sidfot {
    padding: 40px 0 20px;
  }
  
  .sidfot-huvuddel {
    flex-direction: column;
    gap: 30px;
  }
  
  .sidfot-lankgrupp {
    min-width: 45%;
  }
  
  .sidfot-underdel {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .sidfot-juridik {
    justify-content: center;
  }
}
</style> 