import logo from "./assets/images/logo.svg";
import hero from "./assets/images/image-hero-desktop.jpg";
import heroMobile from "./assets/images/image-hero-mobile.jpg";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import ProgressTracker from "./components/ProgressTracker";
import Funding from "./components/Funding";
import { ICrowdfundingState } from "./data/models";
import ThankYouModal from "./components/ThankYouModal";
import MultiPledgeModal from "./components/Pledge/MultiPledgeModal";
import { IRewardTier } from "./data/rewards";
import SinglePledgeModal from "./components/Pledge/SinglePledgeModal";
import { ToastContainer } from "react-toastify";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [state, setState] = useState<ICrowdfundingState | null>(null);

  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [isSinglePledgeModalOpen, setIsSinglePledgeModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState<IRewardTier | null>(
    null
  );

  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const state = window.localStorage.getItem("state");

    if (state === null) {
      const newState: ICrowdfundingState = {
        endMoneyGoal: 1_000_000,
        totalMoneyBacked: randomInt(1, 10_000),
        totalBackers: randomInt(1, 200),
        date: new Date("2025-12-31"),
      };

      window.localStorage.setItem("state", JSON.stringify(newState));

      setState(newState);

      return;
    }

    setState(JSON.parse(state!));
  }, [setState]);

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

  const onClickContinue = (amount: number) => {
    const newState = { ...state! };
    newState.totalMoneyBacked += amount;
    newState.totalBackers += 1;

    window.localStorage.setItem("state", JSON.stringify(newState));
    setState(newState);

    setIsBackupModalOpen(false);
    setIsSinglePledgeModalOpen(false);

    setIsThankYouModalOpen(true);
  };

  const onSelectReward = (reward: IRewardTier) => {
    setIsSinglePledgeModalOpen(true);
    setSelectedReward(reward);
  };

  const onClickGotIt = () => {
    setIsThankYouModalOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentHero = isMobile ? heroMobile : hero;

  return (
    state && (
      <div className="relative w-full p-0 m-0 font-commisioner">
        
        <Header currentHero={currentHero} logo={logo} isMobile={isMobile} />
        <main className="grid gap-4 grid-cols-1 md:grid-rows-7 w-[65%] max-w-[750px] md:min-w-[640px] min-w-[400px] mx-auto md:mt-44 mt-28 mb-20">
          
          <Title
            onClickBackup={() => setIsBackupModalOpen(true)}
            isMobile={isMobile}
          />

          <ProgressTracker {...state!} />

          <Funding onSelectReward={onSelectReward} />

          {isThankYouModalOpen && <ThankYouModal onClickGotIt={onClickGotIt} />}

          {isBackupModalOpen && (
            <MultiPledgeModal
              onClickContinue={onClickContinue}
              onClose={() => setIsBackupModalOpen(false)}
            />
          )}

          {isSinglePledgeModalOpen && selectedReward && (
            <SinglePledgeModal
              isMobile={isMobile}
              reward={selectedReward}
              onClickContinue={onClickContinue}
              onClose={() => setIsSinglePledgeModalOpen(false)}
            />
          )}

          <ToastContainer />
        </main>
      </div>
    )
  );
}

export default App;
