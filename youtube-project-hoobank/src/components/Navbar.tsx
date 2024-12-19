import { assets } from "../constants/contants";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-6 text-gray-200 font-poppins">
      <img src={assets.logo} className="w-32" />
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>
    </div>
  );
};

export default Navbar;
