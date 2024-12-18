import { assets } from "../constants/contants";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between sm:flex-row font-poppins h-[700px]">
      <div className="flex flex-col justify-center h-full px-4 py-6">
        <div className="flex items-center gap-1 px-1 pr-2 text-gray-400 uppercase rounded-xl w-fit backdrop-blur-md bg-gradient-to-r from-gray-800/80 to-gray-900/80">
          <img src={assets.discount} />
          <div>
            20% <span className="text-white">Discounts</span> for the entire{" "}
            <span className="text-white">month</span>
          </div>
        </div>
        <div className="py-5 font-bold">
          <h1 className="py-2 text-5xl">The Next</h1>
          <h1 className="py-2 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-lightBlue">
            Generation
          </h1>
          <h1 className="py-2 text-5xl">Payment Method</h1>
        </div>
        <p className="pt-6 text-sm text-gray-300">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex justify-end w-full">
        <img src={assets.robot} alt="billing" className="w-full max-w-[700px]" />
      </div>
    </div>
  );
};

export default Hero;
