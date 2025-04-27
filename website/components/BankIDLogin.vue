<template>
  <div class="bankid-login">
    <div class="login-container">
      <div class="login-header">
        <div class="login-logo">
          <span class="brand-text">Redofy</span>
        </div>
        <h1>{{ loginMode ? 'Logga in med BankID' : 'Registrera med BankID' }}</h1>
        <p class="login-description">
          {{ loginMode ? 'Logga in säkert med ditt personnummer och BankID.' : 'Registrera ett nytt konto med BankID för att komma igång med Redofy.' }}
        </p>
      </div>
      
      <div class="login-content">
        <div v-if="step === 'initial'" class="login-form">
          <div class="form-group">
            <label for="personalNumber">Personnummer</label>
            <input 
              type="text" 
              id="personalNumber"
              v-model="personalNumber"
              placeholder="YYYYMMDD-XXXX"
              class="form-input text-center"
            />
            <p v-if="!isValidPersonalNumber && personalNumber.length > 0" class="error-message">
              Ange ett giltigt personnummer (YYYYMMDD-XXXX)
            </p>
          </div>
          
          <button @click="startAuthentication" class="btn btn-primary" :disabled="!isValidPersonalNumber">
            {{ loginMode ? 'Logga in' : 'Fortsätt' }}
          </button>
          
          <div class="switch-mode">
            <p>
              {{ loginMode ? 'Har du inget konto?' : 'Har du redan ett konto?' }}
              <a href="#" @click.prevent="switchMode">{{ loginMode ? 'Registrera dig' : 'Logga in' }}</a>
            </p>
          </div>
        </div>
        
        <div v-else-if="step === 'waiting'" class="waiting-container">
          <div class="bankid-spinner"></div>
          <p class="status-text">Väntar på BankID...</p>
          <p class="instruction">Öppna BankID-appen på din enhet och legitimera dig.</p>
          
          <!-- This is just for demo purposes -->
          <button @click="simulateSuccess" class="btn btn-secondary mt-4">
            Simulera framgångsrik {{ loginMode ? 'inloggning' : 'registrering' }}
          </button>
        </div>
        
        <div v-else-if="step === 'success'" class="success-container">
          <div class="success-icon">✓</div>
          <p class="status-text">{{ loginMode ? 'Inloggning lyckades!' : 'Registrering slutförd!' }}</p>
          <p>Omdirigerar till dashboard...</p>
        </div>
        
        <div v-else-if="step === 'error'" class="error-container">
          <div class="error-icon">✗</div>
          <p class="status-text">{{ errorMessage }}</p>
          <button @click="resetLogin" class="btn btn-secondary">
            Försök igen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  mode: {
    type: String,
    default: 'login',
    validator: (value) => ['login', 'register'].includes(value)
  }
});

const personalNumber = ref('');
const step = ref('initial');
const errorMessage = ref('');
const loginMode = ref(props.mode === 'login');

// Validate Swedish personal number format (YYYYMMDD-XXXX)
const isValidPersonalNumber = computed(() => {
  const regex = /^(19|20)\d{6}-\d{4}$/;
  return regex.test(personalNumber.value);
});

// Switch between login and register mode
function switchMode() {
  loginMode.value = !loginMode.value;
}

// Start BankID authentication flow
function startAuthentication() {
  if (!isValidPersonalNumber.value) {
    errorMessage.value = 'Ange ett giltigt personnummer';
    step.value = 'error';
    return;
  }
  
  // In a real implementation, this would call your backend API
  // to initiate the BankID authentication process
  step.value = 'waiting';
  
  // For demo, we can auto-succeed after a delay
  // setTimeout(simulateSuccess, 5000);
}

function simulateSuccess() {
  step.value = 'success';
  
  // In a real app, redirect to dashboard after successful login
  setTimeout(() => {
    window.location.href = '/dashboard';
  }, 2000);
}

function resetLogin() {
  step.value = 'initial';
  errorMessage.value = '';
}
</script>

<style scoped>
.bankid-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--light-gray);
}

.login-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  position: relative;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.brand-text {
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--primary-color);
}

.login-header h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.login-description {
  color: var(--secondary-color);
  font-size: 0.95rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group {
  margin-bottom: 1.5rem;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--secondary-color);
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-input:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 112, 210, 0.1);
}

.error-message {
  color: #e53e3e;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.btn {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0060b6;
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--secondary-color);
}

.btn-secondary:hover {
  background-color: var(--light-gray);
}

.switch-mode {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}

.switch-mode a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.switch-mode a:hover {
  text-decoration: underline;
}

.waiting-container,
.success-container,
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 0;
}

.status-text {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 1rem 0 0.5rem;
}

.instruction {
  color: var(--secondary-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.success-icon,
.error-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.success-icon {
  background-color: #d1fae5;
  color: #059669;
}

.error-icon {
  background-color: #fee2e2;
  color: #dc2626;
}

.bankid-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(0, 112, 210, 0.1);
  border-radius: 50%;
  border-left-color: var(--primary-color);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.mt-4 {
  margin-top: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .login-container {
    max-width: 90%;
    padding: 1.5rem;
  }
}
</style> 