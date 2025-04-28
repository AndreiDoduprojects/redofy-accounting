<template>
  <div>
    <IceBackground />
    <div class="page-content">
      <SvenskNavbar />
      <section class="demo-section">
        <div class="container">
          <div class="demo-header">
            <h1 class="demo-title">Boka en personlig demo</h1>
            <p class="demo-subtitle">Se hur Redofy kan förenkla din redovisning och ekonomihantering</p>
          </div>
          
          <div class="demo-content">
            <div class="demo-form-wrapper">
              <form @submit.prevent="handleSubmit" class="demo-form">
                <div class="form-header">
                  <h3>Berätta om ditt företag</h3>
                </div>
                
                <div class="form-group">
                  <label for="name">Ditt namn</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    :class="{ 'error': errors.name }"
                    placeholder="Förnamn Efternamn"
                    required
                  >
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>
                
                <div class="form-group">
                  <label for="email">E-postadress</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    :class="{ 'error': errors.email }"
                    placeholder="din.epost@exempel.se"
                    required
                  >
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
                
                <div class="form-group">
                  <label for="phone">Telefonnummer</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    :class="{ 'error': errors.phone }"
                    placeholder="070-123 45 67"
                  >
                  <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
                </div>
                
                <div class="form-group">
                  <label for="company">Företagsnamn</label>
                  <input 
                    type="text" 
                    id="company" 
                    v-model="form.company" 
                    :class="{ 'error': errors.company }"
                    placeholder="Ditt företag AB"
                    required
                  >
                  <span v-if="errors.company" class="error-message">{{ errors.company }}</span>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="size">Företagsstorlek</label>
                    <select 
                      id="size" 
                      v-model="form.size" 
                      :class="{ 'error': errors.size }"
                      required
                    >
                      <option value="" disabled selected>Välj antal anställda</option>
                      <option value="1">Endast jag</option>
                      <option value="2-10">2-10 anställda</option>
                      <option value="11-50">11-50 anställda</option>
                      <option value="51-200">51-200 anställda</option>
                      <option value="201+">201+ anställda</option>
                    </select>
                    <span v-if="errors.size" class="error-message">{{ errors.size }}</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="industry">Bransch</label>
                    <select 
                      id="industry" 
                      v-model="form.industry" 
                      :class="{ 'error': errors.industry }"
                      required
                    >
                      <option value="" disabled selected>Välj bransch</option>
                      <option value="retail">Detaljhandel</option>
                      <option value="tech">Tech & IT</option>
                      <option value="service">Tjänsteföretag</option>
                      <option value="manufacturing">Tillverkning</option>
                      <option value="construction">Bygg & Anläggning</option>
                      <option value="healthcare">Vård & Omsorg</option>
                      <option value="other">Annan</option>
                    </select>
                    <span v-if="errors.industry" class="error-message">{{ errors.industry }}</span>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="message">Berätta mer om dina behov (valfritt)</label>
                  <textarea 
                    id="message" 
                    v-model="form.message" 
                    rows="4"
                    placeholder="Beskriv kort vad du är intresserad av att veta mer om..."
                  ></textarea>
                </div>
                
                <div class="form-group consent">
                  <input type="checkbox" id="consent" v-model="form.consent" required>
                  <label for="consent">
                    Jag godkänner att Redofy kontaktar mig och behandlar mina uppgifter enligt <a href="/privacy">integritetspolicyn</a>
                  </label>
                  <span v-if="errors.consent" class="error-message">{{ errors.consent }}</span>
                </div>
                
                <button 
                  type="submit" 
                  class="submit-button" 
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting">Boka demo</span>
                  <span v-else class="loading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    Skickar...
                  </span>
                </button>
                
                <div v-if="submitStatus.message" :class="`status-message ${submitStatus.type}`">
                  {{ submitStatus.message }}
                </div>
              </form>
            </div>
            
            <div class="demo-info">
              <div class="info-card">
                <h3>Vad du kan förvänta dig</h3>
                <ul class="info-list">
                  <li>
                    <div class="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div class="info-text">
                      <strong>30 minuters personlig demo</strong>
                      <p>Anpassad efter just dina behov och utmaningar</p>
                    </div>
                  </li>
                  <li>
                    <div class="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div class="info-text">
                      <strong>Säker och konfidentiell</strong>
                      <p>Vi respekterar din integritet och all information hanteras konfidentiellt</p>
                    </div>
                  </li>
                  <li>
                    <div class="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                      </svg>
                    </div>
                    <div class="info-text">
                      <strong>Expertis och rådgivning</strong>
                      <p>Våra redovisningsexperter hjälper dig förstå hur Redofy kan optimera din verksamhet</p>
                    </div>
                  </li>
                  <li>
                    <div class="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div class="info-text">
                      <strong>Inga förpliktelser</strong>
                      <p>Demon är helt kostnadsfri och utan krav på framtida åtaganden</p>
                    </div>
                  </li>
                </ul>
                
                <div class="info-testimonial">
                  <blockquote>
                    "Demon gav oss precis den inblick vi behövde för att fatta beslut om att gå vidare med Redofy. Idag sparar vi mer än 15 timmar varje vecka på vår ekonomihantering."
                  </blockquote>
                  <div class="testimonial-author">
                    <img src="/img/avatars/maria.jpg" alt="Maria Andersson" />
                    <div>
                      <strong>Maria Andersson</strong>
                      <span>Ekonomichef, TechStart AB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  size: '',
  industry: '',
  message: '',
  consent: false
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  size: '',
  industry: '',
  consent: ''
})

