"use client";

import { Confirm1 } from "@/components/Confirm1";
import { Confirm2 } from "@/components/Confirm2";
import { Confirm3 } from "@/components/Confirm3";
import { useRouter } from "next/navigation";
import { useState } from "react";

const steps = [Confirm1, Confirm2, Confirm3];

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const StepComponents = steps[step];

  const continueHandler = () => {
    if (step === 2) {
      //apicall
      router.push("/user");
      return;
    }
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <StepComponents continueHandler={continueHandler} />
    </div>
  );
}
