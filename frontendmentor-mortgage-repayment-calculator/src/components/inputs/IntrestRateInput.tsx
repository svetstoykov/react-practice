interface IntrestRateInputProps {
  onChange: (value: number) => void;
  value: number | undefined;
}

const IntrestRateInput: React.FC<IntrestRateInputProps> = ({
  onChange,
  value,
}: IntrestRateInputProps) => {
  return (
    <>
      <label className="text-sm text-gray-500 mb-2">Interest Rate</label>
      <div className="input-container group flex justify-between">
        <input
          placeholder="12.00"
          type="number"
          className="input-field max-w-[120px] pl-2"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div className="h-full w-[60px] input-label flex items-center justify-center">
          %
        </div>
      </div>
    </>
  );
};

export default IntrestRateInput;
