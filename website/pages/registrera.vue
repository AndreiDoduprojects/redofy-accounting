<template>
  <div>
    <IceBackground />
    <div class="page-content">
      <SvenskNavbar />
      <section class="register-section">
        <div class="container">
          <div class="register-container">
            <div class="register-card">
              <div class="register-header">
                <h1 class="register-title">Skapa konto</h1>
                <p class="register-subtitle">Kom igång med Redofy idag</p>
              </div>
              
              <form @submit.prevent="handleRegister" class="register-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="firstName">Förnamn</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      v-model="formData.firstName" 
                      placeholder="Ditt förnamn"
                      required
                      :class="{ 'error': errors.firstName }"
                    >
                    <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                  </div>
                  
                  <div class="form-group">
                    <label for="lastName">Efternamn</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      v-model="formData.lastName" 
                      placeholder="Ditt efternamn"
                      required
                      :class="{ 'error': errors.lastName }"
                    >
                    <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email">E-postadress</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email" 
                    placeholder="din.epost@exempel.se"
                    required
                    :class="{ 'error': errors.email }"
                  >
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
                
                <div class="form-group">
                  <label for="company">Företagsnamn</label>
                  <input 
                    type="text" 
                    id="company" 
                    v-model="formData.company" 
                    placeholder="Ditt företag AB"
                    required
                    :class="{ 'error': errors.company }"
                  >
                  <span v-if="errors.company" class="error-message">{{ errors.company }}</span>
                </div>
                
                <div class="form-group">
                  <div class="password-label">
                    <label for="password">Lösenord</label>
                  </div>
                  <div class="password-input">
                    <input 
                      :type="showPassword ? 'text' : 'password'" 
                      id="password" 
                      v-model="formData.password" 
                      placeholder="Minst 8 tecken"
                      required
                      :class="{ 'error': errors.password }"
                    >
                    <button 
                      type="button" 
                      class="toggle-password" 
                      @click="showPassword = !showPassword"
                      :aria-label="showPassword ? 'Dölj lösenord' : 'Visa lösenord'"
                    >
                      <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    </button>
                  </div>
                  <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
                </div>
                
                <div class="form-group consent">
                  <input type="checkbox" id="terms" v-model="formData.terms" required>
                  <label for="terms">
                    Jag godkänner <a href="/terms">användarvillkoren</a> och <a href="/privacy">integritetspolicyn</a>
                  </label>
                  <span v-if="errors.terms" class="error-message">{{ errors.terms }}</span>
                </div>
                
                <button type="submit" class="register-button" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">Skapa konto</span>
                  <span v-else class="loading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    Skapar konto...
                  </span>
                </button>
                
                <div class="register-divider">
                  <span>eller</span>
                </div>
                
                <div class="social-register">
                  <button type="button" class="social-button google">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
                    </svg>
                    Registrera med Google
                  </button>
                  
                  <button type="button" class="social-button microsoft">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 23 23">
                      <path fill="#f35325" d="M1 1h10v10H1z"/>
                      <path fill="#81bc06" d="M12 1h10v10H12z"/>
                      <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                      <path fill="#ffba08" d="M12 12h10v10H12z"/>
                    </svg>
                    Registrera med Microsoft
                  </button>
                </div>
              </form>
              
              <div class="register-footer">
                <p>Har du redan ett konto? <NuxtLink to="/logga-in" class="login-link">Logga in</NuxtLink></p>
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

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  password: '',
  terms: false
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  password: '',
  terms: ''
})

const isSubmitting = ref(false)
const showPassword = ref(false)

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
  
  if (!formData.firstName.trim()) {
    errors.firstName = 'Förnamn är obligatoriskt'
    isValid = false
  }
  
  if (!formData.lastName.trim()) {
    errors.lastName = 'Efternamn är obligatoriskt'
    isValid = false
  }
  
  if (!formData.email.trim()) {
    errors.email = 'E-post är obligatoriskt'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Ange en giltig e-postadress'
    isValid = false
  }
  
  if (!formData.company.trim()) {
    errors.company = 'Företagsnamn är obligatoriskt'
    isValid = false
  }
  
  if (!formData.password) {
    errors.password = 'Lösenord är obligatoriskt'
    isValid = false
  } else if (formData.password.length < 8) {
    errors.password = 'Lösenordet måste vara minst 8 tecken'
    isValid = false
  }
  
  if (!formData.terms) {
    errors.terms = 'Du måste godkänna våra villkor'
    isValid = false
  }
  
  return isValid
}

const handleRegister = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Normally you would call your auth service here
    // await authService.register(formData)
    
    console.log('Registered user:', formData)
    
    // Redirect to dashboard or welcome page after successful registration
    // navigateTo('/welcome')
  } catch (error) {
    console.error('Registration error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.register-section {
  padding: 8rem 0 6rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.register-container {
  max-width: 550px;
  margin: 0 auto;
}

.register-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}

.register-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.register-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.register-subtitle {
  color: #64748b;
  font-size: 1.1rem;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
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
input[type="password"] {
  padding: 0.9rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f8fafc;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #0284c7;
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
  background-color: white;
}

input.error {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.error-message {
  color: #ef4444;
  font-size: 0.85rem;
}

.password-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
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
}

.form-group.consent a {
  color: #0284c7;
  text-decoration: none;
}

.form-group.consent a:hover {
  text-decoration: underline;
}

.register-button {
  padding: 0.9rem 1.5rem;
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
  gap: 0.5rem;
}

.register-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(2, 132, 199, 0.2);
}

.register-button:disabled {
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

.register-divider {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: #94a3b8;
  font-size: 0.9rem;
}

.register-divider::before,
.register-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

.register-divider span {
  padding: 0 1rem;
}

.social-register {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-button {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  background: white;
  color: #334155;
}

.social-button:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

.register-footer {
  margin-top: 2rem;
  text-align: center;
  color: #64748b;
  font-size: 0.95rem;
}

.login-link {
  color: #0284c7;
  font-weight: 500;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .register-card {
    padding: 2rem;
  }
  
  .register-title {
    font-size: 1.75rem;
  }
  
  .register-section {
    padding: 6rem 0 4rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style> 