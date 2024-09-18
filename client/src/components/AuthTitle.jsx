import React from "react";

export const AuthTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div>
        <img src="logo&name.png" alt="" />
      </div>
      <div className="flex justify-center flex-col gap-2">
        <h1 className="text-center font-bold text-2xl">{title}</h1>
        <div className="text-center text-base ">{description}</div>
      </div>
    </div>
  );
};
