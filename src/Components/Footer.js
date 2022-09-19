import React from "react";
import visa from "../Assests/visa.png";
import master from "../Assests/mastercard.png";
import bitcoin from "../Assests/bitcoin.png";
import logo from "../Assests/logo.svg";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoSkype } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
const Footer = () => {
  return (
    <section className="bg-hero pb-20">
      <div className="lg:flex lg:flex-row flex flex-col lg:gap-16 gap-10 text-white lg:ml-20 ml-4">
        <figure className="ml-20 lg:ml-4">
          <img src={logo} alt="" />
        </figure>
        <div className="lg:ml-20 ml-4 text-center ">
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <ul className="pt-4 ">
            <li className="text-white hover:text-carolina_blue cursor-pointer">
              Home
            </li>
            <li className="text-white pt-2 hover:text-carolina_blue cursor-pointer">
              Products
            </li>
            <li className="text-white pt-2 hover:text-carolina_blue cursor-pointer">
              About
            </li>
            <li className="text-white pt-2 hover:text-carolina_blue cursor-pointer">
              Features
            </li>
            <li className="text-white pt-2 hover:text-carolina_blue cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="lg:ml-20 ml-4 text-center">
          <h1 className="text-2xl font-bold">Resources Links</h1>
          <ul className="pt-4 ">
            <li className="text-white hover:text-carolina_blue cursor-pointer">
              Download Whitepapper
            </li>
            <li className="text-white pt-2 hover:text-carolina_blue cursor-pointer">
              Smart Token
            </li>
            <li className="text-white pt-2 hover:text-carolina_blue cursor-pointer">
              Blockchain Explore
            </li>
            <li className="text-white pt-2 hover:text-carolina_blue cursor-pointer">
              Crypto API
            </li>
            <li className="text-white pt-2 hover:text-carolina_blue cursor-pointer">
              Interest
            </li>
          </ul>
        </div>
        <div className="lg:ml-10 ml-2">
          <h1 className="lg:text-xl text-md font-bold">
            We accept the following payment systems
          </h1>
          <figure className="flex lg:gap-8 gap-4 pt-10">
            <img src={visa} alt="" />
            <img src={master} alt="" />
            <img src={bitcoin} alt="" />
          </figure>
        </div>
      </div>
      <div className="text-white lg:flex justify-between gap-14 flex flex-col lg:flex-row pt-20">
        <p className="lg:ml-20 ml-10">
          &copy; 2022 CRAPPO. All rights reserved.
        </p>
        <div className="flex lg:space-x-8 space-x-6 cursor-pointer pl-10 lg:pr-20">
          <a className="hover:text-carolina_blue" href="/#">
            <IoLogoFacebook size={30} />
          </a>
          <a href="/" className="hover:text-carolina_blue">
            <IoLogoInstagram size={30} />
          </a>
          <a href="/" className="hover:text-carolina_blue">
            <IoLogoLinkedin size={30} />
          </a>
          <a href="/" className="hover:text-carolina_blue">
            <IoLogoSkype size={30} />
          </a>
          <a href="/" className="hover:text-carolina_blue">
            <IoLogoTwitter size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
