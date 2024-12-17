import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/wave Gif.gif";

interface IServiceData {
  id: number;
  title: string;
  content: string;
  description: string;
  icon: React.ReactNode;
  aosDelay: string;
}

const serviceData: IServiceData[] = [
  {
    id: 1,
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    id: 2,
    title: "ISS",
    content: "500-1500km",
    description:
      "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    id: 3,
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];

const Service = (data: IServiceData) => {
  return (
    <div
      className="min-h-[180px] flex flex-col justify-center gap-2 rounded-xl bg-sky-800/60 items-center backdrop-blur-sm text-center text-xl py-8 px-3 w-full lg:w-[300px] mx-auto"
      key={data.id}
    >
      {data.icon}
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <p className="text-sm">{data.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="relative z-50 text-white bg-black">
      <div className="container">
        <div className="min-h-[400px]">
          <div data-aos="fade-up"className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {serviceData.map((data) => Service(data))}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
