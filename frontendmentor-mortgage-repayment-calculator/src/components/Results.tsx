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
        <section className="container flex flex-col items-center justify-center h-full gap-4 px-6 m-auto my-auto text-center md:py-4 py-14">
          <img src={resultImage} className="md:mb-4" alt="Results" />
          <h1 className="text-2xl font-bold">Results shown here</h1>
          <p className="text-sm text-gray-400">
            Complete the form and click "Calculate Repayments" to see what your
            monthly repayments would be.
          </p>
        </section>
      ) : (
        <section className="container flex flex-col items-start justify-start gap-3 px-12 pt-3 pb-0 md:py-8">
          <h1 className="text-2xl font-bold">Your Results</h1>
          <p className="mb-6 text-sm text-gray-400">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "Calculate
            Repayments" again
          </p>
          <article className="flex flex-col gap-4 bg-resultsBox p-6 rounded-lg border-t-[3px] border-lime w-full">
            <div>
              <h2 className="mb-2 text-sm text-gray-400">
                Your monthly repayment:
              </h2>
              <p className="mb-5 text-5xl font-semibold text-lime">
                £ {monthlyRepayment}
              </p>
            </div>
            <hr />
            <div>
              <h2 className="mb-2 text-sm text-gray-400">
                Total you'll repay over the term:
              </h2>
              <p className="text-xl font-semibold">£ {totalRepayment}</p>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default Results;
