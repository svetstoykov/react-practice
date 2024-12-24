import fullLogo from "../assets/images/logo-full.svg";

interface IHeaderProps {
  email: string | null;
  fullName: string | null;
  isTicketGenerated: boolean;
}

const Header: React.FC<IHeaderProps | null> = (props) => {
  return (
    <header className="flex flex-col items-center justify-center gap-6 mb-2 text-white md:mb-10 md:gap-8">
      <img src={fullLogo} alt="Coding Conf Logo" className="md:mb-8" />
      <h1 className="text-3xl font-bold md:text-5xl md:mb-2">
        {props?.isTicketGenerated && props?.fullName ? (
          <div>
            Congrats,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-coral to-white">
              Svetlozar
            </span>
            ! Your ticket is ready.
          </div>
        ) : (
          "Your Journey to Coding Conf 2025 Starts Here!"
        )}
      </h1>
      <h2 className="text-lg text-light-gray md:text-lg">
        {props?.isTicketGenerated && props?.email ? (
          <div>
            We've emailed your ticket to{" "}
            <span className="text-coral">{props.email}</span> and will send
            updates in the run up to the event.
          </div>
        ) : (
          "Secure your spot at next year's biggest coding conference"
        )}
      </h2>
    </header>
  );
};

export default Header;
