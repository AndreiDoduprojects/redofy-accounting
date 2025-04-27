import { calculateEmployerContributions } from '../modules/payroll/agi/agi.calculator';

describe('AGI Calculator Tests', () => {
  test('should calculate correct employer contributions for standard employee', () => {
    const result = calculateEmployerContributions({
      grossSalary: 30000,
      employeeType: 'standard',
      employeeAge: 35,
      year: 2023,
      month: 6,
    });
    
    // Standard rate for 2023 is 31.42%
    expect(result.totalContribution).toBeCloseTo(9426);
    expect(result.pensionContribution).toBeDefined();
    expect(result.healthInsuranceContribution).toBeDefined();
  });

  test('should calculate reduced contributions for employees under 26', () => {
    const result = calculateEmployerContributions({
      grossSalary: 25000,
      employeeType: 'standard',
      employeeAge: 23,
      year: 2023,
      month: 6,
    });
    
    // Reduced rate for young employees
    expect(result.totalContribution).toBeLessThan(25000 * 0.3142);
    expect(result.appliedRate).toBeLessThan(0.3142);
  });

  test('should handle senior employees over 65', () => {
    const result = calculateEmployerContributions({
      grossSalary: 35000,
      employeeType: 'standard',
      employeeAge: 67,
      year: 2023,
      month: 6,
    });
    
    // Senior rate is reduced
    expect(result.totalContribution).toBeLessThan(35000 * 0.3142);
    expect(result.seniorRateApplied).toBe(true);
  });

  test('should apply correct deductions for research personnel', () => {
    const result = calculateEmployerContributions({
      grossSalary: 45000,
      employeeType: 'research',
      employeeAge: 40,
      year: 2023,
      month: 6,
    });
    
    // Research personnel get specific deductions
    expect(result.researchDeduction).toBeGreaterThan(0);
    expect(result.totalContribution).toBeLessThan(45000 * 0.3142);
  });
}); 