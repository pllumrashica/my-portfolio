import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className=" text-black p-4 shadow-md">
      <div className="container w-[90%]  mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="w-40 inline-block mr-2" />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-secondary font-semibold font-heading hover:text-primary">Home</a>
            </li>
            <li>
              <a href="#about" className="text-secondary font-semibold font-heading hover:text-primary">About</a>
            </li>
            <li>
              <a href="#projects" className="text-secondary font-semibold font-heading hover:text-primary">Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-secondary font-semibold font-heading hover:text-primary">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
