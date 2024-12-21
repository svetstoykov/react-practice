import { useState } from "react";
import check from "../../assets/images/icon-check.svg";
import { toast } from "react-toastify";

interface IPledgeInputProps {
  onClickContinue: (amount: number) => void;
  defaultPledgeAmount: number;
  isMobile: boolean;
}

const PledgeInput: React.FC<IPledgeInputProps> = ({
  defaultPledgeAmount,
  onClickContinue,
  isMobile,
}) => {
  const [pledgeAmount, setPledgeAmount] = useState<number | null>(null);

  const confirmPledge = (amount: number) => {
    if (amount < defaultPledgeAmount) {
      toast.error(
        `Please enter an amount greater than $${defaultPledgeAmount}`
      );
      return;
    }

    if (amount === 0) {
      toast.error(`Please enter a valid amount`);
      return;
    }

    onClickContinue(amount);
  };

  return (
    <>
      <span className="sm:flex-1 text-secondary-text">Enter your pledge</span>
        <div className="flex flex-1 w-[60%] px-2 py-2 ml-2 border-2 sm:w-1/4 sm:flex-none rounded-3xl">
          <span className="ml-2">$</span>
          <input
            className="w-full px-2"
            onChange={(e) => setPledgeAmount(+e.target.value)}
            value={pledgeAmount || ""}
            type="text"
            placeholder={`${defaultPledgeAmount}`}
          />
        </div>
        {!isMobile ? (
          <button
            className="w-1/5 px-4 py-2.5 ml-2 primary-active-button"
            onClick={() => confirmPledge(pledgeAmount!)}
          >
            Continue
          </button>
        ) : (
          <img
            onClick={() => confirmPledge(pledgeAmount!)}
            className="ml-2 h-11 hover:opacity-80"
            src={check}
            alt="continue"
          />
        )}
    </>
  );
};

export default PledgeInput;
