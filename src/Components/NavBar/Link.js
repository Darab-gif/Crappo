import React from "react";

const Link = () => {
  return (
    <header className="">
      <nav className="lg:flex lg:gap-5 hidden">
        <ul className=" capitalize flex space-x-4 text-white items-center content-center">
          <li className="hover:border-b-2 hover:border-b-royal_blue cursor-pointer">
            products
          </li>
          <li className="hover:border-b-2 hover:border-b-royal_blue cursor-pointer">
            features
          </li>
          <li className="hover:border-b-2 hover:border-b-royal_blue cursor-pointer">
            about
          </li>
          <li className="hover:border-b-2 hover:border-b-royal_blue cursor-pointer">
            contact
          </li>
        </ul>
        <ul className="capitalize flex space-x-4 items-center content-center">
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

export default Link;
