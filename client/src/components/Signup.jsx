"use client";

import React, { useState } from "react";
import { AuthTitle } from "./AuthTitle";
import { Button } from "./Button";
import { AuthFooter } from "./AuthFooter";
import { Input } from "./Input";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Signup = () => {
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const router = useRouter();

  const nameHandler = (event) => {
    event.preventDefault();
    setUserInput((prev) => ({ ...prev, username: event.target.value }));
  };

  const emailHandler = (event) => {
    event.preventDefault();
    setUserInput((prev) => ({ ...prev, email: event.target.value }));
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setUserInput((prev) => ({ ...prev, password: event.target.value }));
  };

  const rePasswordHandler = (event) => {
    event.preventDefault();
    setUserInput((prev) => ({ ...prev, rePassword: event.target.value }));
  };

  const register = async () => {
    const { username, email, password, rePassword } = userInput;
    if (userInput.password !== userInput.rePassword) {
      setError("2 password zuruuud baina");
      return;
    } else {
      alert("sign up success");
      setError("");
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/signup",
        {
          username,
          email,
          password,
          rePassword,
        }
      );
      router.push("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-10">
      <AuthTitle
        title={"Create Geld account"}
        description={"Sign up below to create your Wallet account"}
      />
      <div className="w-[384px] flex flex-col gap-4 items-center">
        <Input placeholder={"Name"} inputHandler={nameHandler} />
        <Input placeholder={"Email"} inputHandler={emailHandler} />
        <Input
          type="password"
          placeholder={"Password"}
          inputHandler={passwordHandler}
        />
        <Input
          type="password"
          placeholder={"Re-Password"}
          inputHandler={rePasswordHandler}
        />
        {error && <div className="text-red-600">{error}</div>}
        <Button text={"Sign up"} clickHandler={register} />
      </div>
      <AuthFooter
        prop={"/login"}
        footerText={"Already have account?"}
        buttonText={"Log in"}
      />
    </div>
  );
};
