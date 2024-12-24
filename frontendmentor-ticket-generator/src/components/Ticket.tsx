import fullLogo from "../assets/images/logo-full.svg";
import githubLogo from "../assets/images/icon-github.svg";
import ticket from "../assets/images/pattern-ticket.svg";

interface ITicketProps {
  avatar: string;
  name: string;
  githubUsername: string;
  ticketCode: string;
}

const Ticket: React.FC<ITicketProps> = ({
  avatar,
  name,
  githubUsername,
  ticketCode,
}) => {
  return (
    <div className="mt-6 md:mt-2 relative md:w-[550px] w-[375px] md:h-[250px] h-[200px]">
      <div className="absolute flex flex-col justify-between w-full h-full px-6 py-4 md:top-2">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <img className="w-[50%]" alt="Coding Conf Logo" src={fullLogo} />
          <span className="text-light-gray">Jan 31, 2025 / Austin, TX</span>
        </div>

        <div className="flex items-center mb-6 md:mb-2 md:items-start text-start">
          <img
            src={avatar!}
            className="border-white/50 border rounded-lg mr-4 w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
          />
          <div className="flex flex-col justify-center md:gap-2 text-start">
            <span className="text-2xl md:text-3xl">{name}</span>
            <div className="flex">
              <img src={githubLogo} alt="Github Logo" />
              <span className="ml-2 md:text-lg opacity-80">
                @{githubUsername}
              </span>
            </div>
          </div>
        </div>
        <span className="absolute pb-10 pr-6 text-4xl transform rotate-90 -translate-y-1/2 md:right-0 -right-4 opacity-70 top-1/2">
          {ticketCode}
        </span>
      </div>
      <img className="absolute inset-0" src={ticket} alt="Ticket" />
    </div>
  );
};

export default Ticket;
