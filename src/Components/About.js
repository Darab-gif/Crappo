import React from "react";
import Button from "./Button";
import why_img from "../Assests/why-img.png";

const About = () => {
  return (
    <section className="flex space-x-20 pt-20">
      <figure className="h-[35rem] w-[35rem]">
        <img src={why_img} alt="" />
      </figure>
      <div className="pt-32 max-w-xl">
        <h1 className="text-white text-5xl font-bold">
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
