"use client";
import { Logo } from "./Logo";

export const CashCard = () => {
  return (
    <div className="bg-blue-700 h-[216px] w-[384px] rounded-[18px] relative">
      <div>
        <img
          className=" h-[216px] w-[384px] rounded-[18px] "
          src="/Noise.png"
          alt=""
        />
      </div>
      <img className="absolute right-0 bottom-0 " src="/Shape.png" alt="" />
      <p className="absolute top-8 left-8 flex gap-2 items-center justify-center text-white white ">
        <Logo color={"white"} />
        <p>Geld</p>
      </p>
      <p className="text-white absolute top-[128px] left-8">
        <div className=" text-base opacity-50">cash</div>
        <div className="text-2xl">10,000,000</div>
      </p>
    </div>
  );
};
