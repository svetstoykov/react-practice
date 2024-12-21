import bookmarkIcon from "../assets/images/icon-bookmark.svg";
import logoMastercraft from "../assets/images/logo-mastercraft.svg";

const Title = () => {
  return (
    <section className="relative z-10 text-center bg-white rounded-md">
      <img
        src={logoMastercraft}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 -top-0.5 left-1/2"
        alt="logo mastercraft"
      />
      <div className="flex flex-col items-center justify-between h-full gap-4 p-8 rounded-md md:p-10">
        <h1 className="text-2xl font-bold">Mastercraft Bamboo Monitor Riser</h1>
        <h2 className="my-2 text-secondary-text">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </h2>
        <div className="flex items-center justify-between w-full gap-4 px-2 md:px-4">
          <button className="px-6 py-2 font-semibold text-white rounded-3xl bg-aqua">
            Back this project
          </button>
          <div className="flex items-center justify-between pr-6 bg-gray-200 rounded-[30px]">
            <img src={bookmarkIcon} alt="bookmark icon" className="w-[28%]" />
            <button className="font-semibold text-gray-500">Bookmark</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
