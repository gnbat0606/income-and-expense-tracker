"use client";

import { AuthTitle } from "@/components/AuthTitle";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { AuthFooter } from "./AuthFooter";
import { useState } from "react";

export const Login = () => {
  const [error, setError] = useState("");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const emailHandler = (event) => {
    event.preventDefault();
    setLoginInput((prev) => ({ ...prev, email: event.target.value }));
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    setLoginInput((prev) => ({ ...prev, password: event.target.value }));
  };

  const login = () => {
    console.log(loginInput);
    if (!loginInput.password | !loginInput.email) {
      setError("Email passwordoo hiine uu");
    } else {
      setError("");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <AuthTitle
        title={"Welcome Back"}
        description={"Welcome back, Please enter your details"}
      />
      <div className="w-[384px] flex flex-col gap-4 items-center">
        <Input type="text" inputHandler={emailHandler} placeholder={"Email"} />
        <Input
          type={"password"}
          inputHandler={passwordHandler}
          placeholder={"Password"}
        />
        {error && <div className="text-red-600">{error}</div>}
        <Button clickHandler={login} text={"Log in"} />
      </div>
      <AuthFooter
        prop={"/signup"}
        footerText={"Don’t have account?"}
        buttonText={"Sign up"}
      />
    </div>
  );
};
