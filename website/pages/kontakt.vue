<template>
  <div>
    <IsEffekt />
    <div class="page-content">
      <Navigering />
      <section class="contact-page">
        <div class="container">
          <div class="contact-header">
            <h1 class="contact-title">Kontakta oss</h1>
            <p class="contact-subtitle">Har du frågor eller vill veta mer om Redofy? Vi är här för att hjälpa dig.</p>
          </div>
          
          <div class="contact-wrapper">
            <div class="contact-info">
              <div class="info-card">
                <div class="card-header">
                  <h3>Besök oss</h3>
                </div>
                <div class="card-content">
                  <div class="info-item">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div class="details">
                      <h4>Huvudkontor</h4>
                      <p>Sveavägen 25<br>111 34 Stockholm</p>
                    </div>
                  </div>
                  
                  <div class="info-item">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div class="details">
                      <h4>Öppettider</h4>
                      <p>Måndag-Fredag: 09:00 - 17:00<br>Lördag-Söndag: Stängt</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="info-card">
                <div class="card-header">
                  <h3>Kontakta oss</h3>
                </div>
                <div class="card-content">
                  <div class="info-item">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div class="details">
                      <h4>Telefon</h4>
                      <p>+46 8 123 45 67</p>
                    </div>
                  </div>
                  
                  <div class="info-item">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div class="details">
                      <h4>E-post</h4>
                      <p>info@redofy.se</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="info-card">
                <div class="card-header">
                  <h3>Följ oss</h3>
                </div>
                <div class="card-content">
                  <div class="social-links">
                    <a href="#" class="social-link" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" class="social-link" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" class="social-link" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" class="social-link" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-form-container">
              <KontaktFormular />
            </div>
          </div>
          
          <div class="contact-map">
            <div class="map-container">
              <img src="/img/map.jpg" alt="Karta över vårt kontor" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Navigering from '~/components/svensk/Navigering.vue'
import KontaktFormular from '~/components/svensk/KontaktFormular.vue'
import IsEffekt from '~/components/svensk/IsEffekt.vue'
</script>

<style scoped>
.contact-page {
  padding: 8rem 0 6rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.card-header {
  background: linear-gradient(to right, #0284c7, #0ea5e9);
  padding: 1.5rem;
}

.card-header h3 {
  color: white;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.card-content {
  padding: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.icon {
  color: #0284c7;
  flex-shrink: 0;
}

.details h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #0f172a;
}

.details p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8fafc;
  color: #0284c7;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #0284c7;
  color: white;
  transform: translateY(-3px);
}

.contact-form-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.contact-map {
  margin-top: 4rem;
}

.map-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: 400px;
}

.map-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
  
  .contact-page {
    padding: 6rem 0 4rem;
  }
  
  .contact-title {
    font-size: 2rem;
  }
  
  .map-container {
    height: 300px;
  }
}
</style> 