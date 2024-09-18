import React from "react";

export const Input = ({ placeholder, inputHandler }) => {
  return (
    <input
      className="bg-gray-100 rounded-lg border-gray-200 border-[1px] p-2 w-full"
      placeholder={placeholder}
      onChange={inputHandler}
    />
  );
};
