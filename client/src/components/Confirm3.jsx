"use client";

import { Button } from "./Button";
import { Progress } from "./Progress";

export const Confirm3 = ({ continueHandler }) => {
  const handler = async () => {
    continueHandler();
  };
  return (
    <div>
      3<div></div>
      <div>
        <Button clickHandler={handler} text={"confirm"} />
      </div>
    </div>
  );
};
