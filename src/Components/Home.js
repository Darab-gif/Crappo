import React from "react";
import hero from "../Assests/hero-img.png";
import About from "./About";
import Price from "./Price";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";

const Home = () => {
  return (
    <section className="bg-hero pt-36 pl-20 relative h-[100rem]">
      <div className="lg:flex lg:space-x-20">
        <div className="text-white ">
          <div className="rounded-[50px] bg-sonic_silver w-[60%] flex space-x-4 py-1">
            <span className="rounded-[50px] bg-cultured text-sonic_silver ml-2 px-2">
              70% save
            </span>
            <span className="pl-4"> for the best black friday deals</span>
          </div>
          <h1 className="text-6xl font-semibold pt-5">
            Fastest & Secure <br />
            Platform To Invest In <br />
            Cypto
          </h1>
          <p className="font-md text-sm pt-4 text-sonic_silver font-bold">
            buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
            transactions
          </p>
          <button className="rounded-[50px] bg-carolina_blue px-6 py-2 mt-6 flex space-x-3">
            TRY FOR FREE
            <span className="bg-cultured rounded-full h-[20px] w-[20px] ml-3 flex justify-center items-center text-oxford_blue_2">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
        <figure className="lg:-mt-12 h-[30rem] w-[30rem]">
          <img src={hero} alt="" />
        </figure>
      </div>
      <div className="flex space-x-40 pt-20 pl-20">
        <div className="flex space-x-4">
          <span className="rounded-full h-[50px] w-[50px] flex justify-center items-center bg-sonic_silver text-oxford_blue_2">
            <IoIosStats size={30} />
          </span>
          <div>
            <h1 className="text-white text-2xl font-semibold">$30B</h1>
            <p className="text-sonic_silver ">Digital Currency Exchange</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <span className="rounded-full h-[50px] w-[50px] flex justify-center items-center bg-sonic_silver text-oxford_blue_2">
            <IoMdTrendingUp size={30} />
          </span>
          <div>
            <h1 className="text-white text-2xl font-semibold">190+</h1>
            <p className="text-sonic_silver ">Countries Around The World</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <span className="rounded-full h-[50px] w-[50px] flex justify-center items-center bg-sonic_silver text-oxford_blue_2">
            <IoMdPerson size={30} />
          </span>
          <div>
            <h1 className="text-white text-2xl font-semibold">$10M</h1>
            <p className="text-sonic_silver ">Trusted Wallet Investors</p>
          </div>
        </div>
      </div>
      <About />
      <Price />
    </section>
  );
};

export default Home;
