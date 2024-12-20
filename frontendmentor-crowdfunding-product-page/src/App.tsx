import logo from "./assets/images/logo.svg";
import logoMastercraft from "./assets/images/logo-mastercraft.svg";
import hero from "./assets/images/image-hero-desktop.jpg";
import heroMobile from "./assets/images/image-hero-mobile.jpg";
import bookmarkIcon from "./assets/images/icon-bookmark.svg";
import { useEffect, useState } from "react";
import rewardTiers from "./data/rewards";
import Reward from "./components/Reward";
import Countdown from "react-countdown";

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

  const countdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <span>Time's up!</span>;
    } else {
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <header className="relative w-full p-0 m-0">
      <img
        src={currentHero}
        className="object-cover absolute w-full md:h-[400px] h-[300px] "
        alt="background hero"
      />
      <nav className="relative z-10 flex justify-between p-10 backdrop-blur-sm ">
        <div className="relative">
          <img src={logo} className="relative" alt="crowdfund logo" />
        </div>
        <ul className="relative flex gap-6 font-semibold text-transparent bg-gradient-to-r from-gray-100 to-white bg-clip-text">
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
      <main className="grid gap-4 grid-cols-1 grid-rows-6 w-[65%] max-w-[750px] md:min-w-[640px] min-w-[450px] mx-auto mt-44">
        <section className="relative z-10 text-center bg-white rounded-md">
          <img
            src={logoMastercraft}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 -top-0.5 left-1/2"
            alt="logo mastercraft"
          />
          <div className="flex flex-col items-center justify-start gap-4 p-8 rounded-md md:p-10">
            <h1 className="text-2xl font-bold">
              Mastercraft Bamboo Monitor Riser
            </h1>
            <h2 className="my-2 text-secondary-text">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </h2>
            <div className="flex items-center justify-between w-full gap-4 px-2 md:px-10">
              <button className="px-6 py-2 font-semibold text-white rounded-3xl bg-aqua">
                Back this project
              </button>
              <div className="flex items-center justify-between pr-6 bg-gray-200 rounded-[30px]">
                <img
                  src={bookmarkIcon}
                  alt="bookmark icon"
                  className="w-[28%]"
                />
                <button className="font-semibold text-gray-500">
                  Bookmark
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid h-full grid-cols-3 p-8 bg-white rounded-md">
            <div className="border-r-2 border-gray-500/70">
              <h1 className="mb-2 text-3xl font-bold">$10</h1>
              <p className="text-secondary-text">of $100,000 backed</p>
            </div>
            <div className="px-3 border-r-2 border-gray-500/70">
              <h1 className="mb-2 text-3xl font-bold">5</h1>
              <p className="text-secondary-text">total backers-progress</p>
            </div>
            <div></div>
            <div className="col-span-3 mt-6">
              <h1 className="text-4xl font-semibold">Thanks!!!</h1>
              <p className="mt-2 text-secondary-text">
                {" "}
                time left:{" "}
                <Countdown
                  date={Date.now() + 10000000}
                  renderer={countdownRenderer}
                />
              </p>
            </div>
          </div>
        </section>
        <section className="row-span-4 p-8 bg-white rounded-md">
          <h1 className="text-2xl font-semibold">About this project</h1>
          <p className="mt-4 text-secondary-text">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="my-10 text-secondary-text">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <div>
            {rewardTiers.map((reward) => (
              <Reward key={reward.id} {...reward} />
            ))}
          </div>
        </section>
      </main>
    </header>
  );
}

export default App;
