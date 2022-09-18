import React from "react";
import logo from "../../Assests/logo.svg";
import Link from "./Link";

const Navbar = () => {
  return (
    <header className=" w-full bg-hero p-4 transition-all ease-in delay-150">
      <div className="flex justify-between items-center">
        <img src={logo} alt="" className="pl-20" />
        <Link />
      </div>
    </header>
  );
};

export default Navbar;
