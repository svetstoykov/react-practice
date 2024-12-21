import React from "react";
import { IRewardTier } from "../../data/rewards";
import PledgeInput from "./PledgeInput";

interface ISelectablePledgeProps {
  reward: IRewardTier;
  pledgeSelected: number | null;
  onSelectPledge: () => void;
  onClickContinue: (amount: number) => void;
}

const SelectablePledge: React.FC<ISelectablePledgeProps> = ({
  reward,
  pledgeSelected,
  onSelectPledge,
  onClickContinue
}) => {
  return (
    <li
      onClick={onSelectPledge}
      className={`relative border-2 border-${
        pledgeSelected == reward.id ? "aqua" : "gray-300"
      } cursor-pointer rounded-xl hover:border-${
        pledgeSelected == reward.id ? "aqua" : "gray-200"
      }`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-lg font-bold">{reward.title}</h2>
          <span className="text-sm text-aqua">
            Pledge ${reward.pledgeAmount} or more
          </span>
          <span className="text-end">
            <span className="font-bold">{reward.itemsLeft}</span> left
          </span>
        </div>

        <div className="pt-2 pl-2 text-sm text-gray-600">
          <p>{reward.description}</p>
        </div>
      </div>

      {/* Expandable section with pseudo-element for border */}
      <div
        className={`relative transform transition-all overflow-hidden ${
          pledgeSelected === reward.id ? "h-16" : "h-0"
        }`}
      >
        <div
          className={`absolute inset-x-0 top-0 transform transition-all duration-300 ease-in-out`}
        >
          {/* Border top */}
          <div className="absolute inset-x-0 top-0 h-px bg-gray-200" />

          {/* Content */}
          <div className="flex items-center px-4 py-3">
            <PledgeInput
              defaultPledgeAmount={reward.pledgeAmount}
              onClickContinue={onClickContinue}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default SelectablePledge;
