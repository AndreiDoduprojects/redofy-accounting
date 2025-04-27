<template>
  <div class="dashboard-home">
    <h1 class="page-title">Dashboard</h1>
    
    <div class="stats-cards">
      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <div class="stat-content">
          <div class="stat-value">38,492 kr</div>
          <div class="stat-label">Revenue this month</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-content">
          <div class="stat-value">24</div>
          <div class="stat-label">Open invoices</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-content">
          <div class="stat-value">18</div>
          <div class="stat-label">Active customers</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-content">
          <div class="stat-value">+12%</div>
          <div class="stat-label">Growth rate</div>
        </div>
      </div>
    </div>
    
    <div class="dashboard-section">
      <div class="section-header">
        <h2 class="section-title">Recent transactions</h2>
        <button class="view-all-btn">View all</button>
      </div>
      
      <div class="transaction-list">
        <div class="transaction-item">
          <div class="transaction-date">Apr 15, 2023</div>
          <div class="transaction-details">
            <div class="transaction-name">Website development</div>
            <div class="transaction-company">Acme Corp</div>
          </div>
          <div class="transaction-amount positive">+12,500 kr</div>
        </div>
        
        <div class="transaction-item">
          <div class="transaction-date">Apr 12, 2023</div>
          <div class="transaction-details">
            <div class="transaction-name">Office supplies</div>
            <div class="transaction-company">Office Store AB</div>
          </div>
          <div class="transaction-amount negative">-1,850 kr</div>
        </div>
        
        <div class="transaction-item">
          <div class="transaction-date">Apr 10, 2023</div>
          <div class="transaction-details">
            <div class="transaction-name">Consulting services</div>
            <div class="transaction-company">TechStart AB</div>
          </div>
          <div class="transaction-amount positive">+8,750 kr</div>
        </div>
        
        <div class="transaction-item">
          <div class="transaction-date">Apr 5, 2023</div>
          <div class="transaction-details">
            <div class="transaction-name">Software subscription</div>
            <div class="transaction-company">Adobe Inc.</div>
          </div>
          <div class="transaction-amount negative">-599 kr</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-home {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-color, #1e293b);
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color, #e2e8f0);
}

.stat-icon {
  font-size: 2rem;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color, #1e293b);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--light-text, #64748b);
}

.dashboard-section {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color, #e2e8f0);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color, #1e293b);
}

.view-all-btn {
  color: var(--primary-color, #0ea5e9);
  background: transparent;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
}

.transaction-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.transaction-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color, #e2e8f0);
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-date {
  width: 120px;
  font-size: 0.875rem;
  color: var(--light-text, #64748b);
}

.transaction-details {
  flex: 1;
}

.transaction-name {
  font-weight: 500;
  color: var(--text-color, #1e293b);
}

.transaction-company {
  font-size: 0.875rem;
  color: var(--light-text, #64748b);
}

.transaction-amount {
  font-weight: 600;
  font-size: 1.125rem;
}

.transaction-amount.positive {
  color: var(--success-color, #10b981);
}

.transaction-amount.negative {
  color: var(--error-color, #ef4444);
}

/* Dark mode adjustments */
:deep(.dark-mode) .stat-card,
:deep(.dark-mode) .dashboard-section {
  background-color: var(--background-color, #0f172a);
  border-color: var(--border-color, #334155);
}
</style> 