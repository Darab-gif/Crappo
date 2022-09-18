import React from "react";
import Button from "./Button";
import feature1 from "../Assests/feature-1-img.png";
import feature2 from "../Assests/feature-2-img.png";
import feature3 from "../Assests/feature-3-img.png";
import Mining from "./Mining";

const MarketCap = () => {
  return (
    <section className="bg-hero pb-20">
      <h1 className="text-white text-3xl font-bold text-center pt-5 ">
        Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice
      </h1>
      <div className="flex space-x-8 pt-32">
        <div className="ml-20 text-white">
          <h1 className="text-3xl font-extrabold text-white pt-8">
            Invest Smart
          </h1>
          <p className="font-sm pt-6 pb-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <Button type="learn more" />
        </div>
        <figure className="pr-36">
          <img src={feature1} alt="" />
        </figure>
      </div>
      <div className="flex space-x-10 pt-32">
        <figure className="pl-20">
          <img src={feature2} alt="" />
        </figure>
        <div className="ml-20 text-white pt-32">
          <h1 className="text-3xl font-extrabold text-white pt-8">
            Detailed Statistics
          </h1>
          <p className="font-sm pt-6 pb-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <Button type="learn more" />
        </div>
      </div>
      <div className="flex space-x-8 pt-32">
        <div className="ml-20 text-white">
          <h1 className="text-3xl font-extrabold text-white pt-8">
            Grow Your Profit And Track Your Investments
          </h1>
          <p className="font-sm pt-6 pb-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <Button type="learn more" />
        </div>
        <figure className="pr-20">
          <img src={feature3} alt="" />
        </figure>
      </div>
      <Mining />{" "}
    </section>
  );
};

export default MarketCap;
