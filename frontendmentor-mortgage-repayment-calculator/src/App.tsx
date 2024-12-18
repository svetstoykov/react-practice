import calculatorIcon from "./assets/images/icon-calculator.svg";
import MortgageAmountInput from "./components/inputs/MortgageAmountInput";
import Header from "./components/Header";
import MortgageTermInput from "./components/inputs/MortgageTermInput";
import IntrestRateInput from "./components/inputs/IntrestRateInput";
import MortgageTypeSelectInput from "./components/inputs/MortgageTypeSelectInput";
import { useState } from "react";

function App() {
  const [mortgageType, setMortgageType] = useState<string>("Repayment");
  const [mortgageAmount, setMortgageAmount] = useState<number | undefined>(
    undefined
  );
  const [mortgageTerm, setMortgageTerm] = useState<number | undefined>(
    undefined
  );
  const [intrestRate, setIntrestRate] = useState<number | undefined>(undefined);

  return (
    <div className="h-screen flex items-center justify-center font-jakarta">
      <div className="flex md:flex-row flex-col md:min-h-[450px]">
        <div className="bg-white text-results md:p-10 p-6 md:min-w-[450px] rounded-l-xl">
          <div className="grid grid-rows-5 grid-cols-2 flex-grow md:gap-3 gap-2">
            <div className="col-span-2 flex justify-between items-start">
              <Header />
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
              <IntrestRateInput onChange={setIntrestRate} value={intrestRate} />
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
              onClick={() =>
                console.log(
                  `Mortgage Amount: ${mortgageAmount}, Mortgage Term: ${mortgageTerm}, Intrest Rate: ${intrestRate}, Mortgage Type: ${mortgageType}`
                )
              }
            >
              <img src={calculatorIcon} />
              <span className="ml-2">Calculate Repayments</span>
            </button>
          </div>
        </div>
        <div className="bg-results text-white md:min-w-[300px] rounded-r-xl">
          {/* To be completed.... */}
          Results
        </div>
      </div>
    </div>
  );
}

export default App;
