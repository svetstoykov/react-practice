import React, { useEffect, useState } from "react";
import dropdown from "../assets/images/icon-hamburger.svg";
import dropdownClose from "../assets/images/icon-close-menu.svg";

interface IHeaderProps {
  currentHero: string;
  logo: string;
  isMobile: boolean;
}

const Header: React.FC<IHeaderProps> = ({ currentHero, logo, isMobile }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsDropdownOpen(false);
    }
  }, [isMobile]);

  return (
    <header>
      <img
        src={currentHero}
        className="object-cover absolute w-full md:h-[400px] h-[300px] "
        alt="background hero"
      />

      <nav className="relative z-10 flex justify-between p-10 backdrop-blur-sm ">
        <div className="relative">
          <img src={logo} className="relative" alt="crowdfund logo" />
        </div>
        {isMobile ? (
          <button onClick={toggleDropdown}>
            <img
              src={isDropdownOpen ? dropdownClose : dropdown}
              className="relative z-10 w-[30px] h-[30px]"
              alt="dropdown"
            />
          </button>
        ) : (
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
        )}
      </nav>

      {isDropdownOpen && (
        <>
          <div
            className="fixed inset-0 z-20 bg-black opacity-50"
            onClick={toggleDropdown}
          ></div>
          <div className="absolute bg-white border rounded shadow-lg w-[200px] top-20 right-12">
            <ul className="h-[100px] flex flex-col justify-between items-center text-center">
              <li className="flex items-center justify-center flex-1 w-full border-b">
                <a href="#">About</a>
              </li>
              <li className="flex items-center justify-center flex-1 w-full border-b ">
                <a href="#">Discover</a>
              </li>
              <li className="flex items-center justify-center flex-1 w-full">
                <a href="#">Get Started</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
