"use client";

export const Progress = ({ step }) => {
  return (
    <div className="flex flex-col items-center gap-12 w-[240px] text-sm">
      <img src="logo&name.png" alt="" />
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className={"step step-primary"}>Currency</li>
        <li className={`step ${step >= 1 && "step-primary"}`}>Balance</li>
        <li className={`step ${step >= 2 && "step-primary"}`}>Finish</li>
      </ul>
    </div>
  );
};
