"use client";
import React from "react";

export const Logo = ({ color }) => {
  return (
    <div>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5348 7.47169V0.70343H7.61909V7.47169H0.703369V14.3874H7.61909V21.1557H14.5348V14.3874H21.4505V7.47169H14.5348ZM14.5348 14.24H7.61909V7.62019H14.5348V14.24Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
