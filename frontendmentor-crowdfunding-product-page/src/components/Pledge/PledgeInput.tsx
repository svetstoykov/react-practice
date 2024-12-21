import { useState } from "react";
import check from "../../assets/images/icon-check.svg";

interface IPledgeInputProps {
  onClickContinue: () => void;
  defaultPledgeAmount: number;
  isMobile: boolean;
}

const PledgeInput: React.FC<IPledgeInputProps> = ({
  defaultPledgeAmount,
  onClickContinue,
  isMobile,
}) => {
  const [pledgeAmount, setPledgeAmount] = useState<number | null>(null);

  return (
    <>
      <span className="md:flex-1 text-secondary-text">Enter your pledge</span>
      <div className="flex flex-1 w-1/5 px-2 py-2 ml-2 border-2 md:flex-none rounded-3xl">
        <span className="ml-2">$</span>
        <input
          className="w-full px-2"
          onChange={(e) => setPledgeAmount(+e.target.value)}
          value={pledgeAmount || 0}
          type="text"
          placeholder={`${defaultPledgeAmount}`}
        />
      </div>
      {!isMobile ? (
        <button
          className="w-1/5 px-4 py-2.5 ml-2 primary-active-button"
          onClick={onClickContinue}
        >
          Continue
        </button>
      ) : (
        <img className="ml-2 h-11" src={check} alt="continue" />
      )}
    </>
  );
};

export default PledgeInput;
