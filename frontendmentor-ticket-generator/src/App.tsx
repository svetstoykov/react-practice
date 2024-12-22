import ResponsiveBackground from "./components/ResponsiveBackground";
import fullLogo from "../src/assets/images/logo-full.svg";
import TextInput from "./components/TextInput";
import AvatarFileInput from "./components/AvatarFileInput";


function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-20 text-center md:max-w-[700px]">
        <header className="mb-10 text-white flex flex-col md:gap-8 gap-6 justify-center items-center">
          <img src={fullLogo} alt="Coding Conf Logo" className="" />
          <h1 className="text-5xl mb-2 font-bold">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <h2 className="text-light-gray text-lg">
            Secure your spot at next year's biggest coding conference
          </h2>
        </header>
        <main className="gap-6 md:min-w-[350px] flex flex-col justify-center items-centers text-white/80">
          <AvatarFileInput/>
          <TextInput label="Full Name" placeholder="John Doe" />
          <TextInput label="Email Address" placeholder="example@mail.com" />
          <TextInput label="Github Username" placeholder="developer_404" />
          <button
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
