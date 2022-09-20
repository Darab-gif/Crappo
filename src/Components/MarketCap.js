import React from "react";
import Button from "./Button";
import feature1 from "../Assests/feature-1-img.png";
import feature2 from "../Assests/feature-2-img.png";
import feature3 from "../Assests/feature-3-img.png";
import Mining from "./Mining";

const MarketCap = () => {
  return (
    <section className="bg-hero bg-cover pb-20">
      <h1 className="text-white lg:text-3xl text-2xl lg:font-bold lg:w-full w-[80%] ml-8 text-center pt-7 ">
        Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice
      </h1>
      <div className="lg:flex flex lg:flex-row flex-col lg:gap-10 gap-20 pt-32">
        <div className="lg:ml-20 ml-4 text-white">
          <h1 className="text-3xl font-extrabold text-white pt-8">
            Invest Smart
          </h1>
          <p className="font-sm pt-6 pb-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <Button type="learn more" />
        </div>
        <figure className="lg:pr-36 pl-4 ">
          <img
            src={feature1}
            alt=""
            className="lg:h-[25rem] lg:w-[50rem] h-[20rem] w-[20rem]"
          />
        </figure>
      </div>
      <div className="lg:flex lg:flex-row flex flex-col-reverse lg:gap-10 gap-20 lg:pt-32">
        <figure className="lg:pl-20 pl-4">
          <img
            src={feature2}
            alt=""
            className="lg:h-[25rem] lg:w-[50rem] h-[20rem] w-[20rem]"
          />
        </figure>
        <div className="lg:ml-20 ml-4 text-white pt-20">
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
      <div className="lg:flex lg:flex-row flex flex-col lg:gap-10 gap-20 lg:pt-32">
        <div className="lg:ml-20 ml-4 text-white pt-20">
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
          <img
            src={feature3}
            alt=""
            className="lg:h-[20rem] lg:w-[50rem] h-[15rem] w-[25rem]"
          />
        </figure>
      </div>
      <Mining />{" "}
    </section>
  );
};

export default MarketCap;
