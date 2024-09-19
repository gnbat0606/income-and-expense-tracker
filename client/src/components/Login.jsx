"use client";

import { AuthTitle } from "@/components/AuthTitle";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { AuthFooter } from "./AuthFooter";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [error, setError] = useState("");
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });
  const usernameHandler = (event) => {
    event.preventDefault();
    setLoginInput((prev) => ({ ...prev, username: event.target.value }));
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    setLoginInput((prev) => ({ ...prev, password: event.target.value }));
  };

  const login = async () => {
    const { username, password } = loginInput;
    console.log(loginInput);

    if (!loginInput.password | !loginInput.username) {
      setError("Username passwordoo hiine uu");
    } else {
      setError("");
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          username,
          password,
        }
      );
      console.log(response);

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <AuthTitle
        title={"Welcome Back"}
        description={"Welcome back, Please enter your details"}
      />
      <div className="w-[384px] flex flex-col gap-4 items-center">
        <Input
          type="text"
          inputHandler={usernameHandler}
          placeholder={"username"}
        />
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
