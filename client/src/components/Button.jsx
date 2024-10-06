import React from "react";

export const Button = ({ text, clickHandler, className }) => {
  return (
    <button onClick={clickHandler} className={className}>
      {text}
    </button>
  );
};
