import { BsCurrencyPound } from "react-icons/bs";

interface IMortgageAmountInputProps {
  onChange: (value: number) => void;
  value: number | undefined;
}

const MortgageAmountInput: React.FC<IMortgageAmountInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <div className="input-container group">
        <div className="mr-2 h-full w-[30px] input-label flex items-center justify-center">
          <BsCurrencyPound />
        </div>
        <input
          placeholder="1000.00"
          onChange={(e) => onChange(Number(e.target.value))}
          step=".01"
          type="number"
          className="input-field"
          value={value || ""}
        />
      </div>
    </>
  );
};

export default MortgageAmountInput;
