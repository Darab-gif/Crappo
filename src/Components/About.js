import React from "react";
import Button from "./Button";
import why_img from "../Assests/why-img.png";

const About = () => {
  return (
    <section className="lg:flex lg:flex-row lg:space-x-20 lg:pt-20 pt-2 flex flex-col-reverse">
      <figure className="lg:h-[35rem] lg:w-[35rem] h-[20rem] w-[20rem] pt-5 -ml-4">
        <img src={why_img} alt="" />
      </figure>
      <div className="pt-32 lg:w-[35rem] w-[20rem] -ml-3">
        <h1 className="text-white lg:text-5xl text-3xl font-bold">
          why you should choose CHAPPO
        </h1>
        <p className="pt-6 text-steel_blue pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          In, praesentium.
        </p>
        <Button type="learn more" />
      </div>
    </section>
  );
};

export default About;
