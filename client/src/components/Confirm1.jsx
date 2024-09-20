"use client";

import { Button } from "./Button";
import daisyui from "daisyui";
import { Progress } from "./Progress";

export const Confirm1 = ({ continueHandler }) => {
  const handler = async () => {
    continueHandler();
  };
  return (
    <div>
      1<div></div>
      <div>
        {/* <img src="Frame 10.png" alt="" />
        <h1>Select base currency</h1>
        <select name="" id="">
          <option value=""></option>
        </select>
        <p>
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p> */}
        <Button clickHandler={handler} text={"confirm"} />
      </div>
    </div>
  );
};
