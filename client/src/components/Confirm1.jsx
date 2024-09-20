"use client";

import { Button } from "./Button";
import daisyui from "daisyui";

export const Confirm1 = ({ continueHandler }) => {
  const handler = async () => {
    continueHandler();
  };
  return (
    <div>
      <div>
        <img src="logo&name.png" alt="" />
        <ul className=" steps steps-vertical lg:steps-horizontal">
          <li className=" step step-primary">Register</li>
          <li className=" step">Choose plan</li>
          <li className=" step">Purchase</li>
        </ul>
      </div>
      <div>
        <Button clickHandler={handler} text={"confirm"} />
      </div>
    </div>
  );
};
