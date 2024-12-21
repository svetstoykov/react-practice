import { useState } from "react";
import { IRewardTier } from "../data/rewards";

interface IPledgeModalProps {
  reward: IRewardTier;
  onClose: () => void;
}

const PledgeModal: React.FC<IPledgeModalProps> = ({ reward, onClose }) => {
  const [pledgeAmount, setPledgeAmount] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-white rounded-lg md:w-[600px] w-[400px]">
        <header className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-secondary-text">
            {reward.title}
          </h2>
          <span className="font-semibold text-aqua">
            Pledge ${reward.pledgeAmount} or more
          </span>
          <span>
            <span className="font-bold">{reward.itemsLeft}</span> left
          </span>
        </header>
        <p className="mt-4 text-secondary-text">{reward.description}</p>
        <footer className="flex items-center pt-4 mt-4 border-t-2">
          <span className="flex-1 text-secondary-text">Enter your pledge</span>
          <div className="flex w-1/5 px-2 py-2 border-2 rounded-3xl">
            <span className="ml-2">$</span>
            <input
              className="w-full px-2"
              onChange={(e) => setPledgeAmount(e.target.value)}
              value={pledgeAmount || ""}
              type="text"
              placeholder={`${reward.pledgeAmount}`}
            />
          </div>
          <button
            className="w-1/5 px-4 py-2 ml-4 primary-active-button"
            onClick={onClose}
          >
            Continue
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PledgeModal;
