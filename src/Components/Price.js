import React from "react";
import Button from "./Button";

const Price = () => {
  return (
    <section className="text-center pt-20 absolute -bottom-24">
      <div>
        <h1 className="text-white text-3xl font-bold">
          How Much Can You Earn With Us
        </h1>
        <p className="text-xl pt-6 text-steel_blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id
          similique temporibus dignissimos tempore odio?
        </p>
      </div>
      <div className="w-[60rem] rounded-md bg-cultured p-5 mt-8 ml-28">
        <form action="" className="inline-flex space-x-20 p-8">
          <input
            type="text"
            placeholder="Enter your hash rate"
            className=" border-b-2 border-b-steel_blue  bg-cultured  outline-none text-xl w-[15rem]"
          />
          <select className="border-b-2 border-b-steel_blue bg-cultured  outline-none w-[13rem] text-xl">
            <option value="">TH/s</option>
            <option value="">H/s</option>
            <option value="">KH/s</option>
            <option value="">MH/s</option>
            <option value="">GH/s</option>
          </select>
          <Button type="Calculate" />
        </form>
        <div className="text-left ml-10">
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
