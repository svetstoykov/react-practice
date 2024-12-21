import { IRewardTier } from "../../data/rewards";
import PledgeInput from "./PledgeInput";
import closeModal from "../../assets/images/icon-close-modal.svg";

interface ISinglePledgeModal {
  reward: IRewardTier;
  onClose: () => void;
  onClickContinue: (amount: number) => void;
  isMobile: boolean;
}

const SinglePledgeModal: React.FC<ISinglePledgeModal> = ({
  isMobile,
  reward,
  onClose,
  onClickContinue,
}) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div data-aos="flip-up" className="p-8 bg-white rounded-lg md:w-[600px] w-[400px]">
          <header className="flex items-center">
            <h2 className="flex-1 text-xl font-bold">{reward.title}</h2>
            <span className="font-semibold text-aqua">
              Pledge ${reward.pledgeAmount} or more
            </span>
            <span className="pl-4">
              <span className="font-bold">{reward.itemsLeft}</span> left
            </span>
          </header>
          <p className="mt-4 text-secondary-text">{reward.description}</p>
          <footer className="flex items-center pt-4 mt-4 border-t-2">
            <PledgeInput
              defaultPledgeAmount={reward.pledgeAmount}
              onClickContinue={onClickContinue}
              isMobile={isMobile}
            />
            <img className="p-3.5 ml-2 bg-gray-300 hover:opacity-80 transition duration-300 rounded-full" src={closeModal} onClick={onClose} alt="close modal" />
          </footer>
      </div>
    </div>
  );
};

export default SinglePledgeModal;
