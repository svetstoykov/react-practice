import moon from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="relative h-full text-white bg-black/20">
      <div className="flex items-center justify-center h-full">
        <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4 lg:pr-36">
            <h1 className="py-1 text-5xl font-bold">ORBIT THE EARTH</h1>
            <p className="py-1 text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quae.
            </p>
            <button className="px-3 py-1 mt-2 text-white duration-300 border-2 border-white rounded-md hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <img src={moon} alt="" className="absolute bottom-0 right-0 w-full z-100"/>
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px]"></div>
    </div>
  );
};

export default Hero;
