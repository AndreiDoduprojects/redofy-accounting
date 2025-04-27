<template>
  <div>
    <section class="section hero-section">
      <div class="container">
        <h1 class="page-title">Features</h1>
        <p class="page-subtitle">Explore the powerful features of Redofy Accounting System</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="feature-item">
          <div class="feature-content">
            <h2>AI-Powered Accounting Automation</h2>
            <p>Our advanced AI algorithms automatically categorize transactions, match receipts, and reconcile accounts, saving you countless hours of manual work.</p>
            <ul class="feature-list">
              <li>Automatic transaction categorization</li>
              <li>Smart receipt matching</li>
              <li>Intelligent bank reconciliation</li>
              <li>Pattern recognition for recurring expenses</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="/img/feature-ai.png" alt="AI Accounting" />
          </div>
        </div>
        
        <div class="feature-item reverse">
          <div class="feature-content">
            <h2>Real-time Financial Dashboard</h2>
            <p>Get a complete overview of your financial health with our intuitive dashboard. Track cash flow, revenue, expenses, and profitability in real-time.</p>
            <ul class="feature-list">
              <li>Real-time financial metrics</li>
              <li>Customizable dashboard widgets</li>
              <li>Visual reports and charts</li>
              <li>Trend analysis and projections</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="/img/feature-dashboard.png" alt="Financial Dashboard" />
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-content">
            <h2>Mobile Receipt Management</h2>
            <p>Capture receipts on the go with our mobile app. Our OCR technology automatically extracts key information and categorizes expenses.</p>
            <ul class="feature-list">
              <li>Instant receipt capture</li>
              <li>Automatic data extraction</li>
              <li>Digital receipt storage</li>
              <li>Expense report generation</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="/img/feature-receipts.png" alt="Receipt Management" />
          </div>
        </div>
        
        <div class="feature-item reverse">
          <div class="feature-content">
            <h2>Integrated Invoicing System</h2>
            <p>Create, send, and track professional invoices directly from our platform. Automatic reminders ensure you get paid on time.</p>
            <ul class="feature-list">
              <li>Professional invoice templates</li>
              <li>Automated payment reminders</li>
              <li>Online payment acceptance</li>
              <li>Invoice tracking and analytics</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="/img/feature-invoicing.png" alt="Invoicing System" />
          </div>
        </div>
      </div>
    </section>
    
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to experience these features?</h2>
          <p>Start your free trial today and see how Redofy can transform your accounting process.</p>
          <div class="cta-buttons">
            <NuxtLink to="/signup" class="btn btn-primary">Start Free Trial</NuxtLink>
            <NuxtLink to="/demo" class="btn btn-secondary">Request a Demo</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background-color: var(--light-gray);
  text-align: center;
  padding: 4rem 0;
}

.page-title {
  margin-bottom: 1rem;
  font-size: 3rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--secondary-color);
  max-width: 700px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;
}

.feature-item.reverse {
  flex-direction: row-reverse;
}

.feature-content {
  flex: 1;
}

.feature-image {
  flex: 1;
}

.feature-image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-list {
  margin-top: 1.5rem;
  padding-left: 1.5rem;
}

.feature-list li {
  margin-bottom: 0.5rem;
}

.cta-section {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  margin-bottom: 1rem;
}

.cta-content p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.cta-section .btn-primary {
  background-color: white;
  color: var(--primary-color);
}

.cta-section .btn-primary:hover {
  background-color: #f0f0f0;
}

.cta-section .btn-secondary {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.cta-section .btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .feature-item, .feature-item.reverse {
    flex-direction: column;
    gap: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
}
</style> 