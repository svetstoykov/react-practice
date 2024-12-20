import calculatorIcon from "./assets/images/icon-calculator.svg";
import MortgageAmountInput from "./components/inputs/MortgageAmountInput";
import Header from "./components/Header";
import MortgageTermInput from "./components/inputs/MortgageTermInput";
import IntrestRateInput from "./components/inputs/IntrestRateInput";
import MortgageTypeSelectInput from "./components/inputs/MortgageTypeSelectInput";
import { useState } from "react";
import Results from "./components/Results";
import {
  calculateMortgage,
  MortgageResults,
  validateInput,
} from "./services/mortgageCalculatorService";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [mortgageType, setMortgageType] = useState<string>("Repayment");
  const [mortgageAmount, setMortgageAmount] = useState<number | undefined>(
    undefined
  );
  const [mortgageTerm, setMortgageTerm] = useState<number | undefined>(
    undefined
  );
  const [interestRate, setIntrestRate] = useState<number | undefined>(
    undefined
  );

  const [showResults, setShowResults] = useState<boolean>(false);

  const [mortgageResults, setMortgageResults] = useState<
    MortgageResults | undefined
  >(undefined);

  const handleCalculate = () => {
    try {
      console.log(mortgageType);
      validateInput(mortgageAmount, mortgageTerm, interestRate, mortgageType);

      const result = calculateMortgage({
        loanAmount: mortgageAmount ?? 0,
        termYears: mortgageTerm ?? 0,
        interestRate: interestRate ?? 0,
        mortgageType: mortgageType,
      });

      setMortgageResults(result);
      setShowResults(true);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const handleClearAll = () => {
    setMortgageType("Repayment");
    setMortgageAmount(undefined);
    setMortgageTerm(undefined);
    setIntrestRate(undefined);
    setShowResults(false);
    setMortgageResults(undefined);
  };

  return (
    <main className="flex items-center justify-center font-jakarta">
      <div className="flex m-auto md:flex-row flex-col md:min-h-[450px] bg-white rounded-xl">
        <section className="rounded-l-xl bg-white text-results md:p-10 p-6 pt-5 md:min-w-[450px]">
          <div className="grid flex-grow grid-cols-2 grid-rows-5 gap-2 md:gap-3">
            <header className="flex items-start justify-between col-span-2">
              <Header handleClear={handleClearAll} />
            </header>
            <fieldset className="flex flex-col col-span-2">
              <legend className="mb-2 text-sm text-gray-500">
                Mortgage Amount
              </legend>
              <MortgageAmountInput
                onChange={setMortgageAmount}
                value={mortgageAmount}
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <legend className="mb-2 text-sm text-gray-500">
                Mortgage Term
              </legend>
              <MortgageTermInput
                onChange={setMortgageTerm}
                value={mortgageTerm}
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <legend className="mb-2 text-sm text-gray-500">
                Interest Rate
              </legend>
              <IntrestRateInput
                onChange={setIntrestRate}
                value={interestRate}
              />
            </fieldset>
            <fieldset className="col-span-2 row-span-2">
              <legend className="text-sm text-gray-500">Mortgage Type</legend>
              <MortgageTypeSelectInput
                radioButtons={["Repayment", "Interest Only"]}
                selected={mortgageType}
                onClick={setMortgageType}
              />
            </fieldset>
          </div>
          <section className="flex justify-center md:justify-start">
            <button
              className="flex items-center px-6 py-3 mt-4 bg-lime rounded-3xl"
              onClick={handleCalculate}
            >
              <img src={calculatorIcon} alt="Calculate" />
              <span className="ml-2">Calculate Repayments</span>
            </button>
          </section>
        </section>
        <section className="bg-results text-white md:w-[450px] md:rounded-r-xl md:rounded-bl-[100px] rounded-b-xl pb-6">
          <Results
            monthlyRepayment={mortgageResults?.monthlyRepayment ?? 0}
            totalRepayment={mortgageResults?.totalRepayment ?? 0}
            showResults={showResults}
          />
        </section>
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
