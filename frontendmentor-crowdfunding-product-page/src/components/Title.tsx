import { useState } from "react";
import bookmarkIcon from "../assets/images/icon-bookmark.svg";
import logoMastercraft from "../assets/images/logo-mastercraft.svg";
import checkIcon from "../assets/images/icon-check.svg";

interface ITitleProps {
  isMobile: boolean;
  onClickBackup: () => void;
}

const Title: React.FC<ITitleProps> = ({ isMobile, onClickBackup }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <section
      data-aos="fade-right"
      className="relative text-center bg-white rounded-xl z-15"
    >
      <img
        src={logoMastercraft}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 -top-0.5 left-1/2"
        alt="logo mastercraft"
      />
      <div className="flex flex-col items-center justify-between h-full gap-4 p-8 rounded-xl md:p-10">
        <h1 className="text-2xl font-bold">Mastercraft Bamboo Monitor Riser</h1>
        <h2 className="my-2 text-secondary-text">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </h2>
        <div className="flex items-center justify-between w-full gap-4 px-2 md:px-4">
          <button
            onClick={onClickBackup}
            className="px-6 py-2 primary-active-button"
          >
            Back this project
          </button>
          <div
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`cursor-pointer transition duration-300 flex items-center justify-between md:pr-6 rounded-[30px]
              ${isBookmarked ? "hover:bg-aqua/30" : "hover:bg-gray-300/80"}
              ${isBookmarked ? "bg-aqua/20" : " bg-gray-300/60"}`}
          >
            <img
              src={isBookmarked ? checkIcon : bookmarkIcon}
              alt="bookmark icon"
              className="w-[42px] h-[42px] md:mr-4"
            />
            <button
              className={`font-semibold ${
                isBookmarked ? "text-aqua-dark" : "text-gray-500"
              }`}
            >
              {isMobile ? "" : isBookmarked ? "Bookmarked" : "Bookmark"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
