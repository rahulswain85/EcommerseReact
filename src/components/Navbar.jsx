import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RiShoppingCartFill } from "react-icons/ri";



const NavLinks = ({ onClick }) => {

  const linkClasses = ({ isActive }) =>
    isActive
      ? "underline font-bold text-blue-500 transition duration-500"
      : "hover:text-blue-500 transition duration-300"; 

  return (
    <>
      <NavLink to="/home" className={linkClasses} onClick={onClick}>
        Home
      </NavLink>
      <NavLink to="/explore" className={linkClasses} onClick={onClick}>
        Explore
      </NavLink>
      <NavLink to="/contactus" className={linkClasses} onClick={onClick}>
        Contact
      </NavLink>
      <NavLink to="/aboutus" className={linkClasses} onClick={onClick}>
        About
      </NavLink>

    </>
  );
};

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-xl/10">
        <div className="flex justify-between md:justify-center items-center h-16 px-6">
          <div className="hidden md:flex flex-row justify-center gap-20">
            <NavLinks />
          </div>
          <div className="flex items-start md:ml-155">
            <RiShoppingCartFill className="size-7 cursor-pointer " />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {/* Icon changes based on isOpen state */}
              {isOpen ? <IoMdClose /> : <CiMenuFries />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4 shadow-xl">
            <NavLinks onClick={toggleMenu} />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
