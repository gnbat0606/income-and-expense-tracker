import Link from "next/link";
import React from "react";

export const AuthFooter = ({ footerText, buttonText, prop }) => {
  return (
    <div className="flex gap-">
      <p>{footerText}</p>
      <Link href={prop} className=" text-blue-500">
        {buttonText}
      </Link>
    </div>
  );
};
