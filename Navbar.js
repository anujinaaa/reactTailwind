import React, { useState } from "react";
import { BiAlignLeft } from "react-icons/bi";
import { useNavigate, Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handeNav = () => {
    setNav(!nav);
  };
  const route = (val) => {
    navigate(`/${val}`);
  };
  return (
    <div className="absolute w-full flex justify-between p-4 item-center">
      <h1 className="text-white font-bold text-2xl z-20">Navbar</h1>
      <BiAlignLeft
        size={25}
        onClick={handeNav}
        className="z-20 text-white cursor-pointer"
      />
      <div
        className={
          nav
            ? "fixed text-gray-300 left-0 top-0 w-full h-screen  bg-black/90 px-4 py-7 flex-column z-10 "
            : "absolute top-0 h-screen left-[-100] ease-in duration-300 z-10"
        }
      >
        {nav && (
          <ul className="flex flex-col fixed w-full h-full items-center justify-center">
            <li className="font-bold text-3xl p-8" onClick={() => route("")}>
              home
            </li>
            <li
              className="font-bold text-3xl p-8"
              onClick={() => route("about")}
            >
              about
            </li>
            <li
              className="font-bold text-3xl p-8"
              onClick={() => route("travel")}
            >
              travel
            </li>
            <li
              className="font-bold text-3xl p-8"
              onClick={() => route("rooms")}
            >
              rooms
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Navbar;
