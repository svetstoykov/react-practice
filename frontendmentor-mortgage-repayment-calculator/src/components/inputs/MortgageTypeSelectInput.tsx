interface IMortgageTypeSelectInputProps {
  radioButtons: string[];
  selected: string | undefined;
  onClick: (value: string) => void;
}

const MortgageTypeSelectInput: React.FC<IMortgageTypeSelectInputProps> = ({
  radioButtons,
  selected,
  onClick,
}) => {
  const radio = (title: string, id: number) => {
    let listItemClass =
      "hover:border hover:ring-1 hover:ring-lime hover:border-lime transition-colors duration-300 flex items-center border rounded-md font-bold p-1 h-11";

    if (selected === title) {
      listItemClass += " bg-lime/20 border-lime";
    } else {
      listItemClass += " bg-white border-gray-600";
    }

    return (
      <label
        key={id.toString()}
        className={listItemClass}
      >
        <input
          className="mx-2 appearance-none w-3 h-3 border-2 rounded-full 
                    checked:bg-lime/10 checked:border-lime
                    border-gray-400 bg-white"
          type="radio"
          name="mortgage-type"
          checked={selected === title}
          onChange={() => onClick(title)}
        />
        <span>{title}</span>
      </label>
    );
  };

  return (
    <>
      <label className="text-sm text-gray-500">Mortgage Type</label>
      <div className="flex flex-col gap-2 mt-2">
        {radioButtons &&
          radioButtons.map((title, index) => radio(title, index))}
      </div>
    </>
  );
};

export default MortgageTypeSelectInput;
