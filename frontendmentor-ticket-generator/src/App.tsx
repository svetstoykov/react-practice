import ResponsiveBackground from "./components/ResponsiveBackground";
import TextInput from "./components/TextInput";
import AvatarFileInput from "./components/AvatarFileInput";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [githubUsername, setGithubUsername] = useState<string | null>("");
  const [filePreview, setFilePreview] = useState<string | null>("");

  const onClickGenerate = () => {
    console.log(name);
    console.log(email);
    console.log(githubUsername);
    console.log(filePreview);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-20 text-center md:max-w-[700px]">
        <Header />
        <main className="gap-6 md:min-w-[350px] flex flex-col justify-center items-centers text-white/80">
          <AvatarFileInput onChange={setFilePreview} />
          <TextInput
            label="Full Name"
            placeholder="John Doe"
            onChange={setName}
          />
          <TextInput
            onChange={setEmail}
            label="Email Address"
            placeholder="example@mail.com"
          />
          <TextInput
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
        </main>
      </div>

      <ResponsiveBackground />
    </>
  );
}

export default App;
