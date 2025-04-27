<template>
  <div class="kontakt-formular">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Namn</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="form-control"
          placeholder="Ditt namn"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="email">E-post</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="form-control"
          placeholder="Din e-postadress"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="subject">Ämne</label>
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          class="form-control"
          placeholder="Vad handlar ditt meddelande om?"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="message">Meddelande</label>
        <textarea
          id="message"
          v-model="form.message"
          class="form-control"
          rows="5"
          placeholder="Skriv ditt meddelande här..."
          required
        ></textarea>
      </div>
      
      <div class="form-policy">
        <label class="checkbox-container">
          <input type="checkbox" v-model="form.acceptPolicy" required />
          <span class="checkmark"></span>
          <span class="checkbox-text">
            Jag godkänner <a href="/integritetspolicy">integritetspolicyn</a> och tillåter Redofy att kontakta mig
          </span>
        </label>
      </div>
      
      <div class="form-actions">
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Skickar...' : 'Skicka meddelande' }}
        </button>
      </div>
      
      <div v-if="submitSuccess" class="success-message">
        Tack för ditt meddelande! Vi återkommer så snart som möjligt.
      </div>
      
      <div v-if="submitError" class="error-message">
        {{ submitError }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  acceptPolicy: false
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(null)

const submitForm = async () => {
  isSubmitting.value = true
  submitError.value = null
  
  try {
    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form after successful submission
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    form.acceptPolicy = false
    
    submitSuccess.value = true
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    submitError.value = 'Ett fel uppstod när meddelandet skulle skickas. Försök igen senare.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.kontakt-formular {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #334155;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-control:focus {
  border-color: #0ea5e9;
  outline: none;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.form-policy {
  margin-bottom: 1.5rem;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #64748b;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #f8fafc;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #0ea5e9;
  border-color: #0ea5e9;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-text {
  line-height: 1.5;
}

.checkbox-text a {
  color: #0ea5e9;
  text-decoration: none;
}

.checkbox-text a:hover {
  text-decoration: underline;
}

.form-actions {
  display: flex;
  justify-content: flex-start;
}

.submit-button {
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #0284c7, #0ea5e9);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.25);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #dcfce7;
  color: #166534;
  border-radius: 0.375rem;
  font-weight: 500;
}

.error-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #fee2e2;
  color: #b91c1c;
  border-radius: 0.375rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .kontakt-formular {
    padding: 1.5rem;
  }
}
</style> 