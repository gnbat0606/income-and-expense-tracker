"use client";

import { Button } from "./Button";
import { Progress } from "./Progress";

export const Confirm3 = ({ continueHandler }) => {
  const handler = async () => {
    continueHandler();
  };
  return (
    <div className="flex flex-col items-center w-[384px]">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <img src="Frame 10.png" alt="" className="w-12 h-12" />
            <h1 className="font-bold text-center">Good Job!</h1>
          </div>
          <div className="text-xs text-gray-400 text-center">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </div>
        </div>
        <Button clickHandler={handler} text={"Go to Dashboard"} />
      </div>
    </div>
  );
};
