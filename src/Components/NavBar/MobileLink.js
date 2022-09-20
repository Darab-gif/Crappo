import React from "react";
import { FaTimes } from "react-icons/fa";
const MobileLink = ({ MobileLink }) => {
  return (
    <header className="">
      <nav className="lg:hidden bg-hero w-full h-[60rem]">
        <FaTimes
          className="text-3xl absolute right-6 top-6 cursor-pointer text-white"
          onClick={() => MobileLink(false)}
        />
        <ul className=" capitalize flex flex-col text-white justify-center space-y-8 h-[30rem] items-center content-center">
          <li className=" hover:text-royal_blue cursor-pointer text-xl font-bold">
            products
          </li>
          <li className=" hover:text-royal_blue cursor-pointer text-xl font-bold">
            features
          </li>
          <li className=" hover:text-royal_blue cursor-pointer text-xl font-bold">
            about
          </li>
          <li className="hover:text-royal_blue cursor-pointer text-xl font-bold">
            contact
          </li>
        </ul>
        <ul className="capitalize flex space-x-4 items-center content-center ml-20 font-bold text-xl -mt-16">
          <li className="text-white">
            <a href="/">Login</a>
          </li>
          <li className="h-[15px] bg-sonic_silver w-[1px] mt-2"></li>
          <li className="rounded-[50px] px-6 py-2 text-white bg-carolina_blue">
            <a href="/">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileLink;
