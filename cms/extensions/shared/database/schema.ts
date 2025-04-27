/**
 * Swedish accounting database schema definitions
 */

// BAS Account structure following Swedish standards
export interface BASAccount {
  id: number;
  accountNumber: string;
  name: string;
  category: string;
  type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
  vatCode?: string;
  sruCode?: string;
  isActive: boolean;
}

// Swedish accounting period (räkenskapsår)
export interface AccountingPeriod {
  id: number;
  startDate: Date;
  endDate: Date;
  isClosed: boolean;
  name: string;
  fiscalYear: number;
}

// Swedish VAT period (momsperiod)
export interface VATReturnPeriod {
  id: number;
  startDate: Date;
  endDate: Date;
  dueDate: Date;
  periodType: 'monthly' | 'quarterly' | 'yearly';
  status: 'pending' | 'submitted' | 'approved';
  submissionDate?: Date;
}

// Transaction record with Swedish accounting specifics
export interface Transaction {
  id: number;
  date: Date;
  description: string;
  verificationNumber: string;
  periodId: number;
  entries: JournalEntry[];
  attachments?: string[];
  createdBy: string;
  createdAt: Date;
  modifiedAt?: Date;
}

// Journal entry with VAT handling
export interface JournalEntry {
  id: number;
  transactionId: number;
  accountId: number;
  debit?: number;
  credit?: number;
  description?: string;
  vatCode?: string;
  vatAmount?: number;
  vatDate?: Date;
  reconciled: boolean;
}

// Swedish company information including organization number
export interface Company {
  id: number;
  name: string;
  organizationNumber: string; // Format: XXXXXX-XXXX
  vatNumber?: string; // Format: SE + organizationNumber01
  address: string;
  postalCode: string;
  city: string;
  phone?: string;
  email?: string;
  fiscalYearStart: { month: number; day: number };
  fiscalYearEnd: { month: number; day: number };
  taxRegistration: {
    employer: boolean;
    vat: boolean;
    fSkatt: boolean;
  };
}

// Map of default Swedish tax rates
export const SwedishVATRates = {
  STANDARD: 0.25,    // 25% standard rate
  REDUCED1: 0.12,    // 12% food, hotel, restaurant
  REDUCED2: 0.06,    // 6% books, newspapers, cultural events, public transport
  EXEMPT: 0,         // 0% exempt (exports, prescription medicine)
  REVERSE_CHARGE: 0  // Reverse charge (buyer pays VAT)
}; 