import satelite from "../../assets/satelite1.jpg";

const BannerOne = () => {
  return (
    <div className="relative z-50 pb-12 text-white bg-black">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <img src={satelite} />
          </div>
          <div className="p-4 space-y-3 border-b-2 border-r-2 xl:pr-36 border-r-sky-800 border-b-sky-800">
            <span className="uppercase text-sky-800">Our Mission</span>
            <h1 className="text-5xl uppercase">Satelite</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt
            </p>
            <button className="px-3 py-1 text-white duration-300 border-2 border-white rounded-md hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
