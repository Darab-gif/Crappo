import React from "react";

const Mining = () => {
  return (
    <section className="text-white bg-mine bg-no-repeat w-[90%] bg-contain ml-20 mt-36 h-[15rem] flex justify-between">
      <div className="pt-8 ml-9">
        <h1 className="text-2xl font-bold">Start Mining Now</h1>
        <p className="pt-9 font-medium text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum.
        </p>
        <p className="font-medium text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.
        </p>
      </div>
      <form action="" className="pt-24 mr-20">
        <input
          type="text"
          placeholder="enter message"
          className="border-b-2 border-b-white text-white font-bold p-2 bg-mine bg-center w-[20rem] outline-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="rounded-full px-4 py-3 bg-cultured cursor-pointer text-oxford_blue_3 ml-6"
        />
      </form>
    </section>
  );
};

export default Mining;
