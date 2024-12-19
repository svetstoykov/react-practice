import resultImage from "../assets/images/illustration-empty.svg";
import { MortgageResults } from "../services/mortgageCalculatorService";

interface MortgageResultsProps extends MortgageResults {
  showResults: boolean;
}

const Results: React.FC<MortgageResultsProps> = ({
  totalRepayment,
  monthlyRepayment,
  showResults,
}) => {
  return (
    <>
      {!showResults ? (
        <div className="h-full m-auto gap-4 container flex flex-col items-center justify-center text-center px-6 md:py-4 py-14 my-auto">
          <img src={resultImage} className="md:mb-4" />
          <h1 className="text-2xl font-bold">Results shown here</h1>
          <p className="text-sm text-gray-400">
            Complete the form and click "Calculate Repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <div className="container flex flex-col gap-3 justify-start items-start px-12 md:py-8 pt-3 pb-0">
          <h1 className="text-2xl font-bold">Your Results</h1>
          <p className="text-sm text-gray-400 mb-6">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "Calculate
            Repayments" again
          </p>
          <div className="flex flex-col gap-4 bg-resultsBox p-6 rounded-lg border-t-[3px] border-lime w-full">
            <div>
              <h2 className="text-sm text-gray-400 mb-2">
                Your monthly repayment:
              </h2>
              <p className="text-5xl text-lime font-semibold mb-5">
                £ {monthlyRepayment}
              </p>
            </div>
            <hr />
            <div>
              <h2 className="text-sm text-gray-400 mb-2">
                Total you'll repay over the term:
              </h2>
              <p className="font-semibold text-xl">£ {totalRepayment}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Results;
