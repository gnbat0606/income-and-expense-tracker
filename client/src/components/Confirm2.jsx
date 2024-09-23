"use client";

import { Button } from "./Button";
import { Progress } from "./Progress";

export const Confirm2 = ({ continueHandler }) => {
  const handler = async () => {
    continueHandler();
  };
  return (
    <div className="flex flex-col items-center w-[384px]">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <img src="Frame 10.png" alt="" className="w-12 h-12" />
            <h1 className="font-bold">Select base currency</h1>
          </div>
          <div className="w-[384px]  border-gray-300 text-gray-900 border-solid">
            <input
              placeholder="Balance"
              type="text"
              className="px-5 h-16 w-full bg-gray-50 text-sm rounded-lg"
            />
            <p className=" mt-2 text-xs text-gray-400">
              How much cash do you have in your wallet?
            </p>
          </div>
        </div>
        <div className="w-full">
          <Button clickHandler={handler} text={"confirm"} />
        </div>
      </div>
    </div>
  );
};
