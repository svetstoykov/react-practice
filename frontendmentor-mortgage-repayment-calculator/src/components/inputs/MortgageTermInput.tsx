interface IMortgageTermInputProps {
  onChange: (value: number) => void;
  value: number | undefined;
}

const MortgageTermInput: React.FC<IMortgageTermInputProps> = ({
  onChange,
  value,
}) => {
  return (
    <>
      <label className="text-sm text-gray-500 mb-2">Mortgage Term</label>
      <div className="input-container group">
        <input
          placeholder="24"
          type="number"
          className="input-field max-w-[120px] pl-2"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div className="h-full w-[80px] input-label flex items-center justify-center">
          years
        </div>
      </div>
    </>
  );
};

export default MortgageTermInput;
