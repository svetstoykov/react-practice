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
      <label key={id.toString()} className={listItemClass}>
        <input
          className="w-3 h-3 mx-2 bg-white border-2 border-gray-400 rounded-full appearance-none checked:bg-lime/10 checked:border-lime"
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
    <div className="flex flex-col gap-2 mt-2">
      {radioButtons && radioButtons.map((title, index) => radio(title, index))}
    </div>
  );
};

export default MortgageTypeSelectInput;
