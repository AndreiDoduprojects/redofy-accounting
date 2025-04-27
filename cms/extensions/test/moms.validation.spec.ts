import { validateMomsCalculation } from '../modules/accounting/moms/moms.service';

describe('MOMS Validation Tests', () => {
  test('should correctly calculate 25% VAT for standard rate goods', () => {
    const result = validateMomsCalculation({
      netAmount: 100,
      vatRate: 0.25,
      vatAmount: 25,
    });
    
    expect(result.isValid).toBe(true);
    expect(result.calculatedVat).toBe(25);
  });

  test('should correctly calculate 12% VAT for food items', () => {
    const result = validateMomsCalculation({
      netAmount: 100,
      vatRate: 0.12,
      vatAmount: 12,
    });
    
    expect(result.isValid).toBe(true);
    expect(result.calculatedVat).toBe(12);
  });

  test('should correctly calculate 6% VAT for books', () => {
    const result = validateMomsCalculation({
      netAmount: 100,
      vatRate: 0.06,
      vatAmount: 6,
    });
    
    expect(result.isValid).toBe(true);
    expect(result.calculatedVat).toBe(6);
  });

  test('should detect invalid VAT calculation', () => {
    const result = validateMomsCalculation({
      netAmount: 100,
      vatRate: 0.25,
      vatAmount: 20, // Incorrect VAT amount
    });
    
    expect(result.isValid).toBe(false);
    expect(result.calculatedVat).toBe(25);
    expect(result.errorMessage).toBeDefined();
  });
}); 