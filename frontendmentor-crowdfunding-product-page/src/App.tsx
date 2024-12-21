import logo from "./assets/images/logo.svg";
import hero from "./assets/images/image-hero-desktop.jpg";
import heroMobile from "./assets/images/image-hero-mobile.jpg";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import ProgressTracker from "./components/ProgressTracker";
import About from "./components/About";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const setMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    setMobile();
    window.addEventListener("resize", setMobile);

    return () => window.removeEventListener("resize", setMobile);
  }, [setIsMobile]);

  const currentHero = isMobile ? heroMobile : hero;

  return (
    <div className="relative w-full p-0 m-0 font-commisioner">
      <Header currentHero={currentHero} logo={logo} isMobile={isMobile} />
      <main className="grid gap-4 grid-cols-1 md:grid-rows-8 w-[65%] max-w-[750px] md:min-w-[640px] min-w-[450px] mx-auto md:mt-44 mt-28 mb-20">
        <Title isMobile={isMobile} />
        <ProgressTracker endDate={Date.now() + 2300000000} />
        <About isMobile={isMobile} />
      </main>
    </div>
  );
}

export default App;
