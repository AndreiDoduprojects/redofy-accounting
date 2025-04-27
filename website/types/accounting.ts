export interface Verifikation {
  verifikationsnummer: string;
  belopp: number;
  moms_kod: string;
  datum: string;
  beskrivning: string;
  kontonummer: string;
  created_at?: string;
  updated_at?: string;
}

export interface MomsKod {
  kod: string;
  procentsats: number;
  beskrivning: string;
}

export const MOMS_KODER: Record<string, MomsKod> = {
  '25%': { kod: '01', procentsats: 0.25, beskrivning: 'Standard moms' },
  '12%': { kod: '02', procentsats: 0.12, beskrivning: 'Reducerad moms (livsmedel, hotell)' },
  '6%': { kod: '03', procentsats: 0.06, beskrivning: 'Reducerad moms (böcker, kultur)' },
};

export interface AGISettings {
  fullRate: number; // 31.42%
  reducedRate: number; // 10.21%
  useReducedRate: boolean;
}

export const DEFAULT_AGI_SETTINGS: AGISettings = {
  fullRate: 0.3142,
  reducedRate: 0.1021,
  useReducedRate: false,
};

export interface AIPrompt {
  key: string;
  template: string;
}

export const VAT_PROMPT = `
Verify Swedish transaction:
- Amount: {belopp} SEK
- Momskod {kod} matches rate {procent}%
Output: { valid: boolean, errors: string[] }
`;

export const BAS_KONTOPLAN = {
  '1000': 'Kassa',
  '1910': 'Bankkonto',
  '1920': 'Plusgiro',
  '1930': 'Företagskonto',
  '2610': 'Utgående moms, 25%',
  '2620': 'Utgående moms, 12%',
  '2630': 'Utgående moms, 6%',
  '2640': 'Ingående moms',
  '3000': 'Försäljning inom Sverige'
}; 