import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import MenuItem from "../components/MenuItem";
import AuthContainer from "../components/AuthContainer";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header className="fixed w-full flex justify-between px-4 py-2 top-0 left-0 border-b-[1px] border-b-gryBd bg-blkBg z-40 md:px-8 lg:px-12">
      <Link className="text-4xl text-whtTxt font-bold sm:text-3xl " to="/">
        IMPULSO
      </Link>

      <nav
        className={`nav ${isMenuVisible ? "" : "sm:nav-sm translate-x-full"}`}
      >
        <ul className="sm:flex">
          <MenuItem label="Home" to="/" />
          <MenuItem label="Products" to="/Products" />
          <MenuItem label="Blog" to="/" />
          <MenuItem label="Contact" to="/" />
        </ul>

        <AuthContainer />
      </nav>

      <button
        className="text-3xl"
        onClick={() => {
          setIsMenuVisible(!isMenuVisible);
        }}
      >
        {isMenuVisible ? (
          <IoClose className="text-4xl text-whtTxt sm:hidden" />
        ) : (
          <FaBars className="text-whtTxt sm:hidden" />
        )}
      </button>
    </header>
  );
}

export default Navbar;
