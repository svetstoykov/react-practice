import logo from "./assets/images/logo.svg";
import hero from "./assets/images/image-hero-desktop.jpg";
import heroMobile from "./assets/images/image-hero-mobile.jpg";
import { useEffect, useState } from "react";

function App() {
  const [currentHero, setCurrentHero] = useState(hero);

  useEffect(() => {
    const updateHeroImage = () => {
      if (window.innerWidth < 768) {
        setCurrentHero(heroMobile);
      } else {
        setCurrentHero(hero);
      }
    };

    updateHeroImage();
    window.addEventListener("resize", updateHeroImage);

    return () => window.removeEventListener("resize", updateHeroImage);
  }, []);

  return (
    <div className="h-screen bg-gray-50 relative">
      <header className="w-full p-0 m-0 relative">
        <img
          src={currentHero}
          className="object-cover absolute w-full md:h-[400px] h-[300px] "
        />
        <nav className="flex justify-between p-10 backdrop-blur-sm rounded-">
          <div className="relative z-10">
            <img src={logo} alt="logo" />
          </div>
          <ul className="font-semibold relative z-10 flex gap-6 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
