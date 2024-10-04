import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="bg-white flex ">
      <div className="flex">
        <p className="w-10 h-10">
          <img src="logo.png" alt="" />
        </p>
        <Link href={""}> Dashboard </Link>
        <Link href={""}> Records </Link>
      </div>
      <div className="flex">
        <div>add record </div>
        <div>profile</div>
      </div>
    </div>
  );
};
