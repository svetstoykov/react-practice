interface IHeaderProps {
  handleClear: () => void;
}

const Header: React.FC<IHeaderProps> = ({ handleClear }) => {
  return (
    <>
      <h1 className="text-2xl font-bold">Mortgage Calculator</h1>
      <button
        onClick={handleClear}
        className="pt-2 text-sm text-gray-500 underline"
      >
        Clear all
      </button>
    </>
  );
};

export default Header;
