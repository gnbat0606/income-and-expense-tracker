"use client";

import { Button } from "./Button";
import { Progress } from "./Progress";

export const Confirm2 = ({ continueHandler }) => {
  const handler = async () => {
    continueHandler();
  };
  return (
    <div>
      2<div></div>
      <div>
        <Button clickHandler={handler} text={"confirm"} />
      </div>
    </div>
  );
};
