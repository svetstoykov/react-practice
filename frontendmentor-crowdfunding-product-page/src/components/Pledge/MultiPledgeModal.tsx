import { useState } from "react";
import rewardTiers from "../../data/rewards";
import closeModal from "../../assets/images/icon-close-modal.svg";
import SelectablePledge from "./SelectablePledge";

interface IMultiPledgeModalProps {
  onClose: () => void;
  onClickContinue: (amount: number) => void;
}

const MultiPledgeModal: React.FC<IMultiPledgeModalProps> = ({
  onClose,
  onClickContinue,
}) => {
  const [pledgeSelected, setPledgeSelected] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-left p-10 bg-white rounded-xl md:w-[600px] w-[400px]">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Back this project</h1>
          <img
            onClick={onClose}
            className="cursor-pointer"
            src={closeModal}
            alt="close modal"
          />
        </header>
        <p className="my-6 text-sm text-secondary-text">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <ul className="grid grid-cols-1 gap-4">
          {rewardTiers.map((reward) => (
            <SelectablePledge
              key={reward.id}
              reward={reward}
              pledgeSelected={pledgeSelected}
              onSelectPledge={() => setPledgeSelected(reward.id)}
              onClickContinue={onClickContinue}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiPledgeModal;
