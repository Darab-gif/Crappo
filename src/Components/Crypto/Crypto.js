import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CryptoData } from "./CryptoData";

const Crypto = () => {
  const [show, setShow] = useState(2);

  const coinCard = CryptoData.map((coins) => {
    return (
      <div
        key={coins.id}
        onClick={() => setShow(coins.id)}
        className={
          show === coins.id
            ? "rounded-xl lg:h-[30rem] lg:w-[22rem] h-[30rem] w-[19rem] transition-all bg-oxford_blue ease-in p-5 delay-500 text-white  flex flex-col items-center"
            : "rounded-xl lg:h-[30rem] lg:w-[22rem] h-[30rem] w-[19rem] bg-cultured flex flex-col items-center p-5"
        }
      >
        <figure className="pt-8">
          <img src={coins.image} alt="" />
        </figure>
        <h1 className="pt-14 font-extrabold text-4xl">
          {coins.title}
          <span className="text-sm font-semibold text-sonic_silver ml-2">
            {coins.symbol}
          </span>
        </h1>
        <p className="text-xl font-medium text-sonic_silver pt-6">
          {coins.description}
        </p>

        <div>
          {show === coins.id ? (
            <button className="py-4 px-5 mt-8 text-2xl text-cultured space-x-6 flex font-bold bg-carolina_blue content-center items-center  rounded-full">
              Start mining{" "}
              <span className="pt-2 ml-3">
                <IoIosArrowForward size={28} />
              </span>
            </button>
          ) : (
            <button className="h-[60px] w-[60px] mt-8 rounded-full border-2 border-gainsboro_50 flex items-center justify-center text-carolina_blue">
              <IoIosArrowForward size={30} />
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <section className="pt-60 bg-lavender_web text-center cursor-pointer pb-20">
      <h1 className="lg:text-3xl text-4xl font-bold">
        Trade Securely And Market The High Growth Cryptocurrencies.
      </h1>
      <div className="lg:flex lg:gap-10 flex flex-col gap-10 lg:flex-row pt-14 lg:ml-28 ml-7">
        {coinCard}
      </div>
      ;
    </section>
  );
};

export default Crypto;
