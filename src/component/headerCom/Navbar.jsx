import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
const Navbar = ({ navlinks }) => {

  return (
    <nav className="flex text-white items-center justify-between  w-full bg-black py-3 px-5 ">
      <div className="font-bold text-2xl" >Harsh Rastogi</div>
      <div className=" hidden sm:flex items-center gap-2">
        {navlinks.map((e) => (
          <NavLink
          key={e}
            className={({ isActive }) =>
              isActive
                ? "border-2 text-gray-300 py-3 px-3 rounded-2xl "
                : "text-white p-2"
            }
            to={e === "Home" ? "" : e.toLowerCase()}
          >
            {e}
          </NavLink>
        ))}
      </div>
      <div className="text-2xl sm:hidden block">
        <IoMdMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
