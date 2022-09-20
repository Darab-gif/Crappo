import React from "react";
import logo from "../../Assests/logo.svg";
import Link from "./Link";
import { FaBars } from "react-icons/fa";

const Navbar = ({ MobileLink }) => {
  return (
    <header className=" w-full bg-hero p-4 pt-6 transition-all ease-in delay-150">
      <div className="flex justify-between items-center">
        <img src={logo} alt="" className="lg:pl-20 pl-4" />
        <Link />

        <FaBars
          onClick={() => MobileLink(true)}
          className="lg:hidden text-3xl text-white cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Navbar;
