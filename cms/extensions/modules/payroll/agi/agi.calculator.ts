/**
 * AGI (Arbetsgivaravgift) calculator for Swedish employer contributions
 */

export interface EmployerContributionInput {
  grossSalary: number;
  employeeType: 'standard' | 'research' | 'foreign' | 'seasonal';
  employeeAge: number;
  year: number;
  month: number;
}

export interface EmployerContributionResult {
  totalContribution: number;
  appliedRate: number;
  pensionContribution: number;
  healthInsuranceContribution: number;
  otherContributions: number;
  seniorRateApplied?: boolean;
  researchDeduction?: number;
}

/**
 * Calculates Swedish employer contributions based on salary and employee details
 * 
 * @param input The calculation input parameters
 * @returns The calculated employer contributions
 */
export function calculateEmployerContributions(input: EmployerContributionInput): EmployerContributionResult {
  const { grossSalary, employeeType, employeeAge, year, month } = input;
  
  // Standard rate for 2023 is 31.42%
  let baseRate = 0.3142;
  let seniorRateApplied = false;
  let researchDeduction = 0;
  
  // Adjust rate based on age
  if (employeeAge < 26) {
    baseRate = 0.1997; // Reduced rate for young employees in 2023
  } else if (employeeAge >= 65) {
    baseRate = 0.1021; // Senior rate for 2023
    seniorRateApplied = true;
  }
  
  // Apply special rules for research personnel
  if (employeeType === 'research') {
    // Research personnel get a deduction on employer contributions
    researchDeduction = grossSalary * 0.1; // 10% deduction
  }
  
  // Calculate components
  const totalBeforeDeductions = grossSalary * baseRate;
  const totalContribution = Math.max(0, totalBeforeDeductions - researchDeduction);
  
  // Break down contributions (simplified)
  const pensionContribution = totalContribution * 0.5; // 50% of total
  const healthInsuranceContribution = totalContribution * 0.3; // 30% of total
  const otherContributions = totalContribution * 0.2; // 20% of total
  
  return {
    totalContribution: Math.round(totalContribution),
    appliedRate: baseRate,
    pensionContribution: Math.round(pensionContribution),
    healthInsuranceContribution: Math.round(healthInsuranceContribution),
    otherContributions: Math.round(otherContributions),
    ...(seniorRateApplied && { seniorRateApplied }),
    ...(researchDeduction > 0 && { researchDeduction }),
  };
} 