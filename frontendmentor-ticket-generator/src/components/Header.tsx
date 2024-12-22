import fullLogo from "../assets/images/logo-full.svg";

interface IHeaderProps {
  email: string | null;
  fullName: string | null;
  isTicketGenerated: boolean;
}

const Header: React.FC<IHeaderProps | null> = (props) => {
  return (
    <header className="md:mb-10 mb-2 text-white flex flex-col md:gap-8 gap-6 justify-center items-center">
      <img src={fullLogo} alt="Coding Conf Logo" className="md:mb-8" />
      <h1 className="md:text-5xl text-3xl md:mb-2 font-bold">
        {props?.isTicketGenerated && props?.fullName
          ? `Congrats, ${props.fullName}! Your ticket is ready.`
          : "Your Journey to Coding Conf 2025 Starts Here!"}
      </h1>
      <h2 className="text-light-gray md:text-lg text-lg">
        {props?.isTicketGenerated && props?.email
          ? `We've emailed your ticket to ${props.email} and will send updates in the run up to the event.`
          : "Secure your spot at next year's biggest coding conference"}
      </h2>
    </header>
  );
};

export default Header;
