<template>
  <div>
    <IceBackground />
    <div class="page-content">
      <SvenskNavbar />
      <section class="login-section">
        <div class="container">
          <div class="login-container">
            <div class="login-card">
              <div class="login-header">
                <h1 class="login-title">Logga in</h1>
                <p class="login-subtitle">Logga in på ditt Redofy-konto</p>
              </div>
              
              <form @submit.prevent="handleLogin" class="login-form">
                <div class="form-group">
                  <label for="email">E-postadress</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="email" 
                    placeholder="din.epost@exempel.se"
                    required
                    :class="{ 'error': errors.email }"
                  >
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
                
                <div class="form-group">
                  <div class="password-label">
                    <label for="password">Lösenord</label>
                    <NuxtLink to="/glomt-losenord" class="forgot-password">Glömt lösenord?</NuxtLink>
                  </div>
                  <div class="password-input">
                    <input 
                      :type="showPassword ? 'text' : 'password'" 
                      id="password" 
                      v-model="password" 
                      placeholder="Ditt lösenord"
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
                
                <div class="form-group remember-me">
                  <div class="checkbox-wrapper">
                    <input type="checkbox" id="remember" v-model="rememberMe">
                    <label for="remember">Kom ihåg mig</label>
                  </div>
                </div>
                
                <button type="submit" class="login-button" :disabled="isLoading">
                  <span v-if="!isLoading">Logga in</span>
                  <span v-else class="loading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    Loggar in...
                  </span>
                </button>
                
                <div class="login-divider">
                  <span>eller</span>
                </div>
                
                <div class="social-login">
                  <button type="button" class="social-button google">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
                    </svg>
                    Logga in med Google
                  </button>
                  
                  <button type="button" class="social-button microsoft">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 23 23">
                      <path fill="#f35325" d="M1 1h10v10H1z"/>
                      <path fill="#81bc06" d="M12 1h10v10H12z"/>
                      <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                      <path fill="#ffba08" d="M12 12h10v10H12z"/>
                    </svg>
                    Logga in med Microsoft
                  </button>
                </div>
              </form>
              
              <div class="login-footer">
                <p>Har du inget konto? <NuxtLink to="/registrera" class="signup-link">Skapa konto</NuxtLink></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const isLoading = ref(false)

const errors = reactive({
  email: '',
  password: ''
})

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  errors.email = ''
  errors.password = ''
  
  // Validate email
  if (!email.value.trim()) {
    errors.email = 'E-postadressen är obligatorisk'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email = 'Ange en giltig e-postadress'
    isValid = false
  }
  
  // Validate password
  if (!password.value) {
    errors.password = 'Lösenordet är obligatoriskt'
    isValid = false
  } else if (password.value.length < 6) {
    errors.password = 'Lösenordet måste vara minst 6 tecken'
    isValid = false
  }
  
  return isValid
}

const handleLogin = async () => {
  if (!validateForm()) return
  
  isLoading.value = true
  
  try {
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Normally you would call your auth service here
    // await authService.login(email.value, password.value, rememberMe.value)
    
    // Redirect to dashboard after successful login
    // navigateTo('/dashboard')
    
    console.log('Logged in with:', { email: email.value, password: password.value, rememberMe: rememberMe.value })
  } catch (error) {
    console.error('Login error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-section {
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

.login-container {
  max-width: 480px;
  margin: 0 auto;
}

.login-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.login-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #0284c7, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.login-subtitle {
  color: #64748b;
  font-size: 1.1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.95rem;
  font-weight: 500;
  color: #334155;
}

input[type="email"],
input[type="password"],
input[type="text"] {
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

.forgot-password {
  font-size: 0.85rem;
  color: #0284c7;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
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

.remember-me {
  margin-top: -0.5rem;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-wrapper label {
  font-size: 0.9rem;
  color: #64748b;
}

.login-button {
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

.login-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(2, 132, 199, 0.2);
}

.login-button:disabled {
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

.login-divider {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: #94a3b8;
  font-size: 0.9rem;
}

.login-divider::before,
.login-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

.login-divider span {
  padding: 0 1rem;
}

.social-login {
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

.login-footer {
  margin-top: 2rem;
  text-align: center;
  color: #64748b;
  font-size: 0.95rem;
}

.signup-link {
  color: #0284c7;
  font-weight: 500;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .login-card {
    padding: 2rem;
  }
  
  .login-title {
    font-size: 1.75rem;
  }
  
  .login-section {
    padding: 6rem 0 4rem;
  }
}
</style> 