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
    <div className="h-screen flex items-center justify-center font-jakarta">
      <div className="flex md:flex-row flex-col md:min-h-[450px] bg-white rounded-xl">
        <div className="rounded-l-xl bg-white text-results md:p-10 p-6 pt-5 md:min-w-[450px]">
          <div className="grid grid-rows-5 grid-cols-2 flex-grow md:gap-3 gap-2">
            <div className="col-span-2 flex justify-between items-start">
              <Header handleClear={handleClearAll} />
            </div>
            <div className="col-span-2 flex flex-col">
              <MortgageAmountInput
                onChange={setMortgageAmount}
                value={mortgageAmount}
              />
            </div>
            <div className="flex flex-col">
              <MortgageTermInput
                onChange={setMortgageTerm}
                value={mortgageTerm}
              />
            </div>
            <div className="flex flex-col">
              <IntrestRateInput
                onChange={setIntrestRate}
                value={interestRate}
              />
            </div>
            <div className="col-span-2 row-span-2">
              <MortgageTypeSelectInput
                radioButtons={["Repayment", "Interest Only"]}
                selected={mortgageType}
                onClick={setMortgageType}
              />
            </div>
          </div>
          <div className="flex md:justify-start justify-center">
            <button
              className="bg-lime py-3 px-6 rounded-3xl mt-4 flex items-center"
              onClick={handleCalculate}
            >
              <img src={calculatorIcon} />
              <span className="ml-2">Calculate Repayments</span>
            </button>
          </div>
        </div>
        <div className="bg-results text-white md:w-[450px] md:rounded-r-xl md:rounded-bl-[100px] rounded-b-xl pb-6" >
          <Results
            monthlyRepayment={mortgageResults?.monthlyRepayment ?? 0}
            totalRepayment={mortgageResults?.totalRepayment ?? 0}
            showResults={showResults}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
