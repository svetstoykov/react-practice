import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResponsiveBackground from "./components/ResponsiveBackground";
import TextInput from "./components/TextInput";
import AvatarFileInput from "./components/AvatarFileInput";
import Header from "./components/Header";
import { toast, ToastContainer } from "react-toastify";
import Ticket from "./components/Ticket";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [githubUsername, setGithubUsername] = useState<string>("");
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [isTicketGenerated, setIsTicketGenerated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ticketCode, setTicketCode] = useState<string>("");

  const generateRandomCode = (): string => {
    const randomCode = Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0");
    return `#${randomCode}`;
  };

  const onClickGenerate = async () => {
    if (!avatarPreview) {
      toast.error("Please upload a valid avatar image!");
      return;
    }

    setIsLoading(true);

    // Simulate API call with setTimeout
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setTicketCode(generateRandomCode());
    setIsLoading(false);
    setIsTicketGenerated(true);
  };

  return (
    <>
      <div className="relative z-10 md:pt-10 pt-32 md:pb-10 flex flex-col items-center justify-center text-center h-[100dvh] md:max-w-[700px]">
        <Header
          fullName={name}
          email={email}
          isTicketGenerated={isTicketGenerated}
        />
        <main className="gap-2 md:min-w-[350px] flex flex-col justify-center items-centers text-white/80">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="py-12"
              >
                <LoadingSpinner />
                <motion.p
                  className="mt-4 text-coral"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Generating your ticket...
                </motion.p>
              </motion.div>
            ) : isTicketGenerated ? (
              <motion.div
                key="ticket"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <Ticket
                  avatar={avatarPreview}
                  name={name}
                  githubUsername={githubUsername}
                  ticketCode={ticketCode}
                />
              </motion.div>
            ) : (
              <motion.div
                className="pb-6"
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
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
                <motion.button
                  onClick={onClickGenerate}
                  className="transition duration-300 hover:shadow-[0_0_10px_coral] px-10 py-3 rounded-xl font-bold bg-coral text-black/90 mt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Generate My Ticket
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
      <ResponsiveBackground />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
