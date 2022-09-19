import React from "react";

const Mining = () => {
  return (
    <section className="text-white rounded-md bg-mine bg-no-repeat w-[90%] lg:bg-contain bg-cover lg:ml-20 ml-4 mt-36 lg:h-[20rem] h-[20rem] lg:flex lg:justify-between lg:flex-row gap-6 flex flex-col">
      <div className="pt-8 ml-9">
        <h1 className="text-2xl font-bold">Start Mining Now</h1>
        <p className="lg:pt-9 pt-2 font-medium text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum.
        </p>
        <p className="font-medium text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.
        </p>
      </div>
      <form action="" className="lg:pt-24 mr-20 ">
        <input
          type="text"
          placeholder="enter message"
          className="border-b-2 border-b-white text-white ml-10 font-bold p-2 bg-mine bg-center lg:w-[20rem] outline-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="rounded-full px-4 py-3 bg-cultured cursor-pointer text-oxford_blue_3 lg:ml-6 ml-24 mt-4"
        />
      </form>
    </section>
  );
};

export default Mining;
