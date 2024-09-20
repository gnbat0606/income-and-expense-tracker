"use client";

import { Button } from "./Button";

export const Confirm3 = ({ continueHandler }) => {
  const handler = async () => {
    continueHandler();
  };
  return (
    <div>
      <div>
        <img src="logo&name.png" alt="" />
        <ul className=" steps steps-vertical lg:steps-horizontal">
          <li className=" step step-primary">Register</li>
          <li className=" step step-primary">Choose plan</li>
          <li className=" step step-primary">Purchase</li>
        </ul>
      </div>
      <div>
        <img src="Frame 10.png" alt="" />
        <h1>Select base currency</h1>
        <Button clickHandler={handler} text={"confirm"} />
      </div>
    </div>
  );
};
