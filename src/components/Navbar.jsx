import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";



const NavLinks = ({ onClick }) => {

  const linkClasses = ({ isActive }) =>
    isActive
      ? "underline font-bold text-blue-500 transition duration-500"
      : "hover:text-blue-500 transition duration-300"; 

  return (
    <>
      <NavLink to="/" className={linkClasses} onClick={onClick}>
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
      {/* Main Navigation Container */}
      <nav className="sticky top-0 z-50 bg-white shadow-xl/10">
        <div className="flex justify-between md:justify-center items-center h-16 px-6">
          {/* 3. DESKTOP MENU: Hidden on small screens, Flex on medium (md) and up */}
          <div className="hidden md:flex flex-row justify-center gap-20">
            <NavLinks />
          </div>

          {/* 4. HAMBURGER BUTTON: Visible on small screens, Hidden on medium (md) and up */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {/* Icon changes based on isOpen state */}
              {isOpen ? <IoMdClose /> : <CiMenuFries />}
            </button>
          </div>
        </div>

        {/* 5. MOBILE MENU DROPDOWN: Rendered only when isOpen is true */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4 shadow-xl">
            {/* passing toggleMenu to close the menu when a link is clicked */}
            <NavLinks onClick={toggleMenu} />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
