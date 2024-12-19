export type MortgageInputs = {
  loanAmount: number; // Principal amount
  termYears: number; // Loan term in years
  interestRate: number; // Annual interest rate in percentage
  mortgageType: string;
};

export type MortgageResults = {
  monthlyRepayment: number;
  totalRepayment: number;
};

/**
 * Calculates the monthly mortgage payment and total repayment amount.
 * @param inputs - The mortgage inputs object
 * @returns The calculated results
 */
export function calculateMortgage({
  loanAmount,
  termYears,
  interestRate,
  mortgageType,
}: MortgageInputs): MortgageResults {
  const monthlyInterestRate = interestRate / 100 / 12; // Convert annual rate to monthly decimal
  const numberOfPayments = termYears * 12; // Total number of monthly payments

  let monthlyRepayment = 0;
  let totalRepayment = 0;

  if (mortgageType === "Repayment") {
    // Repayment mortgage formula
    if (monthlyInterestRate === 0) {
      // Special case: Zero interest rate
      monthlyRepayment = loanAmount / numberOfPayments;
      totalRepayment = loanAmount;
    } else {
      monthlyRepayment =
        (loanAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      totalRepayment = monthlyRepayment * numberOfPayments;
    }
  } else if (mortgageType === "Interest Only") {
    // Interest-only mortgage
    monthlyRepayment = loanAmount * monthlyInterestRate;
    totalRepayment = monthlyRepayment * numberOfPayments;
  } else {
    throw new Error("Invalid mortgage type");
  }

  return {
    monthlyRepayment: +monthlyRepayment.toFixed(2),
    totalRepayment: +totalRepayment.toFixed(2),
  };
}

export function validateInput(
  loanAmount: number | undefined,
  termYears: number | undefined,
  interestRate: number | undefined,
  mortgageType: string
) {
  if (loanAmount == null || loanAmount <= 0) {
    throw new Error("Loan amount must be a positive number.");
  }
  if (termYears == null || termYears <= 0) {
    throw new Error("Term years must be a positive number.");
  }
  if (interestRate == null || interestRate < 0) {
    throw new Error("Interest rate must be a non-negative number.");
  }
  if (
    !mortgageType ||
    (mortgageType !== "Repayment" && mortgageType !== "Interest Only")
  ) {
    throw new Error(
      'Mortgage type must be either "Repayment" or "Interest Only".'
    );
  }
}
