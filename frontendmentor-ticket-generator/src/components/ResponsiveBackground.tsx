import backgroundDesktop from "../assets/images/background-desktop.png";
import backgroundMobile from "../assets/images/background-mobile.png";
import backgroundTablet from "../assets/images/background-tablet.png";

const ResponsiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
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
