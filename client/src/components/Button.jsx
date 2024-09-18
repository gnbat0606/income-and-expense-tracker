import React from "react";

export const Button = ({ text, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="bg-back text-white rounded-full py-2 w-full"
    >
      {text}
    </button>
  );
};
