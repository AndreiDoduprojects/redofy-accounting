<template>
  <section class="morphic-cta-section">
    <div class="morphic-container">
      <div class="cta-content">
        <h2 class="cta-title">Redo att revolutionera din redovisning?</h2>
        <p class="cta-description">Börja din resa mot enklare och smartare redovisning idag.</p>
        <div class="cta-buttons">
          <button class="btn-primary">Skapa konto</button>
          <button class="btn-secondary">Boka demo</button>
        </div>
      </div>
      
      <div class="cta-image">
        <div class="frost-circle"></div>
        <div class="frost-circle"></div>
        <div class="frost-circle"></div>
        <img src="/img/illustrations/accounting-dashboard.svg" alt="Redofy Dashboard" />
      </div>
    </div>
  </section>
</template>

<script setup>
// CTA section component
</script>

<style scoped>
.morphic-cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #0a2540 0%, #1e3a8a 100%);
  position: relative;
  overflow: hidden;
}

.morphic-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.cta-content {
  color: white;
  position: relative;
  z-index: 2;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #93c5fd);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.cta-description {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  color: #e5e7eb;
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  padding: 1rem 2rem;
  background: linear-gradient(to right, #60a5fa, #3b82f6);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.5);
}

.btn-secondary {
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  border: 2px solid #60a5fa;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(96, 165, 250, 0.1);
}

.cta-image {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-image img {
  width: 100%;
  max-width: 450px;
  height: auto;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
  position: relative;
  z-index: 2;
}

.frost-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  z-index: 1;
}

.frost-circle:nth-child(1) {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -50px;
}

.frost-circle:nth-child(2) {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: 50px;
}

.frost-circle:nth-child(3) {
  width: 150px;
  height: 150px;
  top: 50px;
  left: -30px;
}

@media (max-width: 768px) {
  .morphic-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .cta-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .cta-image {
    grid-row: 1;
    margin-bottom: 2rem;
  }
  
  .cta-content {
    grid-row: 2;
  }
  
  .cta-title {
    font-size: 2rem;
  }
}
</style> 