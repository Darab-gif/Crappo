import React from "react";

const Button = ({ type }) => {
  return (
    <div>
      <button className="bg-carolina_blue rounded-md px-4 p-3 text-white">
        {type}
      </button>
    </div>
  );
};

export default Button;
