import backgroundDesktop from "../assets/images/background-desktop.png";
import backgroundMobile from "../assets/images/background-mobile.png";
import backgroundTablet from "../assets/images/background-tablet.png";
import bottomLine from "../assets/images/pattern-squiggly-line-bottom.svg";
import topLine from "../assets/images/pattern-squiggly-line-top.svg";
import lines from "../assets/images/pattern-lines.svg";
import circle from "../assets/images/pattern-circle.svg";

const ResponsiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <img src={lines} className="absolute z-10 top-0 left-0 right-0 w-full" />

      <img src={topLine} className="absolute  z-10 top-0 right-0" />

      <img
        src={circle}
        alt=""
        className="absolute -top-24  z-10 md:left-[5rem]"
      />

      <img src={bottomLine} className=" z-10 absolute -bottom-20 left-0" />

      {/* Mobile background (default) */}
      <div className="absolute inset-0 w-full h-full md:hidden">
        <img
          src={backgroundMobile}
          alt="Mobile background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tablet background */}
      <div className="absolute inset-0 w-full h-full hidden md:block lg:hidden">
        <img
          src={backgroundTablet}
          alt="Tablet background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop background */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <img
          src={backgroundDesktop}
          alt="Desktop background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ResponsiveBackground;
