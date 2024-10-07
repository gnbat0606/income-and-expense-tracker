import Link from "next/link";
import React from "react";
import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="bg-white h-[72px] w-full px-[120px] py-4 flex justify-between text-base ">
      <div className="flex gap-6 items-center">
        <p className="w-10 h-10">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.8296 15.3677V6.30078H15.5651V15.3677H6.30066V24.6322H15.5651V33.6991H24.8296V24.6322H34.0941V15.3677H24.8296ZM24.8296 24.4347H15.5651V15.5666H24.8296V24.4347Z"
              fill="#0166FF"
            />
          </svg>
        </p>
        <Link href={""} className="font-semibold">
          {" "}
          Dashboard{" "}
        </Link>
        <Link href={""}> Records </Link>
      </div>
      <div className="flex items-center gap-6">
        <Button
          clickHandler={""}
          className={"bg-back text-white rounded-full py-2 px-3 w-full"}
          text={"+ Record"}
        />
        <img
          className="w-10 h-10 rounded-full"
          src="https://s3-alpha-sig.figma.com/img/4b8f/8a06/87e8569e17a69979cf08dac0f798bd37?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvFpWWe6MsBy2V9L2LwbxboOvFUDG5gH0K5M3P~jthgOtXOOb8XARfecTc7af4YMRC4qoAFfR9irWJ8oBYxh5WO0cmb4H3-A1Cwt1uYfrnVVnG55Mrrnku-T9YQfGVPc0T6qOEof6Cknrs~9nn7qgQKAFt9YlhIWkkl-4AQM1SHRaMyqV~8sDL5ehyHy4bU3u7QL2jX1ZUnJdNcU9NWWnlbuHMRWycfVL6Gh6h~fpzMDiq1QaWM39R13wfvFMusDrFig8R6-cpvpKBTOl~n5Mm0nnxz4fSAUTNzq7~mbfNZ53gMay6iF0eUfcrefK4WO5Ayu-zTErZLC1STt-DQoww__"
          alt=""
        />
      </div>
    </div>
  );
};
