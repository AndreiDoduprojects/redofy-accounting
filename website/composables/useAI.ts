import { ref, computed } from 'vue';
import { VAT_PROMPT } from '~/types/accounting';

export function useAI() {
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const results = ref<any>(null);

  // Format the VAT prompt with transaction details
  const formatVATPrompt = (belopp: number, kod: string, procent: number) => {
    return VAT_PROMPT
      .replace('{belopp}', belopp.toString())
      .replace('{kod}', kod)
      .replace('{procent}', procent.toString());
  };

  // Validate a transaction using Claude AI
  const validateTransaction = async (belopp: number, kod: string, procent: number) => {
    isLoading.value = true;
    error.value = null;
    
    try {
      // This is a mock implementation
      // In a real application, you would call Claude API here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response for demo
      if (kod === '01' && procent === 25) {
        results.value = { valid: true, errors: [] };
      } else if (kod === '02' && procent === 12) {
        results.value = { valid: true, errors: [] };
      } else if (kod === '03' && procent === 6) {
        results.value = { valid: true, errors: [] };
      } else {
        results.value = { 
          valid: false, 
          errors: ['Momskod och procentsats matchar inte.'] 
        };
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Ett okänt fel inträffade';
      results.value = null;
    } finally {
      isLoading.value = false;
    }
    
    return results.value;
  };

  // Generate explanation for financial reports
  const explainReport = async (reportType: string, data: any) => {
    isLoading.value = true;
    error.value = null;
    
    try {
      // Mock implementation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const explanations = {
        'momsrapport': 'Momsrapporten visar att du har 25 000 SEK i utgående moms och 10 000 SEK i ingående moms. Du ska betala 15 000 SEK till Skatteverket.',
        'balans': 'Balansrapporten visar dina tillgångar och skulder. Du har 100 000 SEK i tillgångar och 50 000 SEK i skulder, vilket ger ett eget kapital på 50 000 SEK.',
        'agi': 'Arbetsgivaravgifterna är baserade på din löneutbetalning. Med en lön på 30 000 SEK betalar du 9 426 SEK i avgifter (31.42%).'
      };
      
      results.value = {
        explanation: explanations[reportType as keyof typeof explanations] || 'Ingen förklaring tillgänglig'
      };
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Ett okänt fel inträffade';
      results.value = null;
    } finally {
      isLoading.value = false;
    }
    
    return results.value;
  };

  return {
    isLoading,
    error,
    results,
    formatVATPrompt,
    validateTransaction,
    explainReport
  };
} 