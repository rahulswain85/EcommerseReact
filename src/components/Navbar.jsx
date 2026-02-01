import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RiShoppingCartFill, RiLogoutBoxRFill } from "react-icons/ri";
import { useUser } from "./UserContext";



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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { handleUserLogOut, loggedinUser } = useUser();

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
          <div className="sm:flex-row-reverse flex lg:gap-20 md:gap-10 gap-5 items-start lg:ml-100 md:ml-50">
            {loggedinUser? <RiLogoutBoxRFill className="size-7 cursor-pointer rounded-full hover:text-blue-400 hover:shadow-lg" onClick={handleUserLogOut}  />:(<button className="text-white text-wrap max-h-[20&] font-bold bg-black lg:px-8 lg:py-1 md:px-8 md:py-1 md:text-sm sm:px-1 sm:py-1 rounded-lg hover:bg-white hover:text-black border-black border-2 transition duration-75" onClick={()=>navigate("/")}>Get Started</button>)}
           {loggedinUser ? (<RiShoppingCartFill className="size-7 cursor-pointer" />) : (null)}
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
