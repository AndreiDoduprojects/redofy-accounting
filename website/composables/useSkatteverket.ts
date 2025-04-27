import { ref } from 'vue';
import { MOMS_KODER, DEFAULT_AGI_SETTINGS } from '~/types/accounting';

export function useSkatteverket() {
  const isGenerating = ref(false);
  const error = ref<string | null>(null);
  
  /**
   * Calculate VAT (Moms) based on amount and VAT code
   */
  const calculateMoms = (belopp: number, momsKod: string) => {
    // Find the moms rate by code
    const momsRate = Object.values(MOMS_KODER).find(m => m.kod === momsKod);
    
    if (!momsRate) {
      return {
        momsBelopp: 0,
        totalBelopp: belopp,
        error: 'Ogiltig momskod'
      };
    }
    
    const momsBelopp = belopp * momsRate.procentsats;
    const totalBelopp = belopp + momsBelopp;
    
    return {
      momsBelopp,
      totalBelopp,
      error: null
    };
  };
  
  /**
   * Calculate employer contributions (Arbetsgivaravgift)
   */
  const calculateAGI = (lon: number, settings = DEFAULT_AGI_SETTINGS) => {
    const rate = settings.useReducedRate ? settings.reducedRate : settings.fullRate;
    const avgift = lon * rate;
    
    return {
      lon,
      avgift,
      rate,
      total: lon + avgift
    };
  };
  
  /**
   * Generate BAS-IX XML for Skatteverket
   */
  const generateBASIX = async (transactions: any[], period: string) => {
    isGenerating.value = true;
    error.value = null;
    
    try {
      // Mock implementation - in real app would create proper XML
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const xmlString = `
<?xml version="1.0" encoding="UTF-8"?>
<BAS-IX>
  <Period>${period}</Period>
  <Verifikationer>
    ${transactions.map(t => `
    <Verifikation>
      <Nummer>${t.verifikationsnummer}</Nummer>
      <Belopp>${t.belopp}</Belopp>
      <MomsKod>${t.moms_kod}</MomsKod>
      <Datum>${t.datum}</Datum>
    </Verifikation>
    `).join('')}
  </Verifikationer>
</BAS-IX>`;
      
      return xmlString;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Ett fel uppstod vid generering av BAS-IX';
      return null;
    } finally {
      isGenerating.value = false;
    }
  };
  
  return {
    isGenerating,
    error,
    calculateMoms,
    calculateAGI,
    generateBASIX
  };
} 