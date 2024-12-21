import checkIcon from "../assets/images/icon-check.svg";

interface IThankYouModalProps {
  onClickGotIt: () => void;
}

const ThankYouModal: React.FC<IThankYouModalProps> = ({ onClickGotIt }) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-center p-10 bg-white rounded-xl md:w-[400px] w-[350px]">
        <img className="mx-auto mb-8" src={checkIcon} alt="check icon" />
        <h1 className="text-2xl font-bold">Thanks for your support!</h1>
        <p className="my-6 text-sm text-secondary-text">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          onClick={onClickGotIt}
          className="px-6 py-2 btn primary-active-button"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
