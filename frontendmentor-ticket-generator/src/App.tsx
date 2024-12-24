import ResponsiveBackground from "./components/ResponsiveBackground";
import TextInput from "./components/TextInput";
import AvatarFileInput from "./components/AvatarFileInput";
import Header from "./components/Header";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ticket from "../src/assets/images/pattern-ticket.svg";
import fullLogo from "../src/assets/images/logo-full.svg";
import githubLogo from "../src/assets/images/icon-github.svg";
import Ticket from "./components/Ticket";

function App() {
  const [name, setName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [githubUsername, setGithubUsername] = useState<string | null>("");
  const [avatarPreview, setAvatarPreview] = useState<string | null>("");
  const [isTicketGenerated, setIsTicketGenerated] = useState<boolean>(false);
  const [ticketCode, setTicketCode] = useState("");

  const generateRandomCode = (): string => {
    const randomCode = Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0");
    return `#${randomCode}`;
  };

  const onClickGenerate = () => {
    if (avatarPreview === null || avatarPreview.length === 0) {
      toast.error("Please upload a valid avatar image!");
      return;
    }

    setTicketCode(generateRandomCode());
    setIsTicketGenerated(true);
  };

  return (
    <>
      <div className="relative z-10 md:pb-10 flex flex-col items-center justify-center text-center md:max-w-[700px]">
        <Header
          fullName={name}
          email={email}
          isTicketGenerated={isTicketGenerated}
        />
        <main className="gap-2 md:min-w-[350px] flex flex-col justify-center items-centers text-white/80">
          {isTicketGenerated ? (
            <Ticket
              avatar={avatarPreview!}
              name={name!}
              githubUsername={githubUsername!}
              ticketCode={ticketCode}
            />
          ) : (
            <>
              <AvatarFileInput onChange={setAvatarPreview} />
              <TextInput
                validation={{ minLength: 5, required: true }}
                label="Full Name"
                placeholder="John Doe"
                onChange={setName}
              />
              <TextInput
                validation={{
                  pattern: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
                  required: true,
                }}
                onChange={setEmail}
                label="Email Address"
                placeholder="example@mail.com"
              />
              <TextInput
                validation={{ required: true }}
                onChange={setGithubUsername}
                label="Github Username"
                placeholder="developer_404"
              />
              <button
                onClick={onClickGenerate}
                className="
          transition
          duration-300
          hover:shadow-[0_0_10px_coral]
          px-10 py-3 rounded-xl font-bold bg-coral text-black/90 mt-2"
              >
                Generate My Ticket
              </button>
            </>
          )}
        </main>
      </div>

      <ResponsiveBackground />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
