import fullLogo from "../assets/images/logo-full.svg";

const Header = () => {
  return (
    <header className="mb-10 text-white flex flex-col md:gap-8 gap-6 justify-center items-center">
      <img src={fullLogo} alt="Coding Conf Logo" className="md:mb-8" />
      <h1 className="md:text-5xl text-3xl mb-2 font-bold">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <h2 className="text-light-gray md:text-lg text-lg">
        Secure your spot at next year's biggest coding conference
      </h2>
    </header>
  );
};

export default Header;
