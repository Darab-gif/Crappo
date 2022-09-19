import React from "react";
import Button from "./Button";

const Price = () => {
  return (
    <section className="lg:text-center pt-20 absolute -bottom-24">
      <div className="w-[80%] lg:w-[100%] lg:ml-4 -ml-4">
        <h1 className="text-white text-3xl font-bold">
          How Much Can You Earn With Us
        </h1>
        <p className="lg:text-xl text-md pt-6 text-steel_blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id
          similique temporibus dignissimos tempore odio?
        </p>
      </div>
      <div className="lg:w-[90%] w-[90%] rounded-md bg-cultured lg:p-5 p-2 mt-8 lg:ml-28">
        <form
          action=""
          className="lg:flex lg:flex-row lg:gap-24 gap-10 flex flex-col p-8 -ml-4 lg:ml-4"
        >
          <input
            type="text"
            placeholder="Enter your hash rate"
            className=" border-b-2 border-b-steel_blue  bg-cultured  outline-none text-xl w-[15rem]"
          />
          <select className="border-b-2 border-b-steel_blue bg-cultured  outline-none w-[15rem] text-xl">
            <option value="">TH/s</option>
            <option value="">H/s</option>
            <option value="">KH/s</option>
            <option value="">MH/s</option>
            <option value="">GH/s</option>
          </select>
          <Button type="Calculate" />
        </form>
        <div className="text-left lg:ml-10 ml-4 pb-2">
          <h2 className="text-2xl font-semibold text-royal_blue">
            ESTIMATED 24 HOUR REVENUE:
          </h2>
          <h1 className="text-2xl font-extrabold pt-6">
            0.055 130 59 ETH <span className="text-royal_blue">($1275)</span>
          </h1>
          <p className="pt-8 font-bold">
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Price;