const isSubmitting = ref(false)
const submitStatus = reactive({
  message: '',
  type: ''
})

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
  
  if (!form.name.trim()) {
    errors.name = 'Namn är obligatoriskt'
    isValid = false
  }
  
  if (!form.email.trim()) {
    errors.email = 'E-post är obligatoriskt'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Ange en giltig e-postadress'
    isValid = false
  }
  
  if (form.phone && !/^[0-9\s\-\+]{7,15}$/.test(form.phone)) {
    errors.phone = 'Ange ett giltigt telefonnummer'
    isValid = false
  }
  
  if (!form.company.trim()) {
    errors.company = 'Företagsnamn är obligatoriskt'
    isValid = false
  }
  
  if (!form.size) {
    errors.size = 'Välj företagsstorlek'
    isValid = false
  }
  
  if (!form.industry) {
    errors.industry = 'Välj bransch'
    isValid = false
  }
  
  if (!form.consent) {
    errors.consent = 'Du måste godkänna villkoren'
    isValid = false
  }
  
  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  submitStatus.message = ''
  
  try {
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form after successful submission
    Object.keys(form).forEach(key => {
      if (key !== 'consent') form[key] = ''
    })
    form.consent = false
    
    submitStatus.message = 'Tack för din förfrågan! Vi kontaktar dig inom kort för att boka en tid för din demo.'
    submitStatus.type = 'success'
  } catch (error) {
    console.error('Error submitting form:', error)
    submitStatus.message = 'Ett fel uppstod. Försök igen senare eller kontakta oss direkt via telefon.'
    submitStatus.type = 'error'
  } finally {
    isSubmitting.value = false
    
    // Scroll to status message
    setTimeout(() => {
      document.querySelector('.status-message')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }
}
</script>

<style scoped>
.demo-section {
  padding: 8rem 0 6rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
}

.demo-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.demo-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
}

.demo-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  align-items: start;
}

.demo-form-wrapper {
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
  overflow: hidden;
}

.demo-form {
  padding: 2.5rem;
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #334155;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
  padding: 0.9rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f8fafc;
  transition: all 0.3s ease;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #0284c7;
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
  background-color: white;
}

input.error,
select.error,
textarea.error {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.error-message {
  color: #ef4444;
  font-size: 0.85rem;
}

.form-group.consent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
}

.form-group.consent input {
  margin-top: 0.25rem;
}

.form-group.consent label {
  font-size: 0.85rem;
  color: #64748b;
  flex: 1;
}

.form-group.consent a {
  color: #0284c7;
  text-decoration: none;
}

.form-group.consent a:hover {
  text-decoration: underline;
}

.submit-button {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #0284c7, #0ea5e9);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(2, 132, 199, 0.2);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner {
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.status-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.status-message.success {
  background-color: #dcfce7;
  color: #166534;
}

.status-message.error {
  background-color: #fee2e2;
  color: #b91c1c;
}

.demo-info {
  position: sticky;
  top: 2rem;
}

.info-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
}

.info-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1.5rem;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-list li {
  display: flex;
  gap: 1rem;
}

.info-icon {
  color: #0284c7;
  flex-shrink: 0;
  background: rgba(2, 132, 199, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-text strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #0f172a;
}

.info-text p {
  margin: 0;
  color: #64748b;
  font-size: 0.95rem;
}

.info-testimonial {
  background: #f1f5f9;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.info-testimonial blockquote {
  margin: 0 0 1.5rem 0;
  font-style: italic;
  color: #334155;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-author img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-author div {
  display: flex;
  flex-direction: column;
}

.testimonial-author strong {
  color: #0f172a;
  font-size: 0.95rem;
}

.testimonial-author span {
  color: #64748b;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .demo-content {
    grid-template-columns: 1fr;
  }
  
  .demo-info {
    position: static;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .demo-section {
    padding: 6rem 0 4rem;
  }
  
  .demo-title {
    font-size: 2rem;
  }
  
  .demo-form {
    padding: 2rem;
  }
}
</style> 